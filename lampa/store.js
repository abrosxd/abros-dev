/*!
 * Abros Store v1.0.1a
 * (c) 2024-2024
 * by Daniel Abros
 * Site → https://abros.me
 * Telegram → https://t.me/abrosxd
 * Магазин сторонних плагинов для Lampa
 */

(function () {
    'use strict';

    const domain = 'https://abros.me';

    loadScript(`${domain}/main/js/slick.min.js`);
    loadCSS(`${domain}/main/css/slick.css`);
    loadCSS(`${domain}/main/css/slick-theme.css`);

    function loadScript(src) {
        document.head.appendChild(Object.assign(document.createElement('script'), { src }));
    }

    function loadCSS(href) {
        document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'stylesheet', href }));
    }

    function loadData() {
        fetch(`${domain}/lampa/store/storelist.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Помещаем данные в переменные
                var { plugins, reklama, vip } = data;
                console.log('Plugins:', plugins);
                console.log('Reklama:', reklama);
                console.log('VIP:', vip);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }
    


    if (window.appready) {
        loadData();
    } else {
        Lampa.Listener.follow('app', e => {
            if (e.type === 'ready') {
                loadData();
            }
        });
    }
})();
