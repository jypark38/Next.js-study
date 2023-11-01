import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = (await connectDB).db("forum");

    if (db.collection("user_cred").findOne({ email: req.body.email })) res.status(500).json("중복");

    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    // 10 : 아무 숫자
    await db.collection("user_cred").insertOne(req.body);

    res.status(200).json("가입완료");
  }
}
