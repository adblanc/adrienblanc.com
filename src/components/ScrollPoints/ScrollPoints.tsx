import styles from "./ScrollPoints.module.css";

interface Props {
  points: string[];
  activePoint: number;
}

export default function ScrollPoints({ points, activePoint }: Props) {
  return (
    <div className={styles.controls}>
      {points.map((point, i) => (
        <a
          href={`#${point}`}
          key={point}
          className={i === activePoint ? styles.activeDot : styles.controlsDot}
        ></a>
      ))}
    </div>
  );
}
