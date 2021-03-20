import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import Page from "../../components/page/Page";
import useLoadData from "../../hooks/useLoadData";
import getArticles from "../../lib/getArticles";

const RESOURCE = "news";
const QUERY_ID = "topArticles";

export default function TopArticles() {
  const { data, page } = useLoadData({ queryId: QUERY_ID, resource: RESOURCE });

  return <Page data={data} page={page} pageName="Top" />;
}

export async function getStaticPaths() {
  return {
    paths: Array.from({ length: 10 }).map((_, i) => {
      return {
        params: { page: String((i += 1)) },
      };
    }),
    fallback: false,
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
    revalidate: 60, // 2 minutes
  };
}
