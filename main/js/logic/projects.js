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

      const deltaX = centerX - cardX;
      const deltaY = centerY - cardY;

      const tiltX = deltaX / 20;
      const tiltY = deltaY / 20;

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
.then(data => {
  data.projects.forEach(project => {
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
  });

  function openPopup(id) {
    const project = data.projects.find(project => project.id === id);
    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = '';

    project.content[currentLanguage].forEach(item => {
      const { type, value } = item;
      const element = document.createElement(type === 'code' ? 'pre' : type);
      if (type === 'img') {
        element.src = value;
      } else {
        if (type === 'code') {
          element.textContent = value;
          element.classList.add('popupcode');
        } else {
          element.textContent = value;
          element.className = `popup${type}`;
        }
      }
      popupContent.appendChild(element);
    });

    const popupMenu = document.getElementById('popup-menu');
    const buttonText = project.url && project.url.trim() !== '' ? project.buttonText[currentLanguage] : '';
    popupMenu.innerHTML = `
      ${project.url && project.url.trim() !== '' ? `<a class="button" href="${project.url}" target="_blank">${buttonText}</a>` : ''}
      <span class="button close-btn" id="close-btn" onclick="closePopup()">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" viewBox="0,0,256,256">
          <g fill="#ffffff" fill-rule="nonzero">
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
    window.location.hash = `#${project.hash}`;
    hljs.highlightAll();
  }

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = parseInt(card.id);
      openPopup(projectId);
    });
  });

  window.addEventListener('load', () => {
    const hash = window.location.hash.substr(1);
    if (hash) {
      const project = data.projects.find(project => project.hash === hash);
      if (project) openPopup(project.id);
    }
  });

  const changefilters = language => {
    const { filters } = data;
    const filterElements = [
      { element: '.tFilterAll', key: 'All' },
      { element: '.tFilterMyProject', key: 'MyProject' },
      { element: '.tFilterLayout', key: 'Layout' },
      { element: '.tFilterLibrary', key: 'Library' },
      { element: '.tFilterDesign', key: 'Design' },
      { element: '.tFilterTilda', key: 'Tilda' }
    ];
    filterElements.forEach(({ element, key }) => {
      const filterElement = document.querySelector(element);
      filterElement.textContent = filters[key][language];
    });
  };

  changefilters(currentLanguage);
})
.catch(error => console.error('Ошибка загрузки файла projects.json', error));

const filterSections = document.querySelectorAll('.filter .filter-section');
const filterText = document.querySelector('.filter .text');
const filterArrow = document.querySelector('.filter .arrow');
const filterSubMenu = document.querySelector('.filter-wrap.submenu');

const filterProjects = category => {
  document.querySelectorAll('.project-card').forEach(card => {
    const categories = card.dataset.category.split(' ');
    card.style.display = (category === 'All' || categories.includes(category)) ? 'block' : 'none';
  });
};

filterSections.forEach(section => {
  section.addEventListener('click', () => {
    const category = section.dataset.category;
    filterProjects(category);
    filterText.textContent = section.textContent;
  });
});

const handleActiveChange = () => {
  filterArrow.style.transform = `rotate(${filterSubMenu.classList.contains('active') ? 180 : 0}deg)`;
};

const observer = new MutationObserver(handleActiveChange);
observer.observe(filterSubMenu, { attributes: true });
handleActiveChange();
