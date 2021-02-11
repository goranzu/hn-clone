import PropTypes from "prop-types";
import Article from "../article/Article";
import styles from "./articles.module.css";

export default function Articles({ articles, page }) {
  const startRank = page > 1 ? (page - 1) * 30 : 0;

  return (
    <main className={styles.articles}>
      {articles.map((preview, index) => (
        <Article
          key={preview.id}
          comments_count={preview.comments_count}
          domain={preview.domain || ""}
          rank={index + startRank}
          points={preview.points || 0}
          time_ago={preview.time_ago}
          title={preview.title}
          url={preview.url}
          user={preview.user || ""}
        />
      ))}
    </main>
  );
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
};
