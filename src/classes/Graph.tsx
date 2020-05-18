import Router from "next/router";

interface Node {
  text: string;
  color: string;
  layer: number;
  radians: number;
  velocity: number;
  x: number;
  y: number;
  url: string;
  as: string;
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
  nodeRadiusPowerTwo: number;
  distanceBetweenNodes: number;

  constructor(props: Props) {
    this.nodes = props.nodes;
    this.canvas = document.getElementById("graph-42") as HTMLCanvasElement;
    this.c = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.canvasContainer = document.getElementById(
      props.containerId
    ) as HTMLElement;
    this.listenResize();
    this.listenCursorPointer();
    this.listenClickEvents();
    this.resizeCanvas();
    this.nodeRadius = this.resizeNode();
    this.nodeRadiusPowerTwo = this.nodeRadius * this.nodeRadius;
    this.distanceBetweenNodes = this.nodeRadius * 2.5;
    this.animate();
  }

  listenResize = () => {
    addEventListener("resize", () => {
      this.resizeCanvas();
    });
  };

  listenCursorPointer = () => {
    addEventListener("mousemove", (e) => {
      if (e.target !== this.canvas) return;
      if (
        this.nodes.some((node) => {
          const isInNode = this.isInNode(node, e);

          if (isInNode) this.canvas.style.cursor = "pointer";

          return isInNode;
        }) === false &&
        this.canvas.style.cursor !== "default"
      )
        this.canvas.style.cursor = "default";
    });
  };

  listenClickEvents = () => {
    addEventListener("mousedown", (e) => {
      this.nodes.forEach((node) => {
        if (this.isInNode(node, e)) Router.push(node.url, node.as);
      });
    });
  };

  isInNode = (node: Node, e: any) => {
    return (
      (e.layerX - node.x) * (e.layerX - node.x) +
        (e.layerY - node.y) * (e.layerY - node.y) <=
      this.nodeRadiusPowerTwo
    );
  };

  resizeCanvas = () => {
    this.canvas.width = this.canvasContainer.clientWidth;
    this.canvas.height = this.canvasContainer.clientHeight;
    this.resizeNode();
  };

  resizeNode = () => {
    this.nodeRadius = Math.min(this.canvas.width, this.canvas.height) / 20;

    this.nodeRadiusPowerTwo = this.nodeRadius * this.nodeRadius;
    return this.nodeRadius;
  };

  drawGraph = () => {
    this.nodes.forEach((node) => this.drawNode(node));
  };

  drawNode = (node: Node) => {
    node.radians += node.velocity;
    this.c.beginPath();

    node.x =
      this.canvas.width / 2 +
      Math.cos(node.radians) * this.distanceBetweenNodes * node.layer;

    node.y =
      this.canvas.height / 2 +
      Math.sin(node.radians) * this.distanceBetweenNodes * node.layer;

    this.c.strokeStyle = "white";
    this.c.lineWidth = 0.25;

    this.c.arc(node.x, node.y, this.nodeRadius, 0, 2 * Math.PI);

    this.c.stroke();
    this.c.closePath();
    this.drawText(node.x, node.y, node.text);
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
