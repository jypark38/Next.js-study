"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ post }) {
  console.log(post);
  const [errorMsg, setErrorMsg] = useState("");
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/post/edit?id=${post._id}`, {
        method: "POST",
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      });
      if (!response.ok) throw res;
      router.push("/detail/" + post._id);
      router.refresh();
    } catch (error) {
      setErrorMsg(error);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        name="title"
        placeholder="글 제목"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        name="content"
        placeholder="글 내용"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      {!!errorMsg && <p>{errorMsg}</p>}
      <button type="submit">전송</button>
    </form>
  );
}
