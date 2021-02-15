import DOMPurify from "isomorphic-dompurify";
import PropTypes from "prop-types";
import styles from "./user.module.css";

const userLinks = [
  {
    label: "submissions",
    path: "https://news.ycombinator.com/submitted?",
  },
  {
    label: "comments",
    path: "https://news.ycombinator.com/threads?",
  },
  {
    label: "favorites",
    path: "https://news.ycombinator.com/favorites?",
  },
];

export default function User({ id, created, karma, about }) {
  function createAbout() {
    return { __html: DOMPurify.sanitize(about) };
  }

  return (
    <article className={styles.user}>
      <p>User: {id}</p>
      <p>created {created}</p>
      <p>karma: {karma}</p>
      <p>About:</p>
      <div dangerouslySetInnerHTML={createAbout()} />
      <div className={styles.links}>
        {userLinks.map((link, index) => (
          <p key={link.label}>
            <a href={`${link.path}id=${id}`}>{link.label}</a>
            {index < userLinks.length - 1 && " / "}
          </p>
        ))}
      </div>
    </article>
  );
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  karma: PropTypes.number,
  about: PropTypes.string,
};
