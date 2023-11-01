import Comment from "./Comment";
import { ObjectId } from "mongodb";
import NotFound from "./not-found";

export default async function Detail(props) {
  let data;

  try {
    data = await fetchData(props.params.id);
  } catch (error) {
    return <div>404</div>;
  }

  if (data === null) {
    return NotFound();
  }

  return (
    <div>
      <h4>{data.title}</h4>
      <p>{data.author}</p>
      <p>{data.content}</p>
      <Comment postId={props.params.id} />
    </div>
  );
}

const fetchData = async (id) => {
  try {
    const response = await fetch("http://localhost:3000/api/post/get?id=" + id, {
      method: "GET",
      cache: "no-cache",
    });

    if (!response.ok) throw new Error("에러");

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
