import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export const revalidate = 20;

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().sort("date").toArray();

  result = result.map((a) => {
    a._id = a._id.toString();
    a.date = a.date.toString();
    return a;
  });

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
