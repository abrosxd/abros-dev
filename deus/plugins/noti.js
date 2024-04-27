/*!
 * Noti
 * Made by Daniel Abros
 * Telegram → https://t.me/abrosxd
 * Данный скрипт отвечает за вывод уведомлений на сайте.
 */

// Добавляем шрифт
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    </style>
`);

// Тело
const Noti_Body = document.createElement('div');
Noti_Body.style.fontFamily = 'Inter';
Noti_Body.style.fontSize = '16px';
Noti_Body.style.display = 'flex';
Noti_Body.style.flexDirection = 'column';
Noti_Body.style.isolation = 'isolate';
Noti_Body.style.position = 'fixed';
Noti_Body.style.top = '0.5rem';
Noti_Body.style.right = '0.5rem';
Noti_Body.style.width = '18rem';
Noti_Body.style.height = 'auto';
Noti_Body.style.background = '#29292c';
Noti_Body.style.borderRadius = '1rem';
Noti_Body.style.overflow = 'hidden';
Noti_Body.style.zIndex = '999999999999';

// Тело начало
const Noti_BodyBefore = document.createElement('div');
Noti_BodyBefore.style.position = 'absolute';
Noti_BodyBefore.style.content = '';
Noti_BodyBefore.style.inset = '0.0625rem';
Noti_BodyBefore.style.borderRadius = '0.9375rem';
Noti_BodyBefore.style.background = '#18181b';
Noti_BodyBefore.style.zIndex = '2';

// Тело конец
const Noti_BodyAfter = document.createElement('div');
Noti_BodyAfter.style.position = 'absolute';
Noti_BodyAfter.style.content = '';
Noti_BodyAfter.style.width = '0.25rem';
Noti_BodyAfter.style.inset = '0.65rem auto 0.65rem 0.5rem';
Noti_BodyAfter.style.borderRadius = '0.125rem';
Noti_BodyAfter.style.background = 'linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff)';
Noti_BodyAfter.style.transition = 'transform 300ms ease';
Noti_BodyAfter.style.zIndex = '4';

// Мэш
const Noti_BodyMesh = document.createElement('div');
Noti_BodyMesh.style.position = 'absolute';
Noti_BodyMesh.style.width = '20rem';
Noti_BodyMesh.style.height = '20rem';
Noti_BodyMesh.style.transform = 'translate(-50%, -50%)';
Noti_BodyMesh.style.background = 'radial-gradient(circle closest-side at center, white, transparent)';
Noti_BodyMesh.style.opacity = '0';
Noti_BodyMesh.style.transition = 'opacity 300ms ease';
Noti_BodyMesh.style.zIndex = '3';

// Глоу
const Noti_BodyGlow = document.createElement('div');
Noti_BodyGlow.style.position = 'absolute';
Noti_BodyGlow.style.width = '20rem';
Noti_BodyGlow.style.height = '20rem';
Noti_BodyGlow.style.transform = 'translate(-50%, -50%)';
Noti_BodyGlow.style.background = 'radial-gradient(circle closest-side at center, white, transparent)';
Noti_BodyGlow.style.opacity = '0';
Noti_BodyGlow.style.transition = 'opacity 300ms ease';
Noti_BodyGlow.style.zIndex = '1';

// Лого
const Noti_BodyLogo = document.createElement('img');
Noti_BodyLogo.src = window.SiteInfo.noti[0].img;
Noti_BodyLogo.style.width = '40px';
Noti_BodyLogo.style.borderRadius = '10px';
Noti_BodyLogo.style.margin = '0.65rem 0.25rem 0 1.25rem';
Noti_BodyLogo.style.transition = 'transform 300ms ease';
Noti_BodyLogo.style.zIndex = '5';

// Заголовок
const Noti_BodyTitle = document.createElement('div');
Noti_BodyTitle.textContent = window.SiteInfo.noti.title;
Noti_BodyTitle.style.color = '#32a6ff';
Noti_BodyTitle.style.margin = '0.65rem 0.25rem 0.4rem 1.25rem';
Noti_BodyTitle.style.fontWeight = '500';
Noti_BodyTitle.style.fontSize = '1.1rem';
Noti_BodyTitle.style.transition = 'transform 300ms ease';
Noti_BodyTitle.style.zIndex = '5';

// Текст
const Noti_BodyText = document.createElement('div');
Noti_BodyText.innerHTML = window.SiteInfo.noti[0].text;
Noti_BodyText.style.color = '#99999d';
Noti_BodyText.style.margin = '0 0.25rem 0.65rem 1.25rem';
Noti_BodyText.style.transition = 'transform 300ms ease';
Noti_BodyText.style.zIndex = '5';

// Анимация
Noti_Body.addEventListener('mouseover', () => {
    Noti_BodyAfter.style.transform = 'translateX(0.15rem)';
    Noti_BodyLogo.style.transform = 'translateX(0.15rem)';
    Noti_BodyTitle.style.transform = 'translateX(0.15rem)';
    Noti_BodyText.style.transform = 'translateX(0.25rem)';
    Noti_BodyMesh.style.opacity = '0.1';
    Noti_BodyGlow.style.opacity = '0.1';
});

Noti_Body.addEventListener('mouseout', () => {
    Noti_BodyAfter.style.transform = 'translateX(0)';
    Noti_BodyLogo.style.transform = 'translateX(0)';
    Noti_BodyTitle.style.transform = 'translateX(0)';
    Noti_BodyText.style.transform = 'translateX(0)';
    Noti_BodyMesh.style.opacity = '0';
    Noti_BodyGlow.style.opacity = '0';
});

// Анимация при наведении
Noti_Body.addEventListener('mouseenter', () => {
    Noti_Body.style.transition = 'right 300ms ease';
    Noti_Body.style.right = '0.5rem';
});

// Анимация при ненаведении
Noti_Body.addEventListener('mouseleave', () => {
    Noti_Body.style.transition = 'right 300ms ease';
    Noti_Body.style.right = '-17rem';
});

// Добавление анимации через 10 секунд
setTimeout(() => {
    Noti_Body.style.transition = 'right 300ms ease';
    Noti_Body.style.right = '-17rem';
}, 10000);

// Добавляем элементы в DOM
Noti_Body.appendChild(Noti_BodyBefore);
Noti_Body.appendChild(Noti_BodyAfter);
Noti_Body.appendChild(Noti_BodyMesh);
Noti_Body.appendChild(Noti_BodyGlow);
Noti_Body.appendChild(Noti_BodyLogo);
Noti_Body.appendChild(Noti_BodyTitle);
Noti_Body.appendChild(Noti_BodyText);
document.documentElement.appendChild(Noti_Body);

// if the pen is in thumbnail view, scale it up
if (location.pathname.match(/fullcpgrid/i) ? true : false) {
  document.documentElement.style.fontSize = "48px"
  Noti_Body.style.display = "none"
}


let isHovering = false

Noti_Body.addEventListener("mousemove", (event) => {
  const rect = Noti_Body.getBoundingClientRect()
  const localX = (event.clientX - rect.left) / rect.width
  const localY = (event.clientY - rect.top) / rect.height
  
  Noti_BodyMesh.style.left = localX * 100 + "%"
  Noti_BodyMesh.style.top = localY * 100 + "%"
  
  Noti_BodyGlow.style.left = localX * 100 + "%"
  Noti_BodyGlow.style.top = localY * 100 + "%"
  
  if (isHovering) {
    Noti_BodyMesh.style.transition = "inset 50ms linear, opacity 300ms ease";
    Noti_BodyGlow.style.transition = "inset 50ms linear, opacity 300ms ease"
  } else {
    Noti_BodyMesh.style.transition = "opacity 300ms ease"
    Noti_BodyGlow.style.transition = "opacity 300ms ease"
  }
  
  isHovering = false
});

Noti_Body.addEventListener("mouseout", (event) => {
  isHovering = true;
})