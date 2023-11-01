"use client";
import { useEffect, useState } from "react";

async function postComment(comment, parent, setState) {
  try {
    const res = await fetch("http://localhost:3000/api/comment/new", { method: "POST", body: JSON.stringify({ comment, parent }) });

    if (!res.ok) throw new Error("에러");
    const json = await res.json();
    setState(json);
  } catch {
    console.log("error");
  }
}

export default function Comment({ postId }) {
  const [comment, setComment] = useState("");
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api/comment/get?id=" + postId);

      if (res.ok) {
        const json = await res.json();
        console.log(json);
        setCommentData(json);
      }
    })();
  }, []);

  useEffect(() => {
    setComment("");
  }, [commentData]);

  return (
    <div>
      <hr></hr>
      <ul>
        {commentData.map((comment, idx) => (
          <li style={{ listStyle: "none" }} key={idx}>
            <p className="comment">{comment.comment}</p>
            <p className="comment-author">{comment.author}</p>
          </li>
        ))}
      </ul>

      <input value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={() => postComment(comment, postId, setCommentData)}>댓글 전송</button>
    </div>
  );
}
