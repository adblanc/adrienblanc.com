class TypeWriter {
  constructor(txtElement, words, delay, waitTime = 3000, initialSentence = "") {
    this.txtElement = txtElement;
    this.initialSentence = initialSentence;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.waitTime = parseInt(waitTime, 10);
    this.isDeleting = false;
    setTimeout(() => this.typeInitialSentence(), delay);
  }

  typeInitialSentence = () => {
    const text = this.initialSentence;
    this.txt = text.substring(0, this.txt.length + 1);

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    if (this.txt === text) {
      this.txt = "";
      setTimeout(() => this.type(), 300);
    } else setTimeout(() => this.typeInitialSentence(), 300);
  };

  type = () => {
    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.initialSentence}${this.txt}</span>`;

    let typeSpeed = 250;

    if (this.isDeleting) typeSpeed /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.waitTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;

      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  };
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");

  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const initialSentence = txtElement.getAttribute("data-text-to-not-remove");

  const wait = txtElement.getAttribute("data-wait");

  const delay = 4000;

  new TypeWriter(txtElement, shuffle(words), delay, wait, initialSentence);
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
