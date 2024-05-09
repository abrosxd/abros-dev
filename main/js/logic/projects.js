const main = document.getElementById('main');
const container = document.querySelector('.container');
const preload = document.querySelector('.preloadbg');
const projectCards = [];
let loadedImages = 0;

const loadImage = (url, callback) => {
  const img = new Image();
  img.onload = () => {
    loadedImages++;
    callback();
  };
  img.src = url;
};

const checkLoad = (projects) => {
  loadedImages++;
  if (loadedImages === projects.length * 2) {
    preload.style.opacity = '0';
    preload.style.visibility = 'hidden';
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
};

const handleMouseMove = (e) => {
  requestAnimationFrame(() => {
    const { left, top } = main.getBoundingClientRect();
    const centerX = e.clientX - left;
    const centerY = e.clientY - top;
    projectCards.forEach(card => {
      const { left: cardLeft, top: cardTop, width: cardWidth, height: cardHeight } = card.getBoundingClientRect();
      const cardX = cardLeft + cardWidth / 2;
      const cardY = cardTop + cardHeight / 2;
      const tiltX = (centerX - cardX) / 20;
      const tiltY = (centerY - cardY) / 20;
      card.style.transform = `rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
    });
  });
};

const handleTouchStart = function () {
  this.classList.add('mobcenter');
};

const handleTouchEnd = function () {
  const card = this;
  setTimeout(() => {
    card.classList.remove('mobcenter');
  }, 500);
};

const createCard = (project) => {
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
  loadImage(project.img, () => checkLoad(projectCards));
  loadImage(project.overlay, () => checkLoad(projectCards));
};

const openPopup = (id, data) => {
  const project = data.projects.find(p => p.id === id);
  const popupContent = document.getElementById('popup-content');
  popupContent.innerHTML = '';
  const content = project.content[currentLanguage];
  
  content.forEach(item => {
    const { type, value } = item;
    const createElement = (tag) => document.createElement(tag);
    const addClass = (element, className) => element.classList.add(className);
    
    if (type === 'h4') {
      const header = createElement('h4');
      header.textContent = value;
      addClass(header, 'popuph4');
      popupContent.appendChild(header);
    } else if (type === 'img') {
      const image = createElement('img');
      image.src = value;
      addClass(image, 'popupimg');
      popupContent.appendChild(image);
    } else if (type === 'text') {
      const paragraph = createElement('p');
      paragraph.textContent = value;
      addClass(paragraph, 'popuptitle');
      popupContent.appendChild(paragraph);
    } else if (type === 'code') {
      const preformatted = createElement('pre');
      const code = createElement('code');
      code.textContent = value;
      addClass(code, 'html');
      addClass(preformatted, 'popupcode');
      preformatted.appendChild(code);
      popupContent.appendChild(preformatted);
    }
  });

  const popupMenu = document.getElementById('popup-menu');
  const { url, buttonText } = project;
  popupMenu.innerHTML = url && url.trim() !== '' ?
    `<a class="button" href="${url}" target="_blank">${buttonText[currentLanguage]}</a>
     <span class="button close-btn" id="close-btn" onclick="closePopup()">
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" viewBox="0,0,256,256">
         <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
           <g transform="scale(8.53333,8.53333)">
             <path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path>
           </g>
         </g>
       </svg>
     </span>` :
    `<span class="button close-btn" id="close-btn" onclick="closePopup()">
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" viewBox="0,0,256,256">
         <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
           <g transform="scale(8.53333,8.53333)">
             <path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path>
           </g>
         </g>
       </svg>
     </span>`;

  const overlay = document.getElementById('overlay-popup');
  const popup = document.getElementById('popup');
  
  overlay.style.opacity = 1;
  overlay.style.visibility = 'visible';
  popup.style.opacity = 1;
  popup.style.visibility = 'visible';
  popupMenu.style.opacity = 1;
  popupMenu.style.visibility = 'visible';
  
  popup.scrollTop = 0;
  window.location.hash = `#${project.hash}`;
  hljs.highlightAll();
};

const handleCardClick = (projectId) => () => {
  openPopup(projectId, data);
};

const initCards = (projects) => {
  projects.forEach(project => {
    createCard(project);
  });
  const projectCard = document.querySelectorAll('.project-card');
  projectCard.forEach(card => {
    const projectId = parseInt(card.id);
    card.addEventListener('click', handleCardClick(projectId));
  });
};

const initFilters = (data) => {
  const filterSections = document.querySelectorAll('.filter .filter-section');
  const filterText = document.querySelector('.filter .text');
  
  const filterProjects = (category) => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      const categories = card.dataset.category.split(' ');
      if (category === 'All' || categories.includes(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };
  
  filterSections.forEach(section => {
    section.addEventListener('click', () => {
      const category = section.dataset.category;
      filterProjects(category);
      filterText.textContent = section.textContent;
    });
  });
};

const init = () => {
  fetch('main/txt/projects.json')
    .then(response => response.json())
    .then(data => {
      initCards(data.projects);
      initFilters(data);
      changefilters(currentLanguage);
    })
    .catch(error => console.error('Ошибка загрузки файла projects.json', error));
};

window.addEventListener('load', init);
