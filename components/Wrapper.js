import styles from "../styles/wrapper.module.scss";
export const Wrapper = ({ children }) => (
  <div className={styles.wrapperContainer}>{children}</div>
);
