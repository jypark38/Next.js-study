import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const body = JSON.parse(req.body);

  if (body.title === "") res.status(400).json("제목이 없음");

  if (req.method === "POST") {
    const postId = req.query;
    const updateBody = {
      title: body.title,
      content: body.content,
    };
    const db = (await connectDB).db("forum");
    const posts = db.collection("post");

    const post = await posts.findOne({ _id: new ObjectId(postId) });

    // 세션 이메일과 포스트 저자 이메일이 같은지 확인
    if (session.user.email !== post.author) res.status(400).json("정보 불일치");

    await posts.updateOne({ _id: new ObjectId(postId) }, { $set: { ...updateBody } });
    res.status(200).json("완료");
  }
}
