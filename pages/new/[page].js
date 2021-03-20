import { useRouter } from "next/router";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import Page from "../../components/page/Page";
import useLoadData from "../../hooks/useLoadData";
import getArticles from "../../lib/getArticles";

const RESOURCE = "newest";
const QUERY_ID = "newestArticles";

export default function NewArticles() {
  const router = useRouter();
  const { data, page } = useLoadData({ queryId: QUERY_ID, resource: RESOURCE });

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <Page data={data} page={page} pageName="New" />;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { page: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(QUERY_ID, async () =>
    getArticles({ page: params.page, resource: RESOURCE }),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60, // 1 minute
  };
}
