import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.title === "") return res.status(400).json("제목이 없음");
    const updateBody = {
      title: req.body.title,
      content: req.body.content,
    };
    const db = (await connectDB).db("forum");
    await db.collection("post").updateOne({ _id: new ObjectId(req.body._id) }, { $set: { ...updateBody } });
    res.redirect(302, "/list");
  }
}
