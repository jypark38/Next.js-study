"use client";

import Link from "next/link";

export default function DeleteButton({ id }) {
  const handleClick = (e) => {
    fetch("/api/post/delete", {
      method: "DELETE",
      body: id,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        // 서버가 에러 코드 전송시 실행할 코드
        throw new Error("에러");
      })
      .then(() => {
        console.log("하암");
        const Item = e.target.parentElement;
        Item.style.opacity = 0;
        setTimeout(() => {
          Item.style.display = "none";
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
    // fetch("/api/test?name=1&age=20");
    // fetch("/api/abc/kim");
  };
  return (
    <button type="button" onClick={(e) => handleClick(e)}>
      🗑️
    </button>
  );
}
