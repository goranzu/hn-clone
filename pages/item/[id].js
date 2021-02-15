/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import ArticleMeta from "../../components/article-meta/ArticleMeta";
import Container from "../../components/container/Container";
import Comment from "../../components/comment/Comment";
import CommentsList from "../../components/comments-list/CommentsList";
import styles from "./item-page.module.css";

export default function ItemPage() {
  // TODO: Style the loading state
  const { query } = useRouter();
  const { data, status, error } = useQuery(
    ["item", query.id],
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
          <section>
            <a href={article.url} className={styles.titleLink}>
              <h2>{article.title}</h2>
              <p>{article.domain}</p>
            </a>
            <ArticleMeta
              comments_count={article.comments_count}
              id={article.id}
              points={article.points}
              time_ago={article.time_ago}
              user={article.user}
            />
          </section>

          {article.comments.length > 0 ? (
            <section>
              <CommentsList>
                {article.comments.map((comment) => {
                  return <Comment key={comment.id} comment={comment} />;
                })}
              </CommentsList>
            </section>
          ) : null}
        </article>
      </main>
    </Container>
  );
}
