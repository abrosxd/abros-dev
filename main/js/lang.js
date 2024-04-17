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
    var buttons = document.querySelectorAll('.lang-sub .button');
    
    buttons.forEach(function(item) {
        if (item.getAttribute('lang') === currentLanguage) {
            item.classList.add('active');
        }
        item.addEventListener('click', function() {
            var newLanguage = this.getAttribute('lang');
            setLanguageInLocalStorage(newLanguage);
            buttons.forEach(function(button) {
                button.classList.remove('active');
            });
            this.classList.add('active');
            reloadPage();
        });
    });
});

