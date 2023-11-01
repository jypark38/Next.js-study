import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log(body);
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    body.author = session.user.email;
  } else {
    res.status(400).json("계정정보 없음");
  }

  if (body.comment === "") return res.status(400).json("댓글 내용이 없음");
  if (req.method === "POST") {
    const db = (await connectDB).db("forum");
    await db.collection("comment").insertOne({ ...body, parent: new ObjectId(body.parent) });
    const response = await db
      .collection("comment")
      .find({ parent: new ObjectId(body.parent) })
      .toArray();

    return res.status(200).json(response);
  }
}
