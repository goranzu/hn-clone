/* eslint-disable jsx-a11y/no-redundant-roles */
import PropTypes from "prop-types";
import styles from "./comments-list.module.css";

export default function CommentsList({ children }) {
  return (
    <ul role="list" className={styles.list}>
      {children}
    </ul>
  );
}

CommentsList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
