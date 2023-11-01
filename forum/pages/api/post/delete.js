import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    console.log("!1111", req.body);

    const session = await getServerSession(req, res, authOptions);
    console.log(session);
    if (!session) return res.status(500).json("유저정보없음");

    const db = (await connectDB).db("forum");
    const post = db.collection("post");
    const user = await post.findOne({ _id: new ObjectId(req.body) });
    console.log(user);

    if (user.author === session.user.email) {
      const result = await post.deleteOne({ _id: new ObjectId(req.body) });
      console.log(result);
      // document 삭제 결과 알려줌
      // deletedCount 이용해서 응답 결과 분기처리 하면 좋다.
      res.status(200).json("삭제");
    }
    res.status(400).json("현재유저와 작성자 불일치");
  }
}
