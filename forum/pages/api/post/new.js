import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  console.log(session);
  if (session) {
    req.body.author = session.user.email;
  } else {
    res.status(400).json("계정정보 없음");
  }
  if (req.body.title === "") return res.status(400).json("제목이 없음");
  if (req.body.content === "") return res.status(400).json("글 내용이 없음");

  if (req.method === "POST") {
    const db = (await connectDB).db("forum");
    await db.collection("post").insertOne({ ...req.body });
    res.redirect(302, "/list");
  }
}

// todo
// 제목이 빈칸이면 글 저장 막기
// body.title 공백 검사하고 status 에러 뱉기

// 글 내용이 없으면 글 저장 막기

// 유저 -> 서버 -> db 식으로 개발을 해야 가능함
