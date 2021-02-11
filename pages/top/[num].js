import Head from "next/head";
import { useRouter } from "next/router";
import { QueryClient, useQuery } from "react-query";
import axios from "axios";
import { dehydrate } from "react-query/hydration";
import Container from "../../components/container/Container";
import Articles from "../../components/articles/Articles";
import MoreLink from "../../components/moreLink/MoreLink";

export default function Top() {
  const { query } = useRouter();
  const { data } = useQuery("topPosts", async () => getPosts(query.num));

  const num = Number(query.num);

  if (data == null) {
    return (
      <Container>
        <p>Something went wrong... Please try again later.</p>
      </Container>
    );
  }

  return (
    <Container>
      <Head>
        <title>Hacker News Clone | Top</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Articles page={num} articles={data} />
      <MoreLink page={num + 1} />
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("topPosts", async () => getPosts(params.num));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

async function getPosts(num) {
  const { data } = await axios.get(`https://api.hnpwa.com/v0/news/${num}.json`);
  return data;
}
