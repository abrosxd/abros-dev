/*!
 * Injector.js v1.0.0a
 * (c) 2024-2024
 * by Daniel Abros
 * Site → https://abros.dev
 * Telegram → https://t.me/abrosxd
 * Инжектор для подключения сторонних скриптов одной строкой
 * Используется для быстрой разработки
 * <script src = 'https://abros.dev/inj.js'></script>
 * <script type="module" src = 'https://abros.dev/inj.js'></script>
 */

if (!window.AbrosInj) {
    (function () {
        'use strict';
  
        /* Домены-регуляторы */
        const abros = 'https://abros.dev'; // Мой сайт
        const deus = 'https://deusnotam.github.io'; // Система DEUS
  
        /* Подключение плагинов */
        loadScript(`${abros}/dev/noti.js`);
        loadScript(`${deus}/D3US/d3us.js`);
  
        function loadScript(src) {
            const script = document.createElement('script');
            script.src = src;
            document.head.appendChild(script);
        }
  
        window.AbrosInj = true;
    })();
}