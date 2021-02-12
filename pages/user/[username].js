import axios from "axios";
import { useRouter } from "next/router";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Container from "../../components/container/Container";

const QUERY_ID = "usersQuery";

export default function TopArticles() {
  const { query } = useRouter();
  const { data } = useQuery(QUERY_ID, async () => getUser(query.username));

  if (data == null) {
    return (
      <Container style={{ marginTop: "2em" }}>
        <p>Something went wrong... Please try again later.</p>
      </Container>
    );
  }
  return (
    <div>
      <h1>users</h1>
    </div>
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
    `https://api.hnpwa.com/v0/users/${username}.json`,
  );
  return data;
}
