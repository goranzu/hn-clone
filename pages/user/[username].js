import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Container from "../../components/container/Container";
import User from "../../components/user/User";

const QUERY_ID = "usersQuery";

export default function TopArticles() {
  const { query } = useRouter();
  const { data } = useQuery(QUERY_ID, async () => getUser(query.username), {
    staleTime: Infinity,
  });

  if (data == null) {
    return (
      <Container style={{ marginTop: "2em" }}>
        <p>Something went wrong... Please try again later.</p>
      </Container>
    );
  }

  return (
    <Container>
      <Head>
        <title>Hacker News Clone | User {query.username}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <User
          about={data.about}
          created={data.created}
          id={data.id}
          karma={data.karma}
        />
      </main>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(QUERY_ID, async () =>
    getUser(params.username),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

async function getUser(username) {
  const { data } = await axios.get(
    `https://api.hnpwa.com/v0/user/${username}.json`,
  );
  return data;
}