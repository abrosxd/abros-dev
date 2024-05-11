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

    setTimeout(function() {
        function getPreviousLanguageFromLocalStorage() {
            return localStorage.getItem("AbrosLanguagePrevious");
        }
        function setPreviousLanguageFromLocalStorage(language) {
            localStorage.setItem("AbrosLanguagePrevious", language);
        }
        var previousLanguage = getPreviousLanguageFromLocalStorage();
        if (previousLanguage !== currentLanguage) {
            switch (currentLanguage) {
                case 'EN':
                    abrosnoti.create("lang", "English", "Language has been changed. Enjoy browsing!", 3);
                    break;
                case 'RU':
                    abrosnoti.create("lang", "Русский", "Язык был изменен. Приятного просмотра!", 3);
                    break;
                case 'PL':
                    abrosnoti.create("lang", "Polski", "Język został zmieniony. Miłego przeglądania!", 3);
                    break;
                default:
                    break;
            }
            setPreviousLanguageFromLocalStorage(currentLanguage)
        }
    }, 1000);
});


