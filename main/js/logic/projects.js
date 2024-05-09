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
    preload.style.opacity = '0';
    preload.style.visibility = 'hidden';
    projectCards.forEach(card => (card.style.display = 'block'));
    const handleMove = e => {
      requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const { left, top } = main.getBoundingClientRect();
        const centerX = clientX - left;
        const centerY = clientY - top;
        projectCards.forEach(card => {
          const { left, top, width, height } = card.getBoundingClientRect();
          const cardX = left + width / 2;
          const cardY = top + height / 2;
          const deltaX = centerX - cardX;
          const deltaY = centerY - cardY;
          const tiltX = deltaX / 20;
          const tiltY = deltaY / 20;
          card.style.transform = `rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
        });
      });
    };
    if (window.innerWidth > 768) {
      main.addEventListener('mousemove', handleMove);
    } else {
      projectCards.forEach(card => {
        card.addEventListener('touchstart', () => card.classList.add('mobcenter'));
        card.addEventListener('touchend', () => setTimeout(() => card.classList.remove('mobcenter'), 500));
      });
    }
  }
}

function createCard(project) {
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
  loadImage(project.img, () => checkLoad(data.projects));
  loadImage(project.overlay, () => checkLoad(data.projects));
  card.addEventListener('click', () => openPopup(project.id));
}

function createPopupContent(content, popupContent) {
  content.forEach(item => {
    const { type, value } = item;
    const createElement = tag => {
      const element = document.createElement(tag);
      element.textContent = value;
      element.className = type === 'code' ? 'html popupcode' : `popup${type}`;
      return element;
    };
    popupContent.appendChild(createElement(type === 'code' ? 'pre' : 'p'));
  });
}

function openPopup(id) {
  const project = data.projects.find(project => project.id === id);
  const { content, url, buttonText, hash } = project;
  const popupContent = document.getElementById('popup-content');
  popupContent.innerHTML = '';
  createPopupContent(content[currentLanguage], popupContent);
  const popupMenu = document.getElementById('popup-menu');
  popupMenu.innerHTML = url && url.trim() !== '' ? `
    <a class="button" href="${url}" target="_blank">${buttonText[currentLanguage]}</a>
    <span class="button close-btn" id="close-btn" onclick="closePopup()">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" viewBox="0,0,256,256">
        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
          <g transform="scale(8.53333,8.53333)">
            <path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path>
          </g>
        </g>
       </svg>
    </span>
  ` : `
    <span class="button close-btn" id="close-btn" onclick="closePopup()">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" viewBox="0,0,256,256">
        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
          <g transform="scale(8.53333,8.53333)">
            <path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path>
          </g>
        </g>
       </svg>
    </span>
  `;
  const overlay = document.getElementById('overlay-popup');
  const popup = document.getElementById('popup');

  overlay.style.opacity = 1;
  overlay.style.visibility = 'visible';
  popup.style.opacity = 1;
  popup.style.visibility = 'visible';
  popupMenu.style.opacity = 1;
  popupMenu.style.visibility = 'visible';

  popup.scrollTop = 0;

  window.location.hash = `#${hash}`;
  hljs.highlightAll();
}

fetch('main/txt/projects.json')
  .then(response => response.json())
  .then(({ projects, filters }) => {
    // Создание карточек
    projects.forEach(createCard);

    // Создание Popup
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
        if (project) {
          openPopup(project.id);
        }
      }
    });

    // Смена языка фильтра
    const changeFilters = language => {
      Object.entries(filters).forEach(([filterKey, filterText]) => {
        const filterElement = document.querySelector(`.tFilter${filterKey}`);
        filterElement.textContent = filterText[language];
      });
    };

    changeFilters(currentLanguage);
  })
  .catch(error => console.error('Ошибка загрузки файла projects.json', error));

// Работа фильтра
const filterSections = document.querySelectorAll('.filter .filter-section');
const filterText = document.querySelector('.filter .text');
const filterArrow = document.querySelector('.filter .arrow');

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
