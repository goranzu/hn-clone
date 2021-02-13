/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./article-meta.module.css";

export default function ArticleMeta({
  points,
  user,
  time_ago,
  comments_count,
  id,
}) {
  return (
    <p className={styles.meta}>
      {/* points - user - timeAgo | comments */}
      {points > 0 && `${points} points, by `}
      {user.length > 0 && (
        <Link href={`/user/${user}`}>
          <a className={styles.user}>{user}</a>
        </Link>
      )}{" "}
      {time_ago}{" "}
      {comments_count > 0 && (
        <>
          {"| "}
          <Link href={`/item/${id}`}>
            <a className={styles.comments}>{comments_count} comments</a>
          </Link>
        </>
      )}
    </p>
  );
}

ArticleMeta.propTypes = {
  points: PropTypes.number,
  user: PropTypes.string,
  time_ago: PropTypes.string,
  comments_count: PropTypes.number,
  id: PropTypes.number,
};
