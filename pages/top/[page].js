import { useRouter } from "next/router";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import Container from "../../components/container/Container";
import Page from "../../components/page/Page";
import useLoadData from "../../hooks/useLoadData";
import getArticles from "../../lib/getArticles";

const RESOURCE = "news";
const QUERY_ID = "topArticles";

export default function TopArticles() {
  const router = useRouter();
  const { data, page } = useLoadData({ queryId: QUERY_ID, resource: RESOURCE });

  if (router.isFallback) {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  }

  return <Page data={data} page={page} pageName="Top" />;
}

export async function getStaticPaths() {
  // Render first page, next pages render on demand.
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
