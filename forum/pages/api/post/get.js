/* Todo
 * 게시글 하나만 부르는 기능도 만들기
 */

import { connectDB } from "@/util/database";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {

  if (req.method === "GET") {
    const db = (await connectDB).db("forum");
    const post = db.collection("post")
    if(req.query.id){
        const result = await post.findOne({ _id: new ObjectId(req.query.id) });
        res.setHeader("Content-Type", "application/json"); // 명시적으로 JSON 데이터임을 설정

        return res.status(200).json(result)   
    }

    const result = await post.find().toArray();
    res.setHeader("Content-Type", "application/json"); // 명시적으로 JSON 데이터임을 설정

    return res.status(200).json(result);
  }
}

