function setLanguageInLocalStorage(language) {
    localStorage.setItem("Language", language);
}

function getLanguageFromLocalStorage() {
    return localStorage.getItem("Language");
}

function eraseLanguageFromLocalStorage() {
    localStorage.removeItem("Language");
}

function reloadPage() {
    window.location.reload();
}

var savedLanguage = getLanguageFromLocalStorage();

if (!savedLanguage) {
    setLanguageInLocalStorage("EN");
}

var currentLanguage = savedLanguage || "EN";

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.submenu .button').forEach(function(item) {
        item.addEventListener('click', function() {
            var currentLanguage = this.getAttribute('lang');
            setLanguageInLocalStorage(currentLanguage);
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
