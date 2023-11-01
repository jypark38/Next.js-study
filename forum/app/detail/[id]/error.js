"use client";

export default function Error({ error, reset }) {
  // props : error, reset
  // page에서 에러나면 이거로 이동
  // client component 필수
  // error : 에러메세지
  // reset : 페이지 다시 로드
  return (
    <div>
      <h1>에러남</h1>
      <button onClick={() => reset()}>리셋</button>
    </div>
  );
}
