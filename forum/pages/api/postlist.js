import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");

  if (req.method === "GET") {
    const result = await db.collection("post").find().toArray();
    return res.status(200).json(result);
  }
}
