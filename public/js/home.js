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

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".scene__zoom", {
    scale: 9,
    scrollTrigger: {
      trigger: ".scene__zoom",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".scene__spin", {
    rotateZ: -360,
    scrollTrigger: {
      trigger: ".scene__spin",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".scene__flip", {
    rotateX: 360,
    scrollTrigger: {
      trigger: ".scene__flip",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".scene__jump", {
    y: 40 * 16, // 40vmin converted to px assuming 1vmin = 1% of viewport height
    scrollTrigger: {
      trigger: ".scene__jump",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".shell--top", {
    rotateX: 90,
    scrollTrigger: {
      trigger: ".shell--top",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});
