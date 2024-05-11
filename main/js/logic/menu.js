// Создание подменю
function initializeSubMenu(triggerId, submenuId) {
  var trigger = document.getElementById(triggerId);
  var submenu = document.getElementById(submenuId);

  // Функция для добавления класса active или его удаления
  function toggleActive() {
      submenu.classList.toggle('active');
  }

  // Обработчик события клика по триггеру
  trigger.addEventListener('click', function (event) {
      event.stopPropagation(); // Предотвращаем всплытие события, чтобы оно не достигло body
      toggleActive();
  });

  // Обработчик события клика за пределами подменю и на сенсорных экранах также при скролле
  document.addEventListener('click', function (event) {
      var isOutsideClick = !submenu.contains(event.target);
      var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints; // Проверяем, является ли устройство сенсорным

      if ((isOutsideClick || (isTouchDevice && event.type === 'touchstart')) && submenu.classList.contains('active')) {
          submenu.classList.remove('active');
      }
  });

  // Обработчик события скролла на сенсорных экранах
  if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
      document.addEventListener('scroll', function (event) {
          var isOutsideScroll = !submenu.contains(event.target);
          if (isOutsideScroll && submenu.classList.contains('active')) {
              submenu.classList.remove('active');
          }
      });
  }
}

// Инициализация для каждой пары триггер-подменю
initializeSubMenu('links-trigger', 'links-submenu');
initializeSubMenu('lang-trigger', 'lang-submenu');

// Проверка страницы и инициализация для фильтра, если находимся на нужной странице
function isFilterPage() {
  return window.location.pathname === "/";
}
if (isFilterPage()) {
  initializeSubMenu('filter-trigger', 'filter-submenu');
}


// Контроль музыки
const audio = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('toggleMusic');
let userInteracted = false;

function fadeIn(element, duration) {
  element.volume = 0;
  element.play().then(() => {
    if (userInteracted) {
      element.volume = 1;
    }
  });
  
  let currentTime = 0;
  const interval = 50;
  const targetVolume = 1;
  const volumeChange = targetVolume / (duration / interval);
    
  const fadeInterval = setInterval(() => {
    currentTime += interval;
    element.volume = Math.min(targetVolume, element.volume + volumeChange);
    if (currentTime >= duration) {
      clearInterval(fadeInterval);
      element.volume = Math.min(targetVolume, 1);
    }
  }, interval);
}

function fadeOut(element, duration) {
  let currentTime = 0;
  const interval = 50;
  const currentVolume = element.volume;
  const volumeChange = currentVolume / (duration / interval);
  
  const fadeInterval = setInterval(() => {
    currentTime += interval;
    element.volume = Math.max(0, element.volume - volumeChange);
    if (currentTime >= duration) {
      clearInterval(fadeInterval);
      element.pause();
      element.volume = Math.max(0, element.volume);
    }
  }, interval);
}

toggleButton.addEventListener('click', function () {
  if (audio.paused) {
    fadeIn(audio, 1000);
  } else {
    fadeOut(audio, 1000);
  }
  toggleButton.classList.toggle('playing');
});

document.addEventListener('DOMContentLoaded', function() {

  // Смена языка меню
  function changeMenuText(language) {
      fetch('main/txt/menu.json')
          .then(response => response.json())
          .then(data => {
              const menu = data.menu;
              const portfolioElement = document.querySelector('.tportfolio');
              const portfolioText = menu.portfolio[language];
              portfolioElement.textContent = portfolioText;

              const aboutElement = document.querySelector('.tabout');
              const aboutText = menu.about[language];
              aboutElement.textContent = aboutText;
          })
          .catch(error => console.error('Ошибка загрузки файла menu.json', error));
  }
  changeMenuText(currentLanguage);

  // Смена цвета логотипа
  const logo = document.querySelector('.logo');

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
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
    logo.classList.add('color-transition');
    setRandomColor();
    setTimeout(() => {
      logo.classList.remove('color-transition');
    }, 1000);
  }
  setInterval(updateColor, 5000);

});