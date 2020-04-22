const TYPING_SPEED_MIN = 150;
const TYPING_SPEED_MAX = 250;

function randomTypingSpeed() {
  return (
    Math.floor(Math.random() * (TYPING_SPEED_MAX - TYPING_SPEED_MIN)) +
    TYPING_SPEED_MIN
  );
}

interface Props {
  txtElement: any;
  words: string[];
  delay: number;
  waitTimeMs: number;
  initialSentence: string;
}

export default class TypeWriter {
  private txtElement: any;
  private words: string[];
  private waitTime: number;
  private initialSentence: string;
  private txt: string;
  private wordIndex: number;
  private isDeleting: boolean;
  constructor({
    txtElement,
    initialSentence,
    words,
    waitTimeMs,
    delay,
  }: Props) {
    this.txtElement = txtElement;
    this.initialSentence = initialSentence;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.waitTime = waitTimeMs;
    this.isDeleting = false;
    setTimeout(() => this.typeInitialSentence(), delay);
  }

  typeInitialSentence = () => {
    const text = this.initialSentence;
    this.txt = text.substring(0, this.txt.length + 1);

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    if (this.txt === text) {
      this.txt = "";
      setTimeout(() => this.type(), randomTypingSpeed());
    } else setTimeout(() => this.typeInitialSentence(), randomTypingSpeed());
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

    let typeSpeed = randomTypingSpeed();

    if (this.isDeleting) typeSpeed /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.waitTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;

      typeSpeed = randomTypingSpeed();
    }

    setTimeout(() => this.type(), typeSpeed);
  };
}

export const initWriter = () => {
  const txtElement = document.querySelector(".txt-type") as Element;

  const words = JSON.parse(txtElement.getAttribute("data-words") as string);
  const initialSentence = txtElement.getAttribute(
    "data-text-to-not-remove"
  ) as string;

  const wait = parseInt(txtElement.getAttribute("data-wait") || "", 10);

  const delay = 4500;

  new TypeWriter({
    delay,
    words,
    initialSentence,
    waitTimeMs: wait,
    txtElement,
  });
};
