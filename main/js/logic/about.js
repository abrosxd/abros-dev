fetch('main/txt/about.json')
  .then(response => response.json())
  .then(data => {
    // Обновление времени
    const updateDateTime = () => {
      const nowInWarsaw = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Warsaw"}));
      const daysOfWeek = data.time.days[currentLanguage];
      const currentDay = daysOfWeek[nowInWarsaw.getDay()];
      const currentDate = `${nowInWarsaw.getDate().toString().padStart(2, '0')}/${(nowInWarsaw.getMonth() + 1).toString().padStart(2, '0')}`;
      const currentTime = nowInWarsaw.toLocaleTimeString('en-US', { hour12: false });
      document.getElementById('currentDay').innerText = currentDay;
      document.getElementById('currentDate').innerText = currentDate;
      document.getElementById('currentTime').innerText = currentTime;
    };
    updateDateTime();
    setInterval(updateDateTime, 1000);
    // Обработчик копирования адреса
    const copyAddress = (language) => () => {
      const addressInput = document.getElementById('coinAddress');
      addressInput.select();
      document.execCommand('copy');
      const copyButton = document.querySelector('.tpaybutton');
      copyButton.textContent = data.pay.buttonclick[language];
      copyButton.classList.add('copy-success');
      setTimeout(() => {
        copyButton.textContent = data.pay.button[language];
        copyButton.classList.remove('copy-success');
      }, 2000);
    };
    document.getElementById('copyAddressButton').addEventListener('click', copyAddress(currentLanguage));
    // Смена языка "About"
    const changeabout = (language) => {
      const elements = {
        '.thello': 'hello',
        '.ttime': 'time',
        '.tpay': 'pay',
        '.tpaybutton': 'button',
        '.treviews': 'reviews',
        '.tfaq': 'faq',
        '.tgallery': 'gallery',
        '.tstack': 'stack',
        '.tfacts': 'randomfacts.title',
        '.tfactsbutton': 'randomfacts.button',
        '.tsoft': 'tools.soft',
        '.tmaterials': 'tools.materials'
      };
      for (const selector in elements) {
        const element = document.querySelector(selector);
        if (element) {
          const textKey = elements[selector].split('.').reduce((obj, key) => obj[key], data);
          element.textContent = textKey ? textKey[language] : '';
        }
      }
    };
    changeabout(currentLanguage);
  });
