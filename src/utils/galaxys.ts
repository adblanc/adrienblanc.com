import Galaxy from "../classes/Galaxy";

const colors = ["#BFBFBF", "#909090", "#6B6B6B", "#212121"];

export const createGalaxy = (id: string) =>
  new Galaxy({
    canvasId: `galaxy-${id}`,
    containerId: `galaxy-container-${id}`,
    colors,
    particlesNumber: 200,
  });
