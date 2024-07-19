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

  // Анимация для вращения книги (ноутбука)
  gsap.to(".scene__spin", {
    scrollTrigger: {
      trigger: ".scene__spin",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    rotateZ: 360,
    duration: 2,
  });

  // Анимация для прыжка книги (ноутбука)
  gsap.to(".scene__jump", {
    scrollTrigger: {
      trigger: ".scene__jump",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    y: 100,
    duration: 2,
  });

  // Анимация для переворота книги (ноутбука)
  gsap.to(".scene__flip", {
    scrollTrigger: {
      trigger: ".scene__flip",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    rotateX: 360,
    duration: 2,
  });

  // Анимация для увеличения сцены
  gsap.to(".scene__zoom", {
    scrollTrigger: {
      trigger: ".scene__zoom",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    scale: 9,
    duration: 2,
  });

  // Анимация для тени
  gsap.to(".scene__shadow:after", {
    scrollTrigger: {
      trigger: ".scene__shadow",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    opacity: 0,
    duration: 1,
    yoyo: true,
    repeat: -1,
  });

  // Анимация открытия верхней крышки книги (ноутбука)
  gsap.to(".shell--top", {
    scrollTrigger: {
      trigger: ".shell--top",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    rotateX: 90,
    duration: 2,
  });

  // Анимация открытия нижней крышки книги (ноутбука)
  gsap.to(".shell--bottom", {
    scrollTrigger: {
      trigger: ".shell--bottom",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    rotateX: 50,
    duration: 2,
  });
});
