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

function checkLoad() {
  loadedImages++;
  if (loadedImages === projectCards.length * 2) {
    preload.style.opacity = preload.style.visibility = 'hidden';
    projectCards.forEach(card => card.style.display = 'block');
    if (window.innerWidth > 768) main.addEventListener('mousemove', handleMouseMove);
    else projectCards.forEach(card => {
      card.addEventListener('touchstart', handleTouchStart);
      card.addEventListener('touchend', handleTouchEnd);
    });
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
  setTimeout(() => card.classList.remove('mobcenter'), 500);
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
  loadImage(project.img, checkLoad);
  loadImage(project.overlay, checkLoad);

  card.addEventListener('click', () => openPopup(project.id));
}

function openPopup(id) {
  const project = data.projects.find(p => p.id === id);
  const popupContent = document.getElementById('popup-content');
  popupContent.innerHTML = '';
  const content = project.content[currentLanguage];

  content.forEach(item => {
    const { type, value } = item;
    const element = document.createElement(type === 'h4' ? 'h4' : type === 'img' ? 'img' : 'p');
    element.textContent = type === 'text' ? value : '';
    if (type === 'code') {
      const preformatted = document.createElement('pre');
      const code = document.createElement('code');
      code.textContent = value;
      code.className = 'html';
      preformatted.className = 'popupcode';
      preformatted.appendChild(code);
      element.appendChild(preformatted);
    }
    element.className = type === 'h4' ? 'popuph4' : type === 'img' ? 'popupimg' : 'popuptitle';
    popupContent.appendChild(element);
  });

  const popupMenu = document.getElementById('popup-menu');
  popupMenu.innerHTML = `
    ${project.url && project.url.trim() !== '' ? `<a class="button" href="${project.url}" target="_blank">${project.buttonText[currentLanguage]}</a>` : ''}
    <span class="button close-btn" id="close-btn" onclick="closePopup()">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" viewBox="0,0,256,256">
        <g fill="#ffffff" fill-rule="nonzero">
          <g transform="scale(8.53333)">
            <path d="M7,4c-0.256,0 -0.512,0.098 -0.707,0.293l-2,2c-0.391,0.391 -0.391,1.024 0,1.414l7.293,7.293l-7.293,7.293c-0.391,0.391 -0.391,1.024 0,1.414l2,2c0.391,0.391 1.024,0.391 1.414,0l7.293,-7.293l7.293,7.293c0.391,0.391 1.024,0.391 1.414,0l2,-2c0.391,-0.391 0.391,-1.024 0,-1.414l-7.293,-7.293l7.293,-7.293c0.391,-0.391 0.391,-1.024 0,-1.414l-2,-2c-0.391,-0.391 -1.024,-0.391 -1.414,0l-7.293,7.293l-7.293,-7.293c-0.391,-0.391 -1.024,-0.391 -1.414,0l-2,2c-0.391,0.391 -0.391,1.024 0,1.414l7.293,7.293l-7.293,7.293c-0.391,0.391 -0.391,1.024 0,1.414l2,2c0.391,0.391 1.024,0.391 1.414,0l7.293,-7.293l7.293,7.293c0.391,0.391 1.024,0.391 1.414,0l2,-2c0.391,-0.391 0.391,-1.024 0,-1.414l-7.293,-7.293l7.293,-7.293c0.391,-0.391 0.391,-1.024 0,-1.414l-2,-2c-0.391,-0.391 -1.024,-0.391 -1.414,0l-7.293,7.293l-7.293,-7.293c-0.391,-0.391 -1.024,-0.391 -1.414,0z"/>
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

fetch('main/txt/projects.json')
  .then(response => response.json())
  .then(({ projects, filters }) => {
    document.querySelectorAll('.filter .text, .tFilterAll, .tFilterMyProject, .tFilterLayout, .tFilterLibrary, .tFilterDesign, .tFilterTilda').forEach(element => {
      const key = element.className.split(' ')[1];
      element.textContent = filters[key][currentLanguage];
    });

    projects.forEach(createCard);

    window.addEventListener('load', () => {
      const hash = window.location.hash.substr(1);
      if (hash) {
        const project = projects.find(p => p.hash === hash);
        if (project) openPopup(project.id);
      }
    });
  })
  .catch(error => console.error('Ошибка загрузки файла projects.json', error));

// Смена языка фильтра
function changefilters(language) {
  Object.entries(data.filters).forEach(([key, value]) => document.querySelector(`.filter .${key}`).textContent = value[language]);
}
changefilters(currentLanguage);

// Работа фильтра
document.querySelectorAll('.filter .filter-section').forEach(section => section.addEventListener('click', () => {
  const category = section.dataset.category;
  document.querySelectorAll('.project-card').forEach(card => card.style.display = card.dataset.category.split(' ').includes(category) || category === 'All' ? 'block' : 'none');
  document.querySelector('.filter .text').textContent = section.textContent;
}));

const observer = new MutationObserver(() => document.querySelector('.filter-wrap.submenu .arrow').style.transform = `rotate(${document.querySelector('.filter-wrap.submenu').classList.contains('active') ? 180 : 0}deg)`);
observer.observe(document.querySelector('.filter-wrap.submenu'), { attributes: true });
document.querySelector('.filter-wrap.submenu .arrow').style.transform = `rotate(${document.querySelector('.filter-wrap.submenu').classList.contains('active') ? 180 : 0}deg)`;
