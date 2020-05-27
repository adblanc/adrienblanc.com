import styles from "./ScrollContainer.module.css";

export interface ScrollContainerProps {}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
  return <div className={styles.scrollContainer}>{children}</div>;
};

export default ScrollContainer;
