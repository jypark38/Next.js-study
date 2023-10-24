"use client";

import DetailLink from "./DetailLink";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((post, idx) => (
        <div className="list-item" key={idx}>
          <h4>{post.title}</h4>
          <DetailLink id={post._id.toString()} />
          <br />
          <Link href={"/edit/" + post._id.toString()}>✏️</Link>

          <span
            type="button"
            onClick={(e) => {
              // fetch("/api/post/delete", {
              //   method: "DELETE",
              //   body: post._id,
              // })
              //   // AJAX 에러처리
              //   .then((res) => {
              //     if (res.status === 200) {
              //       return res.json();
              //     } else {
              //       // 서버가 에러 코드 전송시 실행할 코드
              //       throw new Error("에러");
              //     }
              //   })
              //   .then(() => {
              //     const Item = e.target.parentElement;
              //     Item.style.opacity = 0;
              //     setTimeout(() => {
              //       Item.style.display = "none";
              //     }, 1000);
              //   })
              //   .catch((error) => {
              //     console.log(error);
              //   });
              fetch("/api/test?name=1&age=20");
              fetch("/api/abc/kim");
            }}
          >
            🗑️
          </span>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
}
