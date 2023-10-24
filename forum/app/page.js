import { connectDB } from "@/util/database";

export default async function Home() {
  // const db = (await connectDB).db("forum");
  // // post 데이터를 배열로 변환
  // const result = await db.collection("post").find().toArray();
  // console.log(result);
  // DB입출력 코드는 server component 안에서만
  // client component 안에 적은 코드는 유저들도 쉽게 볼 수 있기 때문

  return <div>hi</div>;
}
