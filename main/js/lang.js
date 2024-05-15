// Функция для проверки языка браузера
const checkLanguage = () => {
    const browserLanguage = navigator.language.substring(0, 2);
    const supportedLanguages = ["EN", "RU", "PL"];
    return supportedLanguages.includes(browserLanguage) ? browserLanguage : "EN";
};

// Функция для установки языка в localStorage
const setLanguage = language => {
    localStorage.setItem("Language", language);
};

// Функция для получения языка из localStorage
const getLanguage = () => {
    return localStorage.getItem("Language");
};

// Функция для перезагрузки страницы
const reloadPage = () => {
    window.location.reload();
};

// Функция для обработки выбора языка
const handleLanguageSelection = newLanguage => {
    setLanguage(newLanguage);
    document.querySelectorAll('.lang-sub .button').forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('lang') === newLanguage) {
            button.classList.add('active');
        }
    });
    reloadPage();
};

// Функция для отображения уведомления о смене языка
const showLanguageChangeNotification = currentLanguage => {
    const notifications = {
        'EN': "Language has been changed. Enjoy browsing!",
        'RU': "Язык был изменен. Приятного просмотра!",
        'PL': "Język został zmieniony. Miłego przeglądania!"
    };
    abrosnoti.create("lang", currentLanguage, notifications[currentLanguage], 3);
};

// Основной код
document.addEventListener('DOMContentLoaded', () => {
    // Проверяем язык и устанавливаем его, если он не установлен
    const savedLanguage = getLanguage() || checkLanguage();
    setLanguage(savedLanguage);

    // Обработчик событий для кнопок выбора языка
    document.querySelectorAll('.lang-sub .button').forEach(button => {
        button.addEventListener('click', () => {
            const newLanguage = button.getAttribute('lang');
            handleLanguageSelection(newLanguage);
        });
        if (button.getAttribute('lang') === savedLanguage) {
            button.classList.add('active');
        }
    });

    // Показываем уведомление о смене языка
    setTimeout(() => {
        const previousLanguage = localStorage.getItem("LanguagePrevious");
        if (previousLanguage !== savedLanguage) {
            showLanguageChangeNotification(savedLanguage);
            localStorage.setItem("LanguagePrevious", savedLanguage);
        }
    }, 1000);
});
