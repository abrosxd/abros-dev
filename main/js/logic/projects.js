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
    const eventType = window.innerWidth > 768 ? 'mousemove' : 'touchstart';
    const touchEndEvent = 'touchend';
    if (window.innerWidth <= 768) projectCards.forEach(card => card.classList.add('mobcenter'));
    main.addEventListener(eventType, handleMouseMove);
    projectCards.forEach(card => {
      card.addEventListener(touchEndEvent, () => setTimeout(() => card.classList.remove('mobcenter'), 500));
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

function openPopup(id) {
  const project = data.projects.find(p => p.id === id);
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
  popupMenu.innerHTML = `
    ${project.url && project.url.trim() !== '' ? `<a class="button" href="${project.url}" target="_blank">${project.buttonText[currentLanguage]}</a>` : ''}
    <span class="button close-btn" id="close-btn" onclick="closePopup()">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" viewBox="0,0,256,256">
        <g fill="#ffffff" fill-rule="nonzero">
          <g transform="scale(8.53333)">
            <path d="M7,4c-0.256,0 -0.512,0.098 -0.707,0.293l-2,2c-0.391,0.391 -0.391,1.024 0,1.414l7.293,7.293l-7.293,7.293c-0.391,0.391 -0.391,1.024 0,1.414l2,2c0.391,0.391 1.024,0.391 1.414,0l7.293,-7.293l7.293,7.293c0.391,0.391 1.024,0.391 1.414,0l2,-2c0.391,-0.391 0.391,-1.024 0,-1.414l-7.293,-7.293l7.293,-7.293c0.391,-0.391 0.391,-1.024 0,-1.414l-2,-2c-0.391,-0.391 -1.024,-0.391 -1.414,0l-7.293,7.293l-7.293,-7.293c-0.391,-0.391 -1.024,-0.391 -1.414,0l-2,2c-0.391,0.391 -0.391,1.024 0,1.414l7.293,7.293l-7.293,7.293c-0.391,0.391 -0.391,1.024 0,1.414l2,2c0.195,0.195 0.451,0.293 0.707,0.293c0.256,0 0.512,-0.098 0.707,-0.293l7.293,-7.293l7.293,7.293c0.195,0.195 0.451,0.293 0.707,0.293c0.256,0 0.512,-0.098 0.707,-0.293l2,-2c0.391,-0.391 0.391,-1.024 0,-1.414l-7.293,-7.293l7.293,-7.293c0.391,-0.391 0.391,-1.024 0,-1.414l-2,-2c-0.391,-0.391 -1.024,-0.391 -1.414,0l-7.293,7.293l-7.293,-7.293c-0.195,-0.195 -0.451,-0.293 -0.707,-0.293z"/>
          </g>
        </g>
      </svg>
    </span>
  `;
  
  const overlay = document.getElementById('overlay-popup');
  const popup = document.getElementById('popup');
  
  [overlay, popup, popupMenu].forEach(el => el.style.opacity = el.style.visibility = '1');
  popup.scrollTop = 0;
  window.location.hash = `#${project.hash}`;
  hljs.highlightAll();
}

fetch('main/txt/projects.json')
.then(response => response.json())
.then(({ projects, filters }) => {
  document.querySelectorAll('.filter .text, .tFilterAll, .tFilterMyProject, .tFilterLayout, .tFilterLibrary, .tFilterDesign, .tFilterTilda')
  .forEach(element => {
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

function changefilters(language) {
  Object.entries(data.filters).forEach(([key, value]) => {
    const element = document.querySelector(`.filter .${key}`);
    if (element) element.textContent = value[language];
  });
}

changefilters(currentLanguage);

const filterSections = document.querySelectorAll('.filter .filter-section');
const filterSubMenu = document.querySelector('.filter-wrap.submenu');
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

const handleActiveChange = () => filterArrow.style.transform = `rotate(${filterSubMenu.classList.contains('active') ? '180deg' : '0deg'})`;
const observer = new MutationObserver(handleActiveChange);
observer.observe(filterSubMenu, { attributes: true });
handleActiveChange();
