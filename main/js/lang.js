
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
        
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
        
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}
        
function reloadPage() {
    window.location.reload();
}
        
var savedLanguage = getCookie("currentLanguage");
        
var currentLanguage = savedLanguage || "EN";
        
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.submenu .button').forEach(function(item) {
        item.addEventListener('click', function() {
            var currentLanguage = this.getAttribute('lang');
            setCookie("currentLanguage", currentLanguage, 30);
            reloadPage();
        });
    });

    function replaceTextWithRussian() {
        // Получаем все элементы меню
        const menuItems = document.querySelectorAll('.menu .section');
    
        // Проходимся по каждому элементу меню
        menuItems.forEach((menuItem, index) => {
            // Получаем ключ объекта меню из массива menu
            const menuItemKey = Object.keys(menu[index])[0];
            // Получаем русский текст из объекта меню
            const russianText = menu[index][menuItemKey].RU;
            // Устанавливаем русский текст в элемент меню
            menuItem.querySelector('.button').textContent = russianText;
        });
    }
    
    // Вызываем функцию для замены текста на русский язык
    replaceTextWithRussian();
});