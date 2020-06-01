import { useEffect } from "react";
import styles from "./Galaxy.module.css";
import { graph42 } from "../../constants";
import { createGalaxy } from "../../utils/galaxys";

interface Props {
  id: string;
}

export default function GalaxyComponent({ id }: Props) {
  useEffect(() => {
    createGalaxy(id);
    graph42();
  }, []);
  return (
    <div className={styles.canvasContainer} id={`galaxy-container-${id}`}>
      <canvas className={styles.canvas} id={`galaxy-${id}`}></canvas>
      <canvas className={styles.canvas} id={`graph-${id}`}></canvas>
    </div>
  );
}
