import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  console.log(params);
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}

// {params:{params}}?
export function getServerSideProps({ params: { params } }) {
  // server-side context
  // console.log(ctx);
  console.log(params);

  return {
    props: {
      params,
    },
  };
}
