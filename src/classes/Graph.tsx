interface Node {
  text: string;
  color: string;
  layer: number;
  radians: number;
  velocity: number;
}

interface Props {
  nodes: Node[];
  containerId: string;
}

export default class Graph {
  nodes: Node[];
  canvas: HTMLCanvasElement;
  canvasContainer: HTMLElement;
  c: CanvasRenderingContext2D;
  nodeRadius: number;
  distanceBetweenNodes: number;

  constructor(props: Props) {
    this.nodes = props.nodes;
    this.canvas = document.getElementById("graph-42") as HTMLCanvasElement;
    this.c = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.canvasContainer = document.getElementById(
      props.containerId
    ) as HTMLElement;
    this.listenResize();
    this.resizeCanvas();
    this.nodeRadius = this.resizeNode();
    this.distanceBetweenNodes = this.nodeRadius * 2.5;
    this.animate();
  }

  listenResize = () => {
    addEventListener("resize", () => {
      this.resizeCanvas();
    });
  };

  resizeCanvas = () => {
    this.canvas.width = this.canvasContainer.clientWidth;
    this.canvas.height = this.canvasContainer.clientHeight;
    this.resizeNode();
  };

  resizeNode = () => {
    this.nodeRadius = Math.min(this.canvas.width, this.canvas.height) / 20;

    return this.nodeRadius;
  };

  drawGraph = () => {
    this.nodes.forEach((node) => this.drawNode(node));
  };

  drawNode = (node: Node) => {
    node.radians += node.velocity;
    this.c.beginPath();

    const x =
      this.canvas.width / 2 +
      Math.cos(node.radians) * this.distanceBetweenNodes * node.layer;

    const y =
      this.canvas.height / 2 +
      Math.sin(node.radians) * this.distanceBetweenNodes * node.layer;

    this.c.strokeStyle = "white";
    this.c.lineWidth = 0.25;

    this.c.arc(x, y, this.nodeRadius, 0, 2 * Math.PI);

    this.c.stroke();
    this.c.closePath();
    this.drawText(x, y, node.text);
  };

  drawText = (x: number, y: number, text: string) => {
    this.c.textAlign = "center";
    this.c.textBaseline = "middle";

    this.c.font = `${this.nodeRadius / 2}px Georgia, serif`;
    this.c.fillStyle = "white";

    this.c.fillText(text, x, y, (this.nodeRadius * 4) / 2.5);
  };

  animate = () => {
    requestAnimationFrame(this.animate);
    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawGraph();
  };
}
