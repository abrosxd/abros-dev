
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

if (!savedLanguage) {
    setCookie("currentLanguage", currentLanguage, 30);
}
        
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
        const menuItems = document.querySelectorAll('.menu .section');
    
        menuItems.forEach((menuItem, index) => {
            const menuItemKey = Object.keys(menu[index])[0];
            const russianText = menu[index][menuItemKey].RU;
            menuItem.querySelector('.button').textContent = russianText;
        });
    }
    
    replaceTextWithRussian();
});