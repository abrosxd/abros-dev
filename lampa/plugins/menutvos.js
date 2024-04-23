(function () {
    'use strict';

    /* Загрузка данных */
    function startTVOS() {
        $('.head__split').remove();
        $('<style>.head__time.focus, .head__time.hover { background-color: #fff; color: #000; }</style>').appendTo('head');
    }

    if (window.appready) {
        startTVOS();
    } else {
        Lampa.Listener.follow('app', e => {
            if (e.type === 'ready') {
                startTVOS();
            }
        });
    }
})();