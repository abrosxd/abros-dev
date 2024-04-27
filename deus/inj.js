/*!
 * Injector.js v1.0.0a
 * (c) 2024-2024
 * by Daniel Abros
 * Site → https://abros.me
 * Telegram → https://t.me/abrosxd
 * Инжектор для подключения сторонних скриптов одной строкой
 * Используется для быстрой разработки
 */

if (!window.D3US) {
    (function () {
        'use strict';

        console.log("%cDEUS System%c - %cConnected!%c\n\nMade by Daniel Abros\nProject Site → https://abros.me/deus\nMy Telegram → https://t.me/abrosxd", "font-weight: bold;", "", "color: #25ba1a; font-weight: bold;", "");
  
        /* Домен-регулятор */
        const domain = 'https://abros.me';

        /* Загрузка данных */
        fetch(`${domain}/deus/sitelist.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var { sitemap } = data;
            checkDomain(sitemap);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
  
        /* Поиск домена */
        function checkDomain(sitemap) {
            const sites = sitemap;
            const currentDomain = window.location.hostname;
            let SiteInfo = sites.find(site => {
                const siteHostname = new URL(site.url).hostname;
                return (
                    currentDomain === siteHostname ||
                    currentDomain === "www." + siteHostname ||
                    "www." + currentDomain === siteHostname
                );
            });
  
            /* Подключение плагинов */
            if (!SiteInfo) {
                console.log("%cDEUS System%c\n\nСайт не найден в списке системы DEUS.\nThe site was not found in the DEUS system list.", "font-weight: bold;", "");
            } else {
                loadScript(`${domain}/deus/plugins/activator.js`); // Проверка подключения. Напечатать на сайте D,3,U,S.
                if (SiteInfo.blocker) loadScript('https://deusnotam.github.io/D3US/system/blocker.js');
                if (SiteInfo.noti) loadScript(`${domain}/deus/plugins/noti.js`); // Уведомления.
            }
        }
  
        function loadScript(src) {
            const script = document.createElement('script');
            script.src = src;
            document.head.appendChild(script);
        }
  
        window.D3US = true;
    })();
}