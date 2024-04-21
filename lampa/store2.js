/*!
 * Abros Store v1.0.1a
 * (c) 2024-2024
 * by Daniel Abros
 * Site → https://abros.me
 * Telegram → https://t.me/abrosxd
 * Магазин сторонних плагинов для Lampa
 */

$(document).ready(function () {
    'use strict';

    /* Домен-регулятор */
    const domain = 'https://abros.me';

    /* Иконки */

    /* Регулярно вызываемые функции */
    Lampa.Storage.set('needReboot', false);
    Lampa.Storage.set('needRebootSettingExit', false);

    /* Подключение карусели */
    loadScript(`${domain}/main/js/slick.min.js`);
    loadCSS(`${domain}/main/css/slick.css`);
    loadCSS(`${domain}/main/css/slick-theme.css`);
    
    function loadScript(src) {
        $('head').append($('<script>').attr('src', src));
    }

    function loadCSS(href) {
        $('head').append($('<link>').attr({rel: 'stylesheet', href: href}));
    }

    /* Загрузка данных */
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
                checkVIP(vip, reklama);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    /* Запрос на перезагрузку в модальном окне */
    function showReload(reloadText){
        Lampa.Modal.open({
            title: '',
            align: 'center',
            zIndex: 300,
            html: $('<div class="about">' + reloadText + '</div>'),
            buttons: [{
                name: 'Нет',
                onSelect: function onSelect() {
                    Lampa.Modal.close();
                    $('.modal').remove();
                    Lampa.Controller.toggle('settings_component');
                }
            }, {
                name: 'Да',
                onSelect: function onSelect() {
                    window.location.reload();
                }
            }]
        });
    }

    /* Следим за настройками */
    function settingsWatch() {
        /* проверяем флаг перезагрузки и ждём выхода из настроек */
        if (Lampa.Storage.get('needRebootSettingExit')) {
            var intervalSettings = setInterval(function() {
                var elementSettings = $('#app > div.settings > div.settings__content.layer--height > div.settings__body > div');
                if (!elementSettings.length > 0){
                    clearInterval(intervalSettings);
                    showReload('Для полного удаления плагина перезагрузите приложение!');
                }
            }, 1000)
        }
    }

    function itemON(sourceURL, sourceName, sourceAuthor, itemName) {
        if ($('DIV[data-name="' + itemName + '"]').find('.settings-param__status').hasClass('active')) {
            Lampa.Noty.show("Плагин уже установлен!");
        } else {
            // Если перезагрузки не требуется - контроль после удаления плагинов
            if (!Lampa.Storage.get('needReboot')) {
                // Получаем список плагинов
                var pluginsArray = Lampa.Storage.get('plugins');
                // Добавляем новый элемент к списку
                pluginsArray.push({
                    "author": sourceAuthor,
                    "url": sourceURL,
                    "name": sourceName,
                    "status": 1
                });
                // Внедряем изменённый список в лампу
                Lampa.Storage.set('plugins', pluginsArray);
                // Делаем инъекцию скрипта для немедленной работы
                var script = document.createElement ('script');
                script.src = sourceURL;
                document.getElementsByTagName ('head')[0].appendChild (script);
                setTimeout(function() {
                    Lampa.Settings.update();
                    Lampa.Noty.show("Плагин " + sourceName + " успешно установлен")
                }, 300);
            }
        }
    }	

    function hideInstall() {
        $("#hideInstall").remove();
        $('body').append('<div id="hideInstall"><style>div.settings-param__value{opacity: 0%!important;display: none;}</style><div>')
    }

    function deletePlugin(pluginToRemoveUrl) {
        var plugins = Lampa.Storage.get('plugins');
        var updatedPlugins = plugins.filter(function(obj) {return obj.url !== pluginToRemoveUrl});
        Lampa.Storage.set('plugins', updatedPlugins);
        Lampa.Settings.update();
        Lampa.Noty.show("Плагин успешно удален");
        Lampa.Storage.set('needRebootSettingExit', true);
        settingsWatch();
    };

    function checkPlugin(pluginToCheck) {
        var plugins = Lampa.Storage.get('plugins');
        var checkResult = plugins.filter(function(obj) {return obj.url == pluginToCheck});
        console.log('search', 'checkResult: ' + JSON.stringify(checkResult));
        console.log('search', 'pluginToCheck: ' + pluginToCheck);
        if (JSON.stringify(checkResult) !== '[]') {return true} else {return false}
    };

    /* Проверяем VIP */
    function checkVIP(vip, reklama) {
        const userDataJSON = localStorage.getItem('account_user');
        if (!userDataJSON) {
            addADS(reklama);
            addAccount();
            console.log('user found:', userDataJSON);
            return;
        }
        const userData = vip;
        if (!userData || !userData.email) {
            addADS(reklama);
            addAccount();
            console.log('VIP user found:', userData);
            return;
        }
        const currentDate = new Date();
        const vipUser = vip.find(item => {
            const [day, month, year] = item.subscribe.split('.');
            const subscribeDate = new Date(`${month}/${day}/${year}`);
            return item.email === userData.email && subscribeDate > currentDate;
        });
        if (vipUser) {
            console.log('VIP user found:', vipUser);
            addAccount(vipUser);
        } else {
            console.log('Regular user.');
            addADS(reklama);
            addAccount();
        }
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
                    $('div[data-component="abros_tv"]').remove();
                    $('div[data-component="abros_control"]').remove();
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
                    name: plugin.param.name,
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
                        itemON(plugin.field.link, plugin.field.name, plugin.field.author, plugin.param.name);
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
                        $('div[data-name="' + plugin.param.name + '"]').append('<div class="settings-param__status one"></div>');
                        if (myResult) {
                            $('div[data-name="' + plugin.param.name + '"]').find('.settings-param__status').removeClass('active error wait').addClass('active');
                        } else {
                            $('div[data-name="' + plugin.param.name + '"]').find('.settings-param__status').removeClass('active error wait').addClass('error');
                        }
                    }, 100);
                }
            });
        }
        plugins.forEach(addPluginSettings);
    }

    /* Аккаунт */
    function addAccount(vipUser) {
        if (vipUser) {
            const [day, month, year] = vipUser.subscribe.split('.');
            const subscribeDate = new Date(`${month}/${day}/${year}`);
            const remainingDays = Math.ceil((subscribeDate - new Date()) / (1000 * 60 * 60 * 24));
            Lampa.SettingsApi.addParam({
                component: 'abros',
                param: {
                    name: 'abrosaccount',
                    type: 'title'
                },
                field: {
                    name: `
                    <div class="ad-server" style="margin: 0em 0em;">
                        <div class="ad-server__text">Поздравляем! Ваш статус Vip активирован. 💎 VIP ещё ${formatDays(remainingDays)}</div>
                        <img src="https://lampa.stream/group.jpg" class="ad-server__qr">
                        <div class="ad-server__label">@modssmy_bot</div>
                    </div>`
                },
                onRender: function (item) {
                    setTimeout(function() {
                        $('.settings-param-title').insertAfter($('.settings-param').first())
                    },0);
                }
            });
        } else {
            Lampa.SettingsApi.addParam({
                component: 'abros',
                param: {
                    name: 'abrosaccount',
                    type: 'title'
                },
                field: {
                    name: `
                    <div class="ad-server" style="margin: 0em 0em;">
                        <div class="ad-server__text">Для активации <b style="color: #ffd402;">Vip</b> статуса перейдите в телеграм бот</div>
                        <img src="https://lampa.stream/group.jpg" class="ad-server__qr">
                        <div class="ad-server__label">@modssmy_bot</div>
                    </div>`
                },
                onRender: function (item) {
                    setTimeout(function() {
                        $('.settings-param-title').insertBefore($('.settings-param').first())
                    },0);
                }
            });
        }
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

    /* Реклама */
    function addADS(reklama) {
        $('.menu').each(function() {
            let menuCase = $(this);
            let adsbody = menuCase.find('#adsbody');
            if (!adsbody.length) {
                const ADSHTML = `
                    <div style="height: max-content; margin: 0 0 1em 0.6em;">
                        <div style="margin-bottom: 5px;">
                            <div style="font-size: 1.3em;">Реклама</div>
                        </div>
                        <div id="adsbody"></div>
                    </div>`;
                menuCase.prepend(ADSHTML);
                adsbody = menuCase.find('#adsbody');
            }
    
            reklama.forEach(item => {
                const cardHTML = `
                    <div>
                        <img style="border-radius: 1em;" src="${item.image}">
                        <div style="font-size: 0.7em; position: absolute; bottom: 0; margin: 4px; width: 14%; color:${item.colortext}">${item.text}</div>
                    </div>`;
                adsbody.append(cardHTML);
            });
    
            if (adsbody.length) {
                adsbody.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 10000,
                    arrows: false,
                });
            }
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
});
