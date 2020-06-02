import styles from "./ScrollContainer.module.css";
import ScrollPoints from "../ScrollPoints/ScrollPoints";

export interface ScrollContainerProps {
  points: string[];
  activePoint: number;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <div className={styles.scrollContainer}>
      {children} <ScrollPoints {...props} />
    </div>
  );
};

export default ScrollContainer;
