export default function Write() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      {/* submit을 누르면 해당 url로 post요청 */}
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글 제목" />
        <input name="content" placeholder="글 내용" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
