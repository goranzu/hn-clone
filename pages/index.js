import Head from "next/head";
import { QueryClient, useQuery } from "react-query";
import axios from "axios";
import { dehydrate } from "react-query/hydration";
import Container from "../components/container/Container";
import Article from "../components/article/Article";

export default function Home() {
  const { data } = useQuery("topPosts", getPosts);

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
      <main>
        {data.map((preview, index) => (
          <Article
            key={preview.id}
            comments_count={preview.comments_count}
            domain={preview.domain || ""}
            index={index}
            points={preview.points || 0}
            time_ago={preview.time_ago}
            title={preview.title}
            url={preview.url}
            user={preview.user || ""}
          />
        ))}
      </main>
    </Container>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("topPosts", getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

async function getPosts() {
  const { data } = await axios.get("https://api.hnpwa.com/v0/news/1.json");
  return data;
}
