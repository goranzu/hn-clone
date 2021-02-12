import { useRouter } from "next/router";
import { useQuery } from "react-query";
import getArticles from "../lib/getArticles";

export default function useLoadData({ queryId, resource }) {
  const { query } = useRouter();
  const page = Number(query.page);

  const { data } = useQuery(
    queryId,
    async () => getArticles({ page: query.page, resource }),
    {
      staleTime: 60 * 60 * 60 * 5,
    },
  );

  return { data, page };
}
