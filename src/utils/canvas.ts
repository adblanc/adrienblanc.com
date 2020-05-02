export function randomIntFromRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomColor(colors: string[]) {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function distance(x1: number, y1: number, x2: number, y2: number) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
