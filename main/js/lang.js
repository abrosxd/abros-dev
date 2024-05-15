function checkLanguage() {
    var browserLanguage = navigator.language.substring(0, 2);
    if (browserLanguage === "EN" || browserLanguage === "RU" || browserLanguage === "PL") {
        return browserLanguage;
    }
    return "EN";
}

function setLanguage(language) {
    localStorage.setItem("Language", language);
}

function getLanguage() {
    return localStorage.getItem("Language");
}

function eraseLanguage() {
    localStorage.removeItem("Language");
}

function reloadPage() {
    window.location.reload();
}

var savedLanguage = getLanguage();

if (!savedLanguage) {
    setLanguage(checkLanguage());
}

var currentLanguage = savedLanguage;

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.lang-sub .button');
    
    buttons.forEach(function(item) {
        if (item.getAttribute('lang') === currentLanguage) {
            item.classList.add('active');
        }
        item.addEventListener('click', function() {
            var newLanguage = this.getAttribute('lang');
            setLanguage(newLanguage);
            buttons.forEach(function(button) {
                button.classList.remove('active');
            });
            this.classList.add('active');
            reloadPage();
        });
    });

    setTimeout(function() {
        function getPreviousLanguage() {
            return localStorage.getItem("LanguagePrevious");
        }
        function setPreviousLanguage(language) {
            localStorage.setItem("LanguagePrevious", language);
        }
        var previousLanguage = getPreviousLanguage();
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
            setPreviousLanguage(currentLanguage)
        }
    }, 1000);
});


