import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import Page from "../../components/page/Page";
import useLoadData from "../../hooks/useLoadData";
import getArticles from "../../lib/getArticles";

const RESOURCE = "jobs";
const QUERY_ID = "jobArticles";

export default function AskArticles() {
  const { data, page } = useLoadData({ queryId: QUERY_ID, resource: RESOURCE });

  return <Page data={data} page={page} pageName="Jobs" />;
}

export async function getServerSideProps({ params }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(QUERY_ID, async () =>
    getArticles({ page: params.page, resource: RESOURCE }),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
