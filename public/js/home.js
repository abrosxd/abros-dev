document.addEventListener("DOMContentLoaded", function () {
  function changeHome(language) {
    fetch("/public/locales/home.yaml")
      .then((response) => response.text())
      .then((yamlData) => {
        const data = jsyaml.load(yamlData);
        const defaultElement = document.querySelector(".default-text");
        const defaultText = data.defaultText[language];
        defaultElement.textContent = defaultText;
        const typingTextElement = document.querySelector(".typing-text");
        const dataText = data.typingText[language];
        typingText(typingTextElement, dataText);
      })
      .catch((error) =>
        console.error("Ошибка загрузки файла home.yaml", error)
      );
  }

  // Typing text
  function typingText(element, words) {
    setTyper(element, words);

    function setTyper(element, words) {
      const LETTER_TYPE_DELAY = 75;
      const WORD_STAY_DELAY = 2000;

      const DIRECTION_FORWARDS = 0;
      const DIRECTION_BACKWARDS = 1;

      let direction = DIRECTION_FORWARDS;
      let wordIndex = 0;
      let letterIndex = 0;

      let wordTypeInterval;

      startTyping();

      function startTyping() {
        wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
      }

      function typeLetter() {
        const word = words[wordIndex];

        if (direction === DIRECTION_FORWARDS) {
          letterIndex++;

          if (letterIndex === word.length) {
            direction = DIRECTION_BACKWARDS;
            clearInterval(wordTypeInterval);
            setTimeout(startTyping, WORD_STAY_DELAY);
          }
        } else if (direction === DIRECTION_BACKWARDS) {
          letterIndex--;

          if (letterIndex === 0) {
            nextWord();
          }
        }

        const textToType = word.substring(0, letterIndex);
        element.textContent = textToType;
      }

      function nextWord() {
        letterIndex = 0;
        direction = DIRECTION_FORWARDS;
        wordIndex++;

        if (wordIndex === words.length) {
          wordIndex = 0;
        }
      }
    }
  }

  changeHome(currentLanguage);
});

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

const handleScroll = debounce(function () {
  const scrollPosition =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);

  const jumpElement = document.querySelector(".scene__jump");
  const spinElement = document.querySelector(".scene__spin");
  const flipElement = document.querySelector(".scene__flip");
  const zoomElement = document.querySelector(".scene__zoom");

  if (jumpElement) {
    jumpElement.style.animationDelay = `${scrollPosition * 5}s`;
  }
  if (spinElement) {
    spinElement.style.animationDelay = `${scrollPosition * 5}s`;
  }
  if (flipElement) {
    flipElement.style.animationDelay = `${scrollPosition * 5}s`;
  }
  if (zoomElement) {
    zoomElement.style.animationDelay = `${scrollPosition * 5}s`;
  }
}, 50);

document.addEventListener("scroll", handleScroll);
