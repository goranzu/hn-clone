import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./more-link.module.css";

export default function MoreLink({ page }) {
  return (
    <div className={styles.link}>
      <Link href={`/top/${page}`}>more...</Link>
    </div>
  );
}

MoreLink.propTypes = {
  page: PropTypes.number.isRequired,
};
