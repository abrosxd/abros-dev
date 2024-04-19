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

    function addAbrosStore() {
        const AbrosStoreComponent = '[data-component="abros_store"]';
        const $AbrosStoreHTML = $(Lampa.Lang.translate(`
            <div class="settings-folder selector" data-component="abros_store" data-static="true">
                <div class="settings-folder__icon">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                        
                        </g>
                    </svg>
                </div>
                <div class="settings-folder__name">Abros Store</div>
            </div>`));
        const $settingsMain = Lampa.Settings.main().render();
        if (!$settingsMain.find(AbrosStoreComponent).length) {
            $settingsMain.find('[data-component="plugins"]').before($AbrosStoreHTML);
            Lampa.Settings.main().update();
        }
    }

    Lampa.Settings.listener.follow('open', function (e) {
        if (e.name === 'main') {
            e.body.find('[data-component="abros_store"]').on('hover:enter', function () {
                Lampa.Extensions.show({
                    store: `${domain}/lampa/store/storelist.json`,
                    with_installed: true
                });
            });
        }
    });

    function checkAbrosStore() {
        const userDataJSON = localStorage.getItem('account_user');
        if (!userDataJSON) {
            addAbrosStoreAd();
            return;
        }
        const userData = JSON.parse(userDataJSON);
        if (!userData || !userData.email) {
            addAbrosStoreAd();
            return;
        }
        fetch(`${domain}/lampa/store/vip.json`)
            .then(response => response.json())
            .then(data => {
                const currentDate = new Date();
                const vipUser = data.vip.find(vip => {
                    const [day, month, year] = vip.subscribe.split('.');
                    const subscribeDate = new Date(`${month}/${day}/${year}`);
                    return vip.email === userData.email && subscribeDate > currentDate;
                });
                if (vipUser) addAbrosStoreVip(vipUser);
                else addAbrosStoreAd();
            })
            .catch(error => console.error('Ошибка при загрузке данных о VIP:', error));
    }

    function addAbrosStoreMain() {
        document.querySelectorAll('.menu').forEach(menuCase => {
            const AbrosStoreAdHTML = `
                <div class="Abrosstore" style="height: max-content; margin: 0 0 1em 0.6em;">
                    <div class="AbrosStore__head" style="margin-bottom: 5px;">
                        <div class="AbrosStore__title" style="font-size: 1.3em;"></div>
                    </div>
                    <div id="AbrosStore__body" class="AbrosStore__body"></div>
                </div>`;
            menuCase.insertAdjacentHTML('afterbegin', AbrosStoreAdHTML);
        });
    }

    function addAbrosStoreAd() {
        document.querySelectorAll('.menu').forEach(menuCase => {
            const adAbrosStoreTitle = menuCase.querySelector('.AbrosStore__title');
            adAbrosStoreTitle.textContent = "Реклама";
            const adAbrosStoreBody = menuCase.querySelector('.AbrosStore__body');
            fetch(`${domain}/lampa/store/adlist.json`)
                .then(response => response.json())
                .then(data => {
                    data.reklama.forEach(item => {
                        const cardHTML = `
                            <div class="adAbrosstore__card">
                                <img class="adAbrosstore__card__image" style="border-radius: 1em;" src="${item.image}">
                                <div class="adAbrosstore__card__text" style="font-size: 0.7em; position: absolute; bottom: 0; margin: 4px; width: 14%; color:${item.colortext}">${item.text}</div>
                            </div>`;
                        adAbrosStoreBody.insertAdjacentHTML('beforeend', cardHTML);
                    });
                    if (adAbrosStoreBody) $('#AbrosStore__body').slick({
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 10000,
                        arrows: false,
                    });
                })
                .catch(error => console.error('Ошибка загрузки данных:', error));
        });
    }

    function addAbrosStoreVip(vipData) {
        const menuCases = document.querySelectorAll('.menu');
        menuCases.forEach(menuCase => {
            const [day, month, year] = vipData.subscribe.split('.');
            const subscribeDate = new Date(`${month}/${day}/${year}`);
            const adAbrosStoreTitle = menuCase.querySelector('.AbrosStore__title');
            const remainingDays = Math.ceil((subscribeDate - new Date()) / (1000 * 60 * 60 * 24));
            adAbrosStoreTitle.style.cssText = 'background-color: #b5965a; color: white; padding: 0.5em; border-radius: 1em; text-align: center; font-size: 1.3em;';
            adAbrosStoreTitle.textContent = `💎 VIP ещё ${formatDays(remainingDays)}`;
        });
    }

    function formatDays(days) {
        const num = Math.abs(days);
        const lastDigit = num % 10;
        const lastTwoDigits = num % 100;
        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return `${num} дней`;
        else if (lastDigit === 1) return `${num} день`;
        else if (lastDigit >= 2 && lastDigit <= 4) return `${num} дня`;
        else return `${num} дней`;
    }

    if (window.appready) {
        addAbrosStore();
        addAbrosStoreMain();
        checkAbrosStore();
    } else {
        Lampa.Listener.follow('app', e => {
            if (e.type === 'ready') {
                addAbrosStore();
                addAbrosStoreMain();
                checkAbrosStore();
            }
        });
    }
})();
