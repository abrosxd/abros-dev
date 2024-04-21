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

    /* Домен-регулятор */
    const domain = 'https://abros.me';

    /* Иконки */
    var icon_abros = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M2233 3855 c-60 -12 -151 -34 -203 -49 -89 -26 -116 -37 -245 -97 -62 -29 -166 -89 -183 -105 -6 -7 -21 -16 -32 -19 -11 -4 -18 -11 -15 -16 4 -5 2 -9 -3 -9 -26 0 -212 -219 -212 -249 0 -6 -4 -11 -8 -11 -5 0 -19 -21 -32 -47 -13 -27 -28 -51 -34 -55 -6 -4 -7 -8 -3 -8 5 0 0 -15 -11 -32 -21 -34 -85 -201 -97 -253 -4 -16 -9 -37 -11 -45 -36 -140 -43 -243 -19 -294 9 -19 22 -33 28 -30 15 6 64 112 72 154 0 3 10 26 22 51 11 26 27 64 34 85 7 22 22 51 32 67 10 15 15 27 10 27 -4 0 -3 4 2 8 6 4 21 30 35 57 14 28 30 56 37 63 7 7 13 18 13 23 0 5 9 19 20 31 11 12 20 28 20 35 0 7 4 13 10 13 5 0 16 12 24 28 20 38 159 171 179 172 5 0 21 8 35 19 54 37 245 100 352 116 14 2 36 7 50 10 101 24 423 24 585 0 17 -2 53 -7 80 -10 85 -11 127 -18 175 -30 8 -2 20 -4 26 -4 5 -1 19 -9 30 -18 11 -10 32 -25 46 -33 62 -36 266 -206 311 -260 32 -38 57 -93 57 -126 0 -12 4 -25 8 -28 4 -2 9 -21 10 -42 2 -20 6 -42 9 -47 10 -17 26 -202 26 -295 -2 -192 -40 -298 -145 -403 -42 -42 -156 -124 -202 -147 -22 -11 -57 -27 -76 -36 -117 -56 -374 -77 -477 -39 -23 8 -86 54 -96 70 -4 7 -13 18 -21 25 -7 8 -33 49 -57 93 -37 68 -43 88 -44 138 0 53 3 61 30 83 64 52 155 54 260 8 22 -10 42 -18 45 -19 23 -7 106 -50 111 -57 3 -5 10 -10 15 -10 5 -1 23 -7 39 -14 57 -24 156 1 215 54 14 12 28 22 32 22 5 0 8 4 8 9 0 6 10 21 23 35 13 14 30 44 37 68 7 24 16 48 19 53 13 24 21 165 9 165 -4 0 -5 6 -2 14 12 30 -43 201 -102 321 -58 118 -68 131 -145 195 -136 113 -297 140 -509 85 -14 -3 -36 -8 -50 -11 -14 -3 -32 -7 -40 -9 -8 -2 -31 -7 -50 -10 -19 -3 -75 -17 -125 -31 -49 -15 -97 -28 -105 -29 -8 -2 -15 -4 -15 -5 0 -1 -11 -4 -25 -6 -13 -2 -35 -11 -47 -19 -13 -9 -23 -13 -23 -10 0 3 -17 -4 -37 -15 -21 -11 -42 -20 -46 -20 -13 0 -107 -65 -147 -101 -117 -106 -347 -340 -401 -409 -20 -25 -48 -66 -63 -91 -34 -59 -95 -214 -102 -259 -9 -56 -12 -75 -14 -75 -1 0 -3 -18 -4 -40 -3 -58 20 -202 43 -262 10 -29 16 -53 13 -53 -4 0 -2 -4 4 -8 6 -4 21 -29 34 -57 13 -27 26 -52 30 -55 3 -3 17 -21 30 -40 14 -19 47 -55 74 -80 27 -25 64 -60 82 -77 18 -18 37 -33 42 -33 4 0 21 -13 37 -30 16 -16 34 -30 40 -30 7 0 20 -9 30 -20 10 -11 24 -20 31 -20 7 0 17 -7 22 -16 5 -9 13 -16 18 -17 5 0 50 -19 99 -42 50 -23 124 -52 165 -64 41 -13 82 -26 90 -29 8 -3 24 -7 35 -9 11 -2 43 -7 70 -13 166 -31 449 -32 600 0 94 20 141 34 183 56 15 8 32 14 39 14 6 0 50 20 96 44 210 109 400 259 520 413 79 100 56 119 -67 56 -39 -20 -78 -42 -86 -49 -8 -7 -99 -56 -202 -108 -174 -90 -196 -98 -310 -121 -157 -32 -166 -34 -208 -42 -77 -15 -332 -6 -362 13 -4 3 -17 7 -27 9 -30 6 -149 65 -162 81 -6 8 -17 14 -24 14 -13 0 -140 123 -195 190 -19 24 -43 50 -52 59 -10 8 -18 19 -18 24 0 4 -10 19 -22 32 -21 23 -84 138 -106 195 -26 68 -36 253 -18 330 3 14 9 41 13 60 10 53 84 230 151 360 38 72 122 159 186 192 23 11 43 24 46 28 10 14 187 72 240 78 92 10 238 6 283 -8 23 -8 60 -28 82 -44 60 -46 165 -149 165 -162 0 -7 6 -14 13 -17 17 -6 86 -145 86 -172 0 -11 1 -40 1 -64 2 -57 -41 -129 -87 -148 -32 -13 -34 -12 -75 30 -45 45 -65 68 -111 130 -52 69 -79 88 -145 103 -37 8 -37 8 -120 -1 -80 -7 -105 -16 -167 -56 -73 -48 -144 -145 -179 -244 -10 -27 -20 -57 -23 -65 -24 -65 -11 -268 19 -286 4 -3 8 -13 8 -23 0 -10 7 -24 15 -31 8 -7 12 -16 9 -21 -3 -5 0 -9 5 -9 6 0 11 -5 11 -11 0 -6 21 -32 46 -59 33 -35 75 -63 140 -95 51 -25 100 -45 109 -45 8 0 23 -4 33 -9 17 -9 40 -17 55 -20 4 0 21 -8 37 -16 17 -9 30 -14 30 -11 0 2 21 -3 48 -11 26 -8 54 -16 62 -18 8 -1 40 -9 70 -17 70 -19 182 -22 246 -8 27 7 57 13 67 15 48 10 183 63 277 108 58 28 107 51 110 51 3 1 36 20 73 44 80 51 161 127 207 197 19 28 37 52 42 53 4 2 8 9 8 15 0 7 8 26 17 42 68 126 93 183 118 269 31 111 31 202 0 286 -9 25 -18 52 -19 60 -6 38 -132 305 -161 340 -7 8 -25 39 -41 67 -16 29 -32 53 -36 53 -5 0 -8 5 -8 11 0 16 -87 128 -142 182 -85 84 -220 159 -308 172 -3 0 -11 4 -17 8 -7 5 -13 6 -13 3 0 -3 -17 2 -37 11 -21 8 -40 15 -43 14 -3 0 -23 4 -45 10 -22 6 -40 10 -40 9 0 -1 -12 3 -26 9 -15 5 -46 13 -70 16 -24 4 -47 9 -51 11 -4 3 -20 7 -35 9 -16 2 -39 7 -53 10 -54 14 -187 37 -300 51 -94 12 -143 10 -247 -11z"/></g></svg>'
    var icon_online = '<div class="settings-folder" style="padding:0!important"><div class="settings-folder__icon" style="width:1.8em;height:1.3em;padding-right:.5em"><svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500.000000pt" height="500.000000pt" viewBox="-1.09 0 122.88 122.88" version="1.1" id="Layer_1" style="enable-background:new 0 0 120.71 122.88" xml:space="preserve"><g stroke-linecap="round" stroke-linejoin="round"/></g><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g> <path class="st0" d="M59.97,0c33.11,0,59.96,26.85,59.96,59.97c0,16.04-6.3,30.62-16.57,41.38c3.34,9.99,4.44,6.97,17.36,8.88v12.5 c-19.28,0.78-15.44-1.14-27.55-12.83c-9.51,6.34-20.92,10.03-33.2,10.03C26.85,119.93,0,93.08,0,59.97C0,26.85,26.86,0,59.97,0 L59.97,0z M27.63,44.25c8.91,0,16.14,7.22,16.14,16.14c0,8.91-7.22,16.13-16.14,16.13c-8.91,0-16.13-7.22-16.13-16.13 C11.5,51.47,18.72,44.25,27.63,44.25L27.63,44.25z M93.08,44.25c8.91,0,16.14,7.22,16.14,16.14c0,8.91-7.22,16.13-16.14,16.13 c-8.91,0-16.13-7.22-16.13-16.13C76.95,51.47,84.17,44.25,93.08,44.25L93.08,44.25z M60.83,10.86c8.91,0,16.13,7.22,16.13,16.14 c0,8.91-7.22,16.13-16.13,16.13c-8.91,0-16.14-7.22-16.14-16.13C44.69,18.09,51.92,10.86,60.83,10.86L60.83,10.86L60.83,10.86z M60.26,51.71c4.58,0,8.3,3.72,8.3,8.3c0,4.58-3.72,8.3-8.3,8.3c-4.58,0-8.3-3.72-8.3-8.3C51.96,55.42,55.68,51.71,60.26,51.71 L60.26,51.71L60.26,51.71z M60.83,78.38c8.91,0,16.13,7.22,16.13,16.14c0,8.91-7.22,16.13-16.13,16.13 c-8.91,0-16.14-7.22-16.14-16.13C44.69,85.61,51.92,78.38,60.83,78.38L60.83,78.38L60.83,78.38z"/></g></svg></div><div class="settings-folder__name" style="font-size: 1.3em;">Онлайн</div></div>'
    var icon_tv = '<div class="settings-folder" style="padding:0!important"><div class="settings-folder__icon" style="width:1.8em;height:1.3em;padding-right:.5em"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 3L12 7L7 3M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></div><div class="settings-folder__name" style="font-size: 1.3em;">ТВ</div></div>'
    var icon_control = '<div class="settings-folder" style="padding:0!important"><div class="settings-folder__icon" style="width:1.8em;height:1.3em;padding-right:.5em"><svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="800px" height="800px" viewBox="0 0 1024 1024" class="icon"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM340 683v77c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-77c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198V264c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v221c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8s0 .1.1.1a36.18 36.18 0 0 1 5.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8 0 0 0 .1-.1.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7zM620 539v221c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V539c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198v-77c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v77c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8v.1a36.18 36.18 0 0 1 5.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8v.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7z"/></svg></div><div class="settings-folder__name" style="font-size: 1.3em;">Онлайн</div></div>'

    /* Регулярно вызываемые функции */
	Lampa.Storage.set('needReboot', false);
	Lampa.Storage.set('needRebootSettingExit', false);

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
                var { plugins, reklama, vip } = data;
                storeStart(plugins);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    /* Создание магазина и его меню */
    function storeStart(plugins) {
        /* Abros Store */
        Lampa.SettingsApi.addComponent({
            component: 'abros',
            name: 'Abros Store',
            icon: icon_abros
        });

        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name == 'main') {
                setTimeout(function() {
                    $('div[data-component="abros_online"]').remove();
                }, 0);
                $("#hideInstall").remove();
                /* Сдвигаем раздел выше */
                setTimeout(function() {
                    $('div[data-component=plugins]').before($('div[data-component=abros]'))
                }, 30)
            }
        });

        /* Онлайн */
        Lampa.SettingsApi.addParam({
            component: 'abros',
            param: {
                name: 'abros_online',
                type: 'static',
                default: true
            },
            field: {
                name: icon_online
            },
            onRender: function(item) {
                item.on('hover:enter', function () {
                    Lampa.Settings.create('abros_online');
                    Lampa.Controller.enabled().controller.back = function(){
                        Lampa.Settings.create('abros');
                    }
                });
            }
        });

        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name == 'main') {
                Lampa.SettingsApi.addComponent({
                    component: 'abros_online',
                    name: 'Онлайн'
                });
            }
        });

        /* ТВ */
        Lampa.SettingsApi.addParam({
            component: 'abros',
            param: {
                name: 'abros_tv',
                type: 'static',
                default: true
            },
            field: {
                name: icon_tv
            },
            onRender: function(item) {
                item.on('hover:enter', function () {
                    Lampa.Settings.create('abros_tv');
                    Lampa.Controller.enabled().controller.back = function(){
                        Lampa.Settings.create('abros');
                    }
                });
            }
        });

        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name == 'main') {
                Lampa.SettingsApi.addComponent({
                    component: 'abros_tv',
                    name: 'ТВ'
                });
            }
        });

        /* Управление */
        Lampa.SettingsApi.addParam({
            component: 'abros',
            param: {
                name: 'abros_control',
                type: 'static',
                default: true
            },
            field: {
                name: icon_control
            },
            onRender: function(item) {
                item.on('hover:enter', function () {
                    Lampa.Settings.create('abros_control');
                    Lampa.Controller.enabled().controller.back = function(){
                        Lampa.Settings.create('abros');
                    }
                });
            }
        });

        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name == 'main') {
                Lampa.SettingsApi.addComponent({
                    component: 'abros_control',
                    name: 'Управление'
                });
            }
        });

        /* Плагины */
        function addPluginSettings(plugin) {
            Lampa.SettingsApi.addParam({
                component: plugin.component,
                param: {
                    name: plugin.field.name,
                    type: 'select',
                    values: {
                        1: 'Установить',
                        2: 'Удалить',
                    },
                    //default: '1',
                },
                field: {
                    name: plugin.field.name,
                    description: plugin.field.description,
                },
                onChange: function(value) {
                    if (value == '1') {
                        itemON(plugin.field.link, plugin.field.name, plugin.field.author, plugin.field.name);
                    }
                    if (value == '2') {
                        var pluginToRemoveUrl = plugin.field.link;
                        deletePlugin(pluginToRemoveUrl);
                    }
                },
                onRender: function (item) {
                    $('.settings-param__name', item).css('color','f3d900');
                    hideInstall();
                    var myResult = checkPlugin(plugin.field.link);
                    setTimeout(function() {	
                        $('div[data-name="' + plugin.field.name + '"]').append('<div class="settings-param__status one"></div>');
                        if (myResult) {
                            $('div[data-name="' + plugin.field.name + '"]').find('.settings-param__status').removeClass('active error wait').addClass('active');
                        } else {
                            $('div[data-name="' + plugin.field.name + '"]').find('.settings-param__status').removeClass('active error wait').addClass('error');
                        }
                    }, 100);
                }
            });
        }
        
        // Проходимся по каждому плагину и добавляем его настройки
        plugins.forEach(addPluginSettings);
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
