import { useEffect } from "react";
import styles from "./Galaxy.module.css";
import Galaxy from "../../classes/Galaxy";
import Graph from "../../classes/Graph";

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
      particlesNumber: 200,
    });
    new Graph({
      nodes: [
        { color: "white", layer: 0, text: "42", radians: 1, velocity: 0.00005 },
        {
          color: "white",
          layer: 1,
          text: "minishell",
          radians: 0.5,
          velocity: 0.0065,
        },
        {
          color: "white",
          layer: 2,
          text: "cub3D",
          radians: 2,
          velocity: 0.0075,
        },
      ],
      containerId: `galaxy-container-${id}`,
    });
  }, []);
  return (
    <div className={styles.canvasContainer} id={`galaxy-container-${id}`}>
      <canvas className={styles.canvas} id={`galaxy-${id}`}></canvas>
      <canvas className={styles.canvas} id={`graph-${id}`}></canvas>
    </div>
  );
}
