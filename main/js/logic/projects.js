const main = document.getElementById('main');
const container = document.querySelector('.container');
const preload = document.querySelector('.preloadbg');
const projectCards = [];
let loadedImages = 0;

function loadImage(url, callback) {
  const img = new Image();
  img.onload = () => {
    loadedImages++;
    callback();
  };
  img.src = url;
}

function checkLoad(projects) {
  loadedImages++;
  if (loadedImages === projects.length * 2) {
    preload.style.opacity = preload.style.visibility = 'hidden';
    projectCards.forEach(card => card.style.display = 'block');
    if (window.innerWidth > 768) {
      main.addEventListener('mousemove', handleMouseMove);
    } else {
      projectCards.forEach(card => {
        card.addEventListener('touchstart', handleTouchStart);
        card.addEventListener('touchend', handleTouchEnd);
      });
    }
  }
}

function handleMouseMove(e) {
  requestAnimationFrame(() => {
    const { left, top } = main.getBoundingClientRect();
    const centerX = e.clientX - left;
    const centerY = e.clientY - top;
    projectCards.forEach(card => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const cardX = left + width / 2;
      const cardY = top + height / 2;
      const tiltX = (centerX - cardX) / 20;
      const tiltY = (centerY - cardY) / 20;
      card.style.transform = `rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
    });
  });
}

function handleTouchStart() {
  this.classList.add('mobcenter');
}

function handleTouchEnd() {
  const card = this;
  setTimeout(() => {
    card.classList.remove('mobcenter');
  }, 500);
}

fetch('main/txt/projects.json')
  .then(response => response.json())
  .then(({ projects, filters }) => {
    // Создание карточек проектов
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.style.backgroundImage = `url(${project.img})`;
      card.style.boxShadow = `0 0 10px ${project.outline}`;
      card.id = project.id;
      card.dataset.category = project.category;

      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      overlay.style.backgroundImage = `url(${project.overlay})`;
      card.appendChild(overlay);

      container.appendChild(card);
      projectCards.push(card);
      loadImage(project.img, () => checkLoad(projects));
      loadImage(project.overlay, () => checkLoad(projects));
    });

    // Создание Popup
    function openPopup(id) {
      const project = projects.find(p => p.id === id);
      const popupContent = document.getElementById('popup-content');
      popupContent.innerHTML = '';
      const content = project.content[currentLanguage];

      content.forEach(item => {
        const { type, value } = item;
        const element = document.createElement(type === 'h4' ? 'h4' : type === 'img' ? 'img' : 'p');
        if (type === 'code') {
          const preformatted = document.createElement('pre');
          const code = document.createElement('code');
          code.textContent = value;
          code.className = 'html';
          preformatted.className = 'popupcode';
          preformatted.appendChild(code);
          element.appendChild(preformatted);
        } else {
          element.textContent = value;
          element.className = type === 'h4' ? 'popuph4' : type === 'img' ? 'popupimg' : 'popuptitle';
        }
        popupContent.appendChild(element);
      });

      const popupMenu = document.getElementById('popup-menu');
      popupMenu.innerHTML = project.url && project.url.trim() !== '' ? `
        <a class="button" href="${project.url}" target="_blank">${project.buttonText[currentLanguage]}</a>
      ` : '';

      popupMenu.innerHTML += `
        <span class="button close-btn" id="close-btn" onclick="closePopup()">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" viewBox="0,0,256,256">
            <g fill="#ffffff" fill-rule="nonzero">
              <g transform="scale(8.53333)">
                <path d="M7,4c-0.256,0 -0.512,0.098 -0.707,0.293l-2,2c-0.391,0.391 -0.391,1.024 0,1.414l7.293,7.293l-7.293,7.293c-0.391,0.391 -0.391,1.024 0,1.414l2,2c0.391,0.391 1.024,0.391 1.414,0l7.293,-7.293l7.293,7.293c0.391,0.391 1.024,0.391 1.414,0l2,-2c0.391,-0.391 0.391,-1.024 0,-1.414l-7.293,-7.293l7.293,-7.293c0.391,-0.391 0.391,-1.024 0,-1.414l-2,-2c-0.391,-0.391 -1.024,-0.391 -1.414,0l-7.293,7.293l-7.293,-7.293c-0.391,-0.391 -1.024,-0.391 -1.414,0l-2,2c-0.391,0.391 -0.391,1.024 0,1.414l7.293,7.293l-7.293,7.293c-0.391,0.391 -0.391,1.024 0,1.414l2,2c0.391,0.391 1.024,0.391 1.414,0l7.293,-7.293l7.293,7.293c0.391,0.391 1.024,0.391 1.414,0l2,-2c0.391,-0.391 0.391,-1.024 0,-1.414l-7.293,-7.293l7.293,-7.293c0.391,-0.391 0.391,-1.024 0,-1.414l-2,-2c-0.391,-0.391 -1.024,-0.391 -1.414,0l-7.293,7.293l-7.293,-7.293c-0.256,-0.256 -0.512,-0.293 -0.707,-0.293z"/>
              </g>
            </g>
          </svg>
        </span>
      `;

      const overlay = document.getElementById('overlay-popup');
      const popup = document.getElementById('popup');

      overlay.style.opacity = overlay.style.visibility = popup.style.opacity = popup.style.visibility = popupMenu.style.opacity = popupMenu.style.visibility = '1';
      popup.scrollTop = 0;
      window.location.hash = `#${project.hash}`;
      hljs.highlightAll();
    }

    const projectCard = document.querySelectorAll('.project-card');
    projectCard.forEach(card => {
      card.addEventListener('click', () => {
        const projectId = parseInt(card.id);
        openPopup(projectId);
      });
    });

    window.addEventListener('load', () => {
      const hash = window.location.hash.substr(1);
      if (hash) {
        const project = projects.find(project => project.hash === hash);
        if (project) openPopup(project.id);
      }
    });

    // Смена языка фильтра
    function changefilters(language) {
      Object.entries(filters).forEach(([key, value]) => {
        const FilterElement = document.querySelector(`.filter .${key}`);
        const text = value[language];
        FilterElement.textContent = text;
      });
    }

    changefilters(currentLanguage);
  })
  .catch(error => console.error('Ошибка загрузки файла projects.json', error));

// Работа фильтра
const filterSections = document.querySelectorAll('.filter .filter-section');
const filterText = document.querySelector('.filter .text');
const filterArrow = document.querySelector('.filter .arrow');
const filterSubMenu = document.querySelector('.filter-wrap.submenu');

function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const categories = card.dataset.category.split(' ');
    card.style.display = category === 'All' || categories.includes(category) ? 'block' : 'none';
  });
}

filterSections.forEach(section => {
  section.addEventListener('click', () => {
    const category = section.dataset.category;
    filterProjects(category);
    filterText.textContent = section.textContent;
  });
});

const handleActiveChange = () => {
  filterArrow.style.transform = filterSubMenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
};

const observer = new MutationObserver(handleActiveChange);
observer.observe(filterSubMenu, { attributes: true });
handleActiveChange();
