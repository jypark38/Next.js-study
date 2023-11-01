import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const db = (await connectDB).db("forum");
    const comments = db.collection("comment");
    console.log(req.query.id);
    if (req.query.id) {
      const response = await comments.find({ parent: new ObjectId(req.query.id) }).toArray();
      res.setHeader("Content-Type", "application/json"); // 명시적으로 JSON 데이터임을 설정

      return res.status(200).json(response);
    }
  }
}
