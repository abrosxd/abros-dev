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
    var previousLanguage = getLanguageFromLocalStorage();
    window.location.reload();
    var currentLanguage = getLanguageFromLocalStorage();
    if (previousLanguage !== currentLanguage) {
        var languageName;
        switch (currentLanguage) {
            case "EN":
                languageName = "English";
                break;
            case "RU":
                languageName = "Русский";
                break;
            // Add cases for other languages as needed
            default:
                languageName = currentLanguage;
                break;
        }
        abrosnoti.create("lang", languageName, "Язык был изменен. Приятного просмотра", 2);
    }
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

