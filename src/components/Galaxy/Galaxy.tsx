import { useEffect } from "react";
import styles from "./Galaxy.module.css";
import Galaxy from "../../classes/Galaxy";

interface Props {
  id: string;
}

export default function GalaxyComponent({ id }: Props) {
  useEffect(() => {
    const colors = ["#BFBFBF", "#909090", "#6B6B6B", "#212121"];
    new Galaxy({
      canvasId: `galaxy-${id}`,
      containerId: `galaxy-container-${id}`,
      colors,
      particlesNumber: 100,
    });
  }, []);
  return (
    <div className={styles.canvasContainer} id={`galaxy-container-${id}`}>
      <canvas className={styles.canvas} id={`galaxy-${id}`}></canvas>
    </div>
  );
}
