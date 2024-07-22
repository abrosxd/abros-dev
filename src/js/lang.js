// Функция для проверки языка браузера
const checkLanguage = () => {
  const browserLanguage = navigator.language.substring(0, 2);
  const supportedLanguages = ["en", "ru", "pl"];
  return supportedLanguages.includes(browserLanguage) ? browserLanguage : "en";
};

// Функция для установки языка в localStorage
const setLanguage = (language) => {
  localStorage.setItem("Language", language);
};

// Функция для получения языка из localStorage
const getLanguage = () => {
  return localStorage.getItem("Language");
};

// Функция для перезагрузки страницы
const reloadPage = () => {
  window.location.reload();
};

var savedLanguage = getLanguage();

if (!savedLanguage) {
  savedLanguage = checkLanguage();
  setLanguage(savedLanguage);
}

var currentLanguage = savedLanguage;

document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.setAttribute("lang", currentLanguage);
  var buttons = document.querySelectorAll(".lang-sub .button");

  buttons.forEach(function (item) {
    if (item.getAttribute("lang") === currentLanguage) {
      item.classList.add("active");
    }
    item.addEventListener("click", function () {
      var newLanguage = this.getAttribute("lang");
      setLanguage(newLanguage);
      buttons.forEach(function (button) {
        button.classList.remove("active");
      });
      this.classList.add("active");
      reloadPage();
    });
  });

  setTimeout(function () {
    function getPreviousLanguage() {
      return localStorage.getItem("LanguagePrevious");
    }
    function setPreviousLanguage(language) {
      localStorage.setItem("LanguagePrevious", language);
    }
    var previousLanguage = getPreviousLanguage();
    if (previousLanguage !== currentLanguage) {
      switch (currentLanguage) {
        case "en":
          abrosnoti.create(
            "dark",
            "lang",
            "Language has been changed. Enjoy browsing!",
            3
          );
          break;
        case "ru":
          abrosnoti.create(
            "dark",
            "lang",
            "Язык был изменен. Приятного просмотра!",
            3
          );
          break;
        case "pl":
          abrosnoti.create(
            "dark",
            "lang",
            "Język został zmieniony. Miłego oglądania!",
            3
          );
          break;
        default:
          break;
      }
      setPreviousLanguage(currentLanguage);
    }
  }, 1500);
});
