import EditForm from "./EditForm";

export default async function Edit(props) {
  // AJAX로 바꿔보기?
  const post = await fetch("http://localhost:3000/api/post/get?id=" + props.params.id, {
    method: "GET",
    cache: "no-store",
  }).then((res) => {
    return res.json();
  });

  return (
    <div className="p-20">
      <h4>수정 페이지</h4>
      <EditForm post={post} />
    </div>
  );
}
