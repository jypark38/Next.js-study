import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    // 10 : 아무 숫자
    const db = (await connectDB).db("forum");
    await db.collection("user_cred").insertOne(req.body);

    res.status(200).json("가입완료");
  }
}
