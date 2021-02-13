/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import ArticleMeta from "../../components/article-meta/ArticleMeta";
import Container from "../../components/container/Container";

export default function ItemPage() {
  const { query } = useRouter();
  const { data, status, error } = useQuery(
    "item",
    async () => axios.get(`https://api.hnpwa.com/v0/item/${query.id}.json`),
    {
      staleTime: 60 * 60 * 60 * 5,
    },
  );

  if (status === "loading")
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );

  if (status === "error")
    return (
      <Container>
        <p>{error}</p>
      </Container>
    );

  const article = data.data;

  return (
    <Container>
      <Head>
        <title>{article.title}</title>
      </Head>
      <main>
        <article>
          <header>
            <Link href={article.url}>
              <a>
                <h2>{article.title}</h2>
                <p>{article.domain}</p>
              </a>
            </Link>
            <ArticleMeta
              comments_count={article.comments_count}
              id={article.id}
              points={article.points}
              time_ago={article.time_ago}
              user={article.user}
            />
          </header>

          <section>
            {article.comments.length > 0 &&
              article.comments.map((comment) => {
                return (
                  <div key={comment.id}>
                    <p>
                      {comment.user}, {comment.time_ago}
                    </p>
                    <br />
                    <p>{comment.content}</p>
                    <br />
                    {comment.comments.length > 0 &&
                      comment.comments.map((comment) => {
                        return (
                          <>
                            <p>
                              {comment.user}, {comment.time_ago}
                            </p>
                            <p>{comment.content}</p>
                          </>
                        );
                      })}
                  </div>
                );
              })}
          </section>
        </article>
      </main>
    </Container>
  );
}
