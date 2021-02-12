import PropTypes from "prop-types";
import styles from "./container.module.css";

export default function Container({ children, ...props }) {
  return (
    <div {...props} className={styles.container}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
