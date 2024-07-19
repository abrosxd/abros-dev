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

  // Анимация для прыжка книги (ноутбука)
  gsap.to(".scene__jump", {
    scrollTrigger: {
      trigger: ".laptop",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    keyframes: {
      "0%": { y: "0" },
      "50%": { y: "40vmin" },
      "100%": { y: "0" },
    },
  });

  // Анимация для вращения книги (ноутбука)
  gsap.to(".scene__spin", {
    scrollTrigger: {
      trigger: ".laptop",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    keyframes: {
      "0%": { rotateZ: "0" },
      "100%": { rotateZ: "-360deg" },
    },
  });

  // Анимация для переворота книги (ноутбука)
  gsap.to(".scene__flip", {
    scrollTrigger: {
      trigger: ".laptop",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    keyframes: {
      "0%, 20%": { rotateX: "0deg" },
      "80%, 100%": { rotateX: "360deg" },
    },
  });

  // Анимация для увеличения сцены
  gsap.to(".scene__zoom", {
    scrollTrigger: {
      trigger: ".laptop",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    keyframes: {
      "0%": { scale: 1 },
      "100%": { scale: 9 },
    },
  });

  // Анимация для тени
  gsap.to(".scene__shadow:after", {
    scrollTrigger: {
      trigger: ".laptop",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    keyframes: {
      "0%, 5%, 95%, 100%": { opacity: 1 },
      "35%, 65%": { opacity: 0 },
    },
  });

  // Анимация открытия верхней крышки книги (ноутбука)
  gsap.to(".shell--top", {
    scrollTrigger: {
      trigger: ".laptop",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    keyframes: {
      "0%, 30%": { rotateX: "0deg" },
      "40%": { rotateX: "120deg" },
      "75%, 100%": { rotateX: "90deg" },
    },
  });

  // Анимация открытия нижней крышки книги (ноутбука)
  gsap.to(".shell--bottom", {
    scrollTrigger: {
      trigger: ".laptop",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    keyframes: {
      "0%, 45%": { rotateX: "0deg" },
      "65%": { rotateX: "50deg" },
      "100%": { rotateX: "0deg" },
    },
  });
});
