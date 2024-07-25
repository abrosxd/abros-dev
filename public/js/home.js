document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 0.5, // Скорость скролла (0.5 - замедление скролла)
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  });

  // Подключение ScrollTrigger к locomotive-scroll
  gsap.registerPlugin(ScrollTrigger);

  scroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, 0, 0)
        : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  ScrollTrigger.refresh();

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

  // Общие настройки для всех анимаций
  function isMobile() {
    return window.innerWidth <= 860;
  }

  const scrollSettings = {
    trigger: ".scroll-container",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    scroller: "[data-scroll-container]",
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
      "10%": { z: "30vmin" },
      "30%": { z: "30vmin" },
      "50%": { z: "0" },
      "100%": { z: "-15vmin" },
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
    keyframes: isMobile()
      ? {
          "80%": { scale: 1 },
          "100%": { scale: 12 },
        }
      : {
          "80%": { scale: 1 },
          "100%": { scale: 9 },
        },
  });

  // Анимация для выключения экрана
  gsap.to(".light-effect", {
    scrollTrigger: scrollSettings,
    keyframes: isMobile()
      ? {
          "95%": {
            height: "100%",
            width: "100%",
            visibility: "hidden",
          },
          "97%": {
            height: "1px",
            width: "100%",
            visibility: "visible",
          },
          "99.99%": {
            height: "1px",
          },
          "100%": {
            height: 0,
            width: 0,
          },
        }
      : {
          "90%": {
            height: "100%",
            width: "100%",
            visibility: "hidden",
          },
          "95%": {
            height: "1px",
            width: "100%",
            visibility: "visible",
          },
          "99.99%": {
            height: "1px",
          },
          "100%": {
            height: 0,
            width: 0,
          },
        },
  });

  // Анимация перехода
  gsap.to(".laptop .scene__visible", {
    scrollTrigger: scrollSettings,
    keyframes: isMobile()
      ? {
          "95%": {
            visibility: "visible",
          },
          "100%": {
            visibility: "hidden",
          },
        }
      : {
          "90%": {
            visibility: "visible",
          },
          "100%": {
            visibility: "hidden",
          },
        },
  });
});
