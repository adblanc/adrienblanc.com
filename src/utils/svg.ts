export function animateSgv(id: string, delay: number, delayIncrement: number) {
  const logo = document.getElementById(id) as any;
  const logoPaths = document.querySelectorAll(`#${id} path`) as any;

  for (let i = 0; i < logoPaths.length; i++) {
    logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
    logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
    logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
    delay += delayIncrement;
  }
  logo.style.animation = `fill 0.5s ease forwards ${delay + 1.1}s`;
}
