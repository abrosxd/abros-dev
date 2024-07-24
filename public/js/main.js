// Создание подменю для меню
function initializeSubMenu(triggerId, submenuId) {
  var trigger = document.getElementById(triggerId);
  var submenu = document.getElementById(submenuId);
  var touchStartX = 0;
  var touchEndX = 0;

  function toggleActive() {
    submenu.classList.toggle("active");
  }

  trigger.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleActive();
  });

  document.addEventListener("click", function (event) {
    var isOutsideClick = !submenu.contains(event.target);
    var isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints;

    if (
      (isOutsideClick || (isTouchDevice && event.type === "touchstart")) &&
      submenu.classList.contains("active")
    ) {
      submenu.classList.remove("active");
    }
  });

  if ("ontouchstart" in window || navigator.msMaxTouchPoints) {
    document.addEventListener("touchmove", function (event) {
      touchEndX = event.touches[0].clientX;
      var swipeDistance = touchEndX - touchStartX;

      if (Math.abs(swipeDistance) > 10) {
        submenu.classList.remove("active");
      }
    });
  }
}

// Инициализация для каждой пары триггер-подменю
initializeSubMenu("links-trigger", "links-submenu");
initializeSubMenu("lang-trigger", "lang-submenu");

document.addEventListener("DOMContentLoaded", function () {
  // Смена языка меню
  function changeMenuText(language) {
    fetch("/public/locales/menu.yaml")
      .then((response) => response.text())
      .then((yamlData) => {
        const data = jsyaml.load(yamlData);
        document.querySelector(".thome").textContent = data.menu.home[language];
        document.querySelector(".tportfolio").textContent =
          data.menu.portfolio[language];
        // document.querySelector('.tlibrary').textContent = data.menu.library[language];
        document.querySelector(".tabout").textContent =
          data.menu.about[language];
      })
      .catch((error) =>
        console.error("Ошибка загрузки файла menu.yaml", error)
      );
  }
  changeMenuText(currentLanguage);

  // Смена цвета логотипа
  const logo = document.querySelector(".logo");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function setRandomColor() {
    const newColor = getRandomColor();
    logo.style.backgroundColor = `${newColor}80`;
  }
  function updateColor() {
    logo.classList.add("color-transition");
    setRandomColor();
    setTimeout(() => {
      logo.classList.remove("color-transition");
    }, 1000);
  }
  setInterval(updateColor, 5000);
});

// Glyph анимация
document.addEventListener("DOMContentLoaded", () => {
  const GLYPHS =
    "ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Ищем все элементы с классом glyph
  const glyphElements = document.querySelectorAll(".glyph");

  // Функция для разбивки текста на span'ы с data-letter атрибутом
  function splitTextToSpans(element) {
    const text = element.textContent;
    const fragment = document.createDocumentFragment();

    for (const letter of text) {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter; // Заменяем пробел на неразрывный пробел
      span.setAttribute("data-letter", letter === " " ? " " : letter);
      fragment.appendChild(span);
    }

    // Очищаем текущий текст элемента и добавляем новый контент
    element.innerHTML = "";
    element.appendChild(fragment);
  }

  // Функция для анимации случайных символов
  function animateRandomGlyphs(spans) {
    spans.forEach((span, index) => {
      setTimeout(() => {
        span._interval = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * GLYPHS.length);
          span.textContent = GLYPHS[randomIndex];

          // Замена следующих двух букв на '_'
          if (index + 1 < spans.length) {
            spans[index + 1].textContent = "_";
          }
          if (index + 2 < spans.length) {
            spans[index + 2].textContent = "_";
          }
        }, 100);
      }, index * 100); // Задержка для начала анимации каждого символа
    });

    setTimeout(() => {
      spans.forEach((span, index) => {
        setTimeout(() => {
          clearInterval(span._interval);
          span.textContent =
            span.getAttribute("data-letter") === " "
              ? "\u00A0"
              : span.getAttribute("data-letter");
          span._interval = null; // Помечаем, что анимация закончилась
        }, index * 100); // Задержка для остановки анимации каждого символа
      });
    }, 200 + spans.length); // Даем время для всех символов анимироваться
  }

  glyphElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      if (!element.hasAttribute("data-split")) {
        splitTextToSpans(element);
        element.setAttribute("data-split", "true");
      }

      const spans = element.querySelectorAll("span");
      const isAnimating = Array.from(spans).some((span) => span._interval);

      if (!isAnimating) {
        animateRandomGlyphs(spans);
      }
    });
  });
});
