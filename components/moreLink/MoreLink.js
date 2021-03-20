import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./more-link.module.css";
import { useRouter } from "next/router";

export default function MoreLink({ page }) {
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  return (
    <div className={styles.link}>
      <Link href={`/${path}/${page}`}>more...</Link>
    </div>
  );
}

MoreLink.propTypes = {
  page: PropTypes.number.isRequired,
};
