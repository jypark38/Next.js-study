"use client";
import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  return (
    // client interaction
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const body = e.target.body.value;

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        // 환경변수에는 기밀이 들어가는 데이터가 들어갈 확률이 있다.
        // 유출문제를 막으려고 기본적으로, 서버컴포넌트에서만 환경변수를 접근할 수 있따.
        // 웹브라우저를 위한 환경변수를 만들고 싶다면 NEXT_PUBLIC 접두사 붙이기.
        fetch(`${process.env.NEXT_PUBLIC_API_URL}topics`, options)
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            const lastId = res.id;
            router.refresh();
            router.push(`/read/${lastId}`);
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value={"create"} />
      </p>
    </form>
  );
}
