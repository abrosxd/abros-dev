// Создание подменю
function initializeSubMenu(triggerId, submenuId) {
  var trigger = document.getElementById(triggerId);
  var submenu = document.getElementById(submenuId);
  var touchStartX = 0;
  var touchEndX = 0;

  function toggleActive() {
      submenu.classList.toggle('active');
  }

  trigger.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleActive();
  });

  document.addEventListener('click', function (event) {
      var isOutsideClick = !submenu.contains(event.target);
      var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

      if ((isOutsideClick || (isTouchDevice && event.type === 'touchstart')) && submenu.classList.contains('active')) {
          submenu.classList.remove('active');
      }
  });

  if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
      document.addEventListener('touchmove', function (event) {
        touchEndX = event.touches[0].clientX;
        var swipeDistance = touchEndX - touchStartX;
  
        if (Math.abs(swipeDistance) > 10) {
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
      fetch('main/yaml/menu.yaml')
          .then(response => response.text())
          .then(yamlData => {
            const data = jsyaml.load(yamlData);
            document.querySelector('.tportfolio').textContent = data.menu.portfolio[language];
            // document.querySelector('.tlibrary').textContent = data.menu.library[language];
            document.querySelector('.tabout').textContent = data.menu.about[language];
          })
          .catch(error => console.error('Ошибка загрузки файла menu.yaml', error));
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