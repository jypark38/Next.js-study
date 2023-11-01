import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { host, protocal } from "@/util/config";

export const dynamic = "force-dynamic";

export default async function List() {
  const result = await fetch(`api/post/get`, {
    method: "GET",
    cache: "no-store",
  }).then((res) => {
    return res.json();
  });

  return (
    <div className="list-bg">
      {result.map((post, idx) => (
        <div className="list-item" key={idx}>
          <Link href={"/detail/" + post._id.toString()}>
            <h4>{post.title}</h4>
          </Link>
          <br />
          <Link href={"/edit/" + post._id.toString()}>✏️</Link>

          <DeleteButton id={post._id} />
        </div>
      ))}
    </div>
  );
}
