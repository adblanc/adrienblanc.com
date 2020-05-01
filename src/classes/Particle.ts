interface IParticle {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: number;
  distanceFromCenter: number;
  c: CanvasRenderingContext2D;
}

export default class Particle {
  particle: IParticle;
  originalX: number;
  originalY: number;
  radians: number;
  constructor(particle: IParticle) {
    const { x, y } = particle;
    this.particle = particle;
    this.originalX = x;
    this.originalY = y;
    this.radians = Math.random() * Math.PI * 2;
  }

  draw(lastPoint: { x: number; y: number }) {
    const { c, color, radius, x, y } = this.particle;

    c.beginPath();
    c.strokeStyle = color;
    c.lineWidth = radius;
    c.moveTo(lastPoint.x, lastPoint.y);
    c.lineTo(x, y);
    c.stroke();
    c.closePath();
  }

  update() {
    const { velocity, distanceFromCenter } = this.particle;
    const lastPoint = { x: this.particle.x, y: this.particle.y };

    this.radians += velocity;
    this.particle.x =
      this.originalX + Math.cos(this.radians) * distanceFromCenter;
    this.particle.y =
      this.originalY + Math.sin(this.radians) * distanceFromCenter;
    this.draw(lastPoint);
  }
}
