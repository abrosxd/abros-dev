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

    // Function to add the Abros Store component
    function addAbrosStore() {
        if (!Lampa.Settings.main) return;

        var AbrosStoreComponent = '[data-component="abros_store"]';
        var AbrosStoreExist = Lampa.Settings.main().render().find(AbrosStoreComponent).length > 0;

        if (!AbrosStoreExist) {
            var AbrosStoreHTML = '<div class="settings-folder selector" data-component="abros_store" data-static="true">' +
                '<div class="settings-folder__icon">' +
                '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">' +
                '<g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">' +
                '<path d="M2233 3855 c-60 -12 -151 -34 -203 -49 -89 -26 -116 -37 -245 -97 -62 -29 -166 -89 -183 -105 -6 -7 -21 -16 -32 -19 -11 -4 -18 -11 -15 -16 4 -5 2 -9 -3 -9 -26 0 -212 -219 -212 -249 0 -6 -4 -11 -8 -11 -5 0 -19 -21 -32 -47 -13 -27 -28 -51 -34 -55 -6 -4 -7 -8 -3 -8 5 0 0 -15 -11 -32 -21 -34 -85 -201 -97 -253 -4 -16 -9 -37 -11 -45 -36 -140 -43 -243 -19 -294 9 -19 22 -33 28 -30 15 6 64 112 72 154 0 3 10 26 22 51 11 26 27 64 34 85 7 22 22 51 32 67 10 15 15 27 10 27 -4 0 -3 4 2 8 6 4 21 30 35 57 14 28 30 56 37 63 7 7 13 18 13 23 0 5 9 19 20 31 11 12 20 28 20 35 0 7 4 13 10 13 5 0 16 12 24 28 20 38 159 171 179 172 5 0 21 8 35 19 54 37 245 100 352 116 14 2 36 7 50 10 101 24 423 24 585 0 17 -2 53 -7 80 -10 85 -11 127 -18 175 -30 8 -2 20 -4 26 -4 5 -1 19 -9 30 -18 11 -10 32 -25 46 -33 62 -36 266 -206 311 -260 32 -38 57 -93 57 -126 0 -12 4 -25 8 -28 4 -2 9 -21 10 -42 2 -20 6 -42 9 -47 10 -17 26 -202 26 -295 -2 -192 -40 -298 -145 -403 -42 -42 -156 -124 -202 -147 -22 -11 -57 -27 -76 -36 -117 -56 -374 -77 -477 -39 -23 8 -86 54 -96 70 -4 7 -13 18 -21 25 -7 8 -33 49 -57 93 -37 68 -43 88 -44 138 0 53 3 61 30 83 64 52 155 54 260 8 22 -10 42 -18 45 -19 23 -7 106 -50 111 -57 3 -5 10 -10 15 -10 5 -1 23 -7 39 -14 57 -24 156 1 215 54 14 12 28 22 32 22 5 0 8 4 8 9 0 6 10 21 23 35 13 14 30 44 37 68 7 24 16 48 19 53 13 24 21 165 9 165 -4 0 -5 6 -2 14 12 30 -43 201 -102 321 -58 118 -68 131 -145 195 -136 113 -297 140 -509 85 -14 -3 -36 -8 -50 -11 -14 -3 -32 -7 -40 -9 -8 -2 -31 -7 -50 -10 -19 -3 -75 -17 -125 -31 -49 -15 -97 -28 -105 -29 -8 -2 -15 -4 -15 -5 0 -1 -11 -4 -25 -6 -13 -2 -35 -11 -47 -19 -13 -9 -23 -13 -23 -10 0 3 -17 -4 -37 -15 -21 -11 -42 -20 -46 -20 -13 0 -107 -65 -147 -101 -117 -106 -347 -340 -401 -409 -20 -25 -48 -66 -63 -91 -34 -59 -95 -214 -102 -259 -9 -56 -12 -75 -14 -75 -1 0 -3 -18 -4 -40 -3 -58 20 -202 43 -262 10 -29 16 -53 13 -53 -4 0 -2 -4 4 -8 6 -4 21 -29 34 -57 13 -27 26 -52 30 -55 3 -3 17 -21 30 -40 14 -19 47 -55 74 -80 27 -25 64 -60 82 -77 18 -18 37 -33 42 -33 4 0 21 -13 37 -30 16 -16 34 -30 40 -30 7 0 20 -9 30 -20 10 -11 24 -20 31 -20 7 0 17 -7 22 -16 5 -9 13 -16 18 -17 5 0 50 -19 99 -42 50 -23 124 -52 165 -64 41 -13 82 -26 90 -29 8 -3 24 -7 35 -9 11 -2 43 -7 70 -13 166 -31 449 -32 600 0 94 20 141 34 183 56 15 8 32 14 39 14 6 0 50 20 96 44 210 109 400 259 520 413 79 100 56 119 -67 56 -39 -20 -78 -42 -86 -49 -8 -7 -99 -56 -202 -108 -174 -90 -196 -98 -310 -121 -157 -32 -166 -34 -208 -42 -77 -15 -332 -6 -362 13 -4 3 -17 7 -27 9 -30 6 -149 65 -162 81 -6 8 -17 14 -24 14 -13 0 -140 123 -195 190 -19 24 -43 50 -52 59 -10 8 -18 19 -18 24 0 4 -10 19 -22 32 -21 23 -84 138 -106 195 -26 68 -36 253 -18 330 3 14 9 41 13 60 10 53 84 230 151 360 38 72 122 159 186 192 23 11 43 24 46 28 10 14 187 72 240 78 92 10 238 6 283 -8 23 -8 60 -28 82 -44 60 -46 165 -149 165 -162 0 -7 6 -14 13 -17 17 -6 86 -145 86 -172 0 -11 1 -40 1 -64 2 -57 -41 -129 -87 -148 -32 -13 -34 -12 -75 30 -45 45 -65 68 -111 130 -52 69 -79 88 -145 103 -37 8 -37 8 -120 -1 -80 -7 -105 -16 -167 -56 -73 -48 -144 -145 -179 -244 -10 -27 -20 -57 -23 -65 -24 -65 -11 -268 19 -286 4 -3 8 -13 8 -23 0 -10 7 -24 15 -31 8 -7 12 -16 9 -21 -3 -5 0 -9 5 -9 6 0 11 -5 11 -11 0 -6 21 -32 46 -59 33 -35 75 -63 140 -95 51 -25 100 -45 109 -45 8 0 23 -4 33 -9 17 -9 40 -17 55 -20 4 0 21 -8 37 -16 17 -9 30 -14 30 -11 0 2 21 -3 48 -11 26 -8 54 -16 62 -18 8 -1 40 -9 70 -17 70 -19 182 -22 246 -8 27 7 57 13 67 15 48 10 183 63 277 108 58 28 107 51 110 51 3 1 36 20 73 44 80 51 161 127 207 197 19 28 37 52 42 53 4 2 8 9 8 15 0 7 8 26 17 42 68 126 93 183 118 269 31 111 31 202 0 286 -9 25 -18 52 -19 60 -6 38 -132 305 -161 340 -7 8 -25 39 -41 67 -16 29 -32 53 -36 53 -5 0 -8 5 -8 11 0 16 -87 128 -142 182 -85 84 -220 159 -308 172 -3 0 -11 4 -17 8 -7 5 -13 6 -13 3 0 -3 -17 2 -37 11 -21 8 -40 15 -43 14 -3 0 -23 4 -45 10 -22 6 -40 10 -40 9 0 -1 -12 3 -26 9 -15 5 -46 13 -70 16 -24 4 -47 9 -51 11 -4 3 -20 7 -35 9 -16 2 -39 7 -53 10 -54 14 -187 37 -300 51 -94 12 -143 10 -247 -11z"/>' +
                '</g>' +
                '</svg>' +
                '</div>' +
                '<div class="settings-folder__name">Abros Store</div>' +
                '</div>';

            var $AbrosStoreHTML = $(Lampa.Lang.translate(AbrosStoreHTML));
            Lampa.Settings.main().render().find('[data-component="plugins"]').before($AbrosStoreHTML);
            Lampa.Settings.main().update();
        }
    }

    // Function to add the Ad section
    function addAdSection() {
        if (!Lampa.App.main) return;

        var adAbrosStoreComponent = '[class="adAbrosstore]';
        var adAbrosStoreExist = Lampa.App.main().render().find(adAbrosStoreComponent).length > 0;

        if (!adAbrosStoreExist) {
            var adAbrosStoreHTML = '<div class="adAbrosstore">' +
            '<div class="adAbrosStore__head">' +
            '<div class="adAbrosStore__title">Реклама</div>' +
            '</div>' +
            '<div class="adAbrosStore__body"></div>' +
            '</div>';

            var $adAbrosStoreHTML = $(Lampa.Lang.translate(adAbrosStoreHTML));
            Lampa.App.main().render().find('[class="head"]').after($adAbrosStoreHTML);
            Lampa.App.main().update();
        }
        
        fetch('https://abros.me/lampa/store//adlist.json')
            .then(response => response.json())
            .then(data => {
                var bodyElement = document.querySelector('.adAbrosStore__body');
                data.reklama.forEach(function (cardData) {
                    var cardElement = document.createElement('div');
                    cardElement.classList.add('adAbrosStore__card');

                    var viewElement = document.createElement('div');
                    viewElement.classList.add('adAbrosStore__card__view');

                    var imageElement = document.createElement('img');
                    imageElement.classList.add('adAbrosStore__card__img');
                    imageElement.src = cardData.image;

                    var authorElement = document.createElement('div');
                    authorElement.classList.add('adAbrosStore__card__author');
                    authorElement.textContent = cardData.author;

                    var textElement = document.createElement('div');
                    textElement.classList.add('adAbrosStore__card__text');
                    textElement.textContent = cardData.text;

                    var linkElement = document.createElement('a');
                    linkElement.classList.add('adAbrosStore__card__link');
                    linkElement.textContent = cardData.link;

                    viewElement.appendChild(imageElement);
                    viewElement.appendChild(authorElement);
                    viewElement.appendChild(textElement);
                    viewElement.appendChild(linkElement);

                    cardElement.appendChild(viewElement);
                    bodyElement.appendChild(cardElement);
                });
            })
            .catch(error => console.error('Ошибка загрузки файла adstore.json:', error));
    }

    Lampa.Settings.listener.follow('open', function (e) {
        if (e.name === 'main') {
            e.body.find('[data-component="abros_store"]').on('hover:enter', function () {
                Lampa.Extensions.show({
                    store: 'https://abros.me/lampa/store/storelist.json',
                    with_installed: true
                });
            });
        }
    });

    if (window.appready) {
        addAbrosStore();
        addAdSection(); // Call the function to add the Ad section
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') {
                addAbrosStore();
                addAdSection(); // Call the function to add the Ad section
            }
        });
    }
})();
