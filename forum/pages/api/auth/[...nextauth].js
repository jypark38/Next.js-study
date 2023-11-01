import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// export const authOptions = {
//   // 구현하고 싶은 로그인 방식 기입
//   // 추가로 구글 로그인을 추가하고싶으면 구글 프로바이더 찾아서 추가
//   providers: [
//     GithubProvider({
//       clientId: "109120c5c9271d90e734",
//       clientSecret: "bba7b9b9cd80d6dc93dbf316b0a6c78ed6c21b9e",
//     }),
//   ],
//   // jwt 방식 쓸거면 아래처럼 하면 댐 (jwt 생성시 쓰는 암호)
//   // 아무거나
//   secret: "qwer1234",
// };
// export default NextAuth(authOptions);

// 소셜로그인은 기본적으로 JWT방식이 기본이라서 secret : 란에 JWT생성용 암호 맘대로 길게 입력하면 됩니다.
// 파일에 암호같은거 입력할 때 .env 파일같은거 쓰면 소스코드 공유시에 약간 더 안전합니다.

// adapter방식
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드
      name: "credentials",
      credentials: {
        // 로그인 페이지에 들어갈 INput들
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      //2. 로그인요청시 실행되는코드
      //직접 DB에서 아이디,비번 비교하고
      //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials) {
        let db = (await connectDB).db("forum");
        let user = await db.collection("user_cred").findOne({ email: credentials.email });
        if (!user) {
          console.log("해당 이메일은 없음");
          return null;
        }
        const pwcheck = await bcrypt.compare(credentials.password, user.password);
        if (!pwcheck) {
          console.log("비번틀림");
          return null;
        }
        return user;
      },
    }),
  ],

  //3. jwt 써놔야 잘됩니다 + jwt 만료일설정
  session: {
    strategy: "jwt",
    // 로그인 유지 기간
    maxAge: 30 * 24 * 60 * 60, //30일
  },
  callbacks: {
    //4. jwt 만들 때 실행되는 코드
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.name = user.name;
        token.user.email = user.email;
      }
      return token;
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },

  secret: "qwer1234",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
