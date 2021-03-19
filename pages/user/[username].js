import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Container from "../../components/container/Container";
import User from "../../components/user/User";

const QUERY_ID = "usersQuery";

export default function TopArticles() {
  const { query } = useRouter();
  const { data, status } = useQuery(
    QUERY_ID,
    async () => getUser(query.username),
    {
      staleTime: Infinity,
    },
  );

  return (
    <Container>
      <Head>
        <title>Hacker News Clone | User {query.username}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {status === "loading" && <p>Loading...</p>}
        {status === "error" && (
          <p>Something went wrong... please try again later</p>
        )}
        {status === "success" && (
          <User
            about={data.about}
            created={data.created}
            id={data.id}
            karma={data.karma}
          />
        )}
      </main>
    </Container>
  );
}

async function getUser(username) {
  const { data } = await axios.get(
    `https://api.hnpwa.com/v0/user/${username}.json`,
  );
  return data;
}
