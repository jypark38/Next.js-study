import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// export const authOptions = {
//   // 구현하고 싶은 로그인 방식
//   // 추가로 구글 로그인을 추가하고싶으면 구글 프로바이더 찾아서 추가
//   providers: [
//     GithubProvider({
//       clientId: "109120c5c9271d90e734",
//       clientSecret: "bba7b9b9cd80d6dc93dbf316b0a6c78ed6c21b9e",
//     }),
//   ],
//   // jwt 방식 쓸거면 아래처럼 하면 댐
//   // 아무거나
//   secret: "qwer1234",
// };
// export default NextAuth(authOptions);

// adapter방식
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "109120c5c9271d90e734",
      clientSecret: "bba7b9b9cd80d6dc93dbf316b0a6c78ed6c21b9e",
    }),
  ],

  secret: "qwer1234",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
