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

  // Анимация для блока с ноутбуком
  const laptopTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".block-laptop",
      start: "top 50%",
      end: "bottom 50%",
      scrub: true,
      pin: true,
    },
  });

  // Прыжок ноутбука
  laptopTimeline.to(
    ".scene__jump",
    {
      y: 0,
      ease: "power2.inOut",
    },
    0
  );

  // Вращение ноутбука
  laptopTimeline.to(
    ".scene__spin",
    {
      rotationY: 360,
      duration: 2,
      ease: "power2.inOut",
    },
    0
  );

  // Переворот ноутбука
  laptopTimeline.to(
    ".scene__flip",
    {
      rotationX: 360,
      duration: 2,
      ease: "power2.inOut",
    },
    0
  );

  // Масштабирование сцены
  laptopTimeline.to(
    ".scene__zoom",
    {
      scale: 9,
      ease: "power2.inOut",
    },
    0
  );

  // Открытие ноутбука
  laptopTimeline.to(
    ".scene",
    {
      transform:
        "rotateX(0) rotateY(0) rotateX(90deg) translate3d(0, 0, -12vmin)",
      ease: "power2.inOut",
    },
    0
  );

  // Анимация для верхней части ноутбука
  laptopTimeline.to(
    ".shell--top",
    {
      rotationX: 120,
      duration: 2,
      ease: "power2.inOut",
    },
    0.4
  );

  // Анимация для нижней части ноутбука
  laptopTimeline.to(
    ".shell--bottom",
    {
      rotationX: 50,
      duration: 2,
      ease: "power2.inOut",
    },
    0.4
  );

  // Дополнительные анимации для элементов ноутбука
  laptopTimeline.from(
    ".cuboid",
    {
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    },
    0.8
  );

  // Анимация теней ноутбука
  laptopTimeline.to(
    ".scene__shadow:after",
    {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    },
    0.8
  );
});
