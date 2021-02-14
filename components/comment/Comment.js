/* eslint-disable jsx-a11y/anchor-is-valid */
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import PropTypes from "prop-types";
import CommentsList from "../comments-list/CommentsList";
import styles from "./comment.module.css";

export default function Comment({ comment }) {
  return (
    <li>
      <p className={styles.userLink}>
        <Link href={`/user/${comment.user}`}>
          <a> {comment.user}</a>
        </Link>
        , <small>{comment.time_ago}</small>
      </p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(comment.content),
        }}
      ></div>
      {comment.comments.length > 0 ? (
        <CommentsList>
          {comment.comments.map((c) => (
            <Comment key={c.id} comment={c} />
          ))}
        </CommentsList>
      ) : null}
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.any,
};
