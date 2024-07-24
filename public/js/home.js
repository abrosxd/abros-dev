let touchStartY = 0;
let touchEndY = 0;

window.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();
    window.scrollBy({
      top: event.deltaY * 0.3, // Умножаем на коэффициент меньше 1 для замедления
      left: 0,
      behavior: "smooth",
    });
  },
  { passive: false }
);

window.addEventListener(
  "touchstart",
  function (event) {
    touchStartY = event.touches[0].clientY;
  },
  { passive: false }
);

window.addEventListener(
  "touchmove",
  function (event) {
    touchEndY = event.touches[0].clientY;
    let deltaY = touchStartY - touchEndY;

    window.scrollBy({
      top: deltaY * 0.3, // Умножаем на коэффициент меньше 1 для замедления
      left: 0,
      behavior: "smooth",
    });

    touchStartY = touchEndY; // Обновляем начальное положение для следующего события
  },
  { passive: false }
);

window.addEventListener(
  "touchend",
  function (event) {
    touchStartY = 0;
    touchEndY = 0;
  },
  { passive: false }
);

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

  // Общие настройки для всех анимаций
  const scrollSettings = {
    trigger: ".laptop",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  };

  // Анимация для иконок
  gsap.to([".scroll-icon", ".swipe-icon"], {
    scrollTrigger: scrollSettings,
    keyframes: {
      "0%": { opacity: "0.5" },
      "5%": { opacity: "0" },
    },
  });

  // Анимация для прыжка ноутбука
  gsap.to(".scene__jump", {
    scrollTrigger: scrollSettings,
    keyframes: {
      "0%": { z: "0" },
      "10%": { z: "40vmin" },
      "100%": { z: "0" },
    },
  });

  // Анимация для вращения ноутбука
  gsap.to(".scene__spin", {
    scrollTrigger: scrollSettings,
    keyframes: {
      "0%": { rotateZ: "0" },
      "10%": { rotateZ: "-90deg" },
      "100%": { rotateZ: "-392deg" },
    },
  });

  // Анимация для переворота ноутбука
  gsap.to(".scene__flip", {
    scrollTrigger: scrollSettings,
    keyframes: {
      "0%, 10%": { rotateX: "0deg" },
      "80%, 100%": { rotateX: "360deg" },
    },
  });

  // Анимация открытия верхней крышки ноутбука
  gsap.to(".shell--top", {
    scrollTrigger: scrollSettings,
    keyframes: {
      "0%, 40%": { rotateX: "0deg" },
      "50%": { rotateX: "120deg" },
      "75%, 100%": { rotateX: "90deg" },
    },
  });

  // Анимация открытия нижней крышки ноутбука
  gsap.to(".shell--bottom", {
    scrollTrigger: scrollSettings,
    keyframes: {
      "0%, 45%": { rotateX: "0deg" },
      "65%": { rotateX: "50deg" },
      "100%": { rotateX: "0deg" },
    },
  });

  // Анимация для увеличения сцены
  gsap.to(".scene__zoom", {
    scrollTrigger: scrollSettings,
    keyframes: {
      "80%": { scale: 1 },
      "100%": { scale: 9 },
    },
  });
});
