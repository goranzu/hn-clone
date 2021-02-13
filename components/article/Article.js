/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import ArticleMeta from "../article-meta/ArticleMeta";
import styles from "./article.module.css";

export default function Article({
  rank,
  url,
  title,
  domain,
  points,
  user,
  time_ago,
  comments_count,
  id,
}) {
  return (
    <article className={styles.article}>
      <span className={styles.rank}>{rank + 1}</span>
      <h2 className={styles.heading}>
        <a href={url}>
          {title} <small className={styles.domain}>{domain}</small>{" "}
        </a>
      </h2>
      <ArticleMeta
        comments_count={comments_count}
        points={points}
        user={user}
        time_ago={time_ago}
        id={id}
      />
    </article>
  );
}

Article.propTypes = {
  rank: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  comments_count: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  time_ago: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
