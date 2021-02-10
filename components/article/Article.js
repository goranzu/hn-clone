/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./article.module.css";

export default function Article({
  index,
  url,
  title,
  domain,
  points,
  user,
  time_ago,
  comments_count,
}) {
  return (
    <article className={styles.article}>
      <span className={styles.count}>{index + 1}</span>
      <h2 className={styles.heading}>
        <a href={url}>
          {title} <small className={styles.domain}>{domain}</small>{" "}
        </a>
      </h2>
      <p className={styles.meta}>
        {/* points - user - timeAgo | comments */}
        {points > 0 && `${points} points, by `}
        {user.length > 0 && (
          <Link href="/">
            <a className={styles.user}>{user}</a>
          </Link>
        )}{" "}
        {time_ago}{" "}
        {comments_count > 0 && (
          <>
            {"| "}
            <Link href="/">
              <a className={styles.comments}>{comments_count} comments</a>
            </Link>
          </>
        )}
      </p>
    </article>
  );
}

Article.propTypes = {
  index: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  comments_count: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  time_ago: PropTypes.string.isRequired,
};
