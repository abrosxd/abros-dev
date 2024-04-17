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
});
