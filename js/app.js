function animateSgv(id, delay, delayIncrement) {
  const logo = document.getElementById(id);
  const logoPaths = document.querySelectorAll(`#${id} path`);

  for (let i = 0; i < logoPaths.length; i++) {
    logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
    logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
    logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
    delay += delayIncrement;
  }
  logo.style.animation = `fill 0.5s ease forwards ${delay + 1.25}s`;
}

const getDelayByLength = (length) => {
  const totalDuration = 3000;

  return totalDuration / length / 100;
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const { length: logoOneLength } = document.getElementById(
      "logo-1"
    ).textContent;
    const { length: logoTwoLength } = document.getElementById(
      "logo-2"
    ).textContent;
    animateSgv("logo-1", 0, getDelayByLength(logoOneLength));
    animateSgv("logo-2", 0, getDelayByLength(logoTwoLength));
  },
  false
);
