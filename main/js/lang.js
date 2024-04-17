function setLanguageInLocalStorage(language) {
    localStorage.setItem("AbrosLanguage", language);
}

function getLanguageFromLocalStorage() {
    return localStorage.getItem("AbrosLanguage");
}

function eraseLanguageFromLocalStorage() {
    localStorage.removeItem("AbrosLanguage");
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
            var newLanguage = this.getAttribute('lang'); // Используйте другое имя переменной, чтобы избежать конфликта
            setLanguageInLocalStorage(newLanguage);
            reloadPage();
        });
    });
});
