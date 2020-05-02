import Particle from "./Particle";
import { randomIntFromRange, randomColor, getRandomArbitrary } from "../utils";

interface IGalaxy {
  canvasId: string;
  containerId: string;
  colors: string[];
  particlesNumber: number;
}

export default class Galaxy {
  private galaxy: IGalaxy;
  private canvas: HTMLCanvasElement;
  private canvasContainer: HTMLElement;
  private c: CanvasRenderingContext2D;
  private particles: Particle[];
  constructor(galaxy: IGalaxy) {
    this.galaxy = galaxy;
    this.canvas = document.getElementById(galaxy.canvasId) as HTMLCanvasElement;
    this.canvasContainer = document.getElementById(
      galaxy.containerId
    ) as HTMLElement;
    this.c = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.listenResize();
    this.resizeCanvas();
    this.particles = this.initParticles();
    this.animate();
  }

  listenResize = () => {
    addEventListener("resize", () => {
      this.resizeCanvas();
      this.particles = this.initParticles();
    });
  };

  resizeCanvas = () => {
    this.canvas.width = this.canvasContainer.clientWidth;
    this.canvas.height = this.canvasContainer.clientHeight;
  };

  initParticles = () => {
    const particles = [];

    for (let i = 0; i < this.galaxy.particlesNumber; i++) {
      particles.push(
        new Particle({
          c: this.c,
          x: this.canvas.width / 2,
          y: this.canvas.height / 2,
          radius: randomIntFromRange(0.5, 1.5),
          color: randomColor(this.galaxy.colors),
          velocity: getRandomArbitrary(0.0035, 0.0085),
          distanceFromCenter: randomIntFromRange(
            50,
            Math.min(this.canvas.width, this.canvas.height) / 2
          ),
        })
      );
    }
    return particles;
  };

  animate = () => {
    requestAnimationFrame(this.animate);
    this.c.fillStyle = "rgba(0, 0, 0, 0.08)";
    this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((particle) => {
      particle.update();
    });
  };
}
