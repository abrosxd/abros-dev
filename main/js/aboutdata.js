const notes = [
  
  {
    link: "#",
    title: {
      RU: "Новости",
      EN: "News",
      PL: "Aktualności",
    },
    text: {
      RU: "Ну то, что вы видите этот сайт - можно считать новостью 🤗",
      EN: "Well, what you see on this site can be considered news 🤗",
      PL: "Cóż, to, co widzisz na tej stronie, można uznać za aktualności 🤗",
    },
    color: "rgb(72, 154, 255)",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTM0cHlobXc1aDVkN2ptaWhlODM0eXV0cW1tdXBmbXdza3VlMjV2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kfqjGTVX3YE6Y/giphy.gif",
  },

  {
    link: "#",
    title: {
      RU: "Курсы",
      EN: "Courses",
      PL: "Kursy",
    },
    text: {
      RU: "Ничего нет - расслабтесь 😅",
      EN: "Nothing here - relax 😅",
      PL: "Nic tu nie ma - zrelaksuj się 😅",
    },
    color: "azure",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTkxcXFtajBnZnFrNzUzdmhqdWU5anUyNnB0aHVzdHpuZ25oNWU5ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SwOyrG5xAmOI1pv0Rf/giphy.gif",
  },

  {
    link: "#",
    title: {
      RU: "Крипта",
      EN: "Crypto",
      PL: "Kryptowaluty",
    },
    text: {
      RU: "Близится халвинг. Ваши прогнозы? 🤔",
      EN: "Halving is approaching. What are your predictions? 🤔",
      PL: "Zbliża się halving. Jakie są Twoje przewidywania? 🤔",
    },
    color: "rgb(110, 68, 0)",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGRza3pxNW0zcmV1dHh1NXQ5c21oNm9paXJ2aXQxcXZybzQzaGhqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oNFP9kltPi7fp8TUAV/giphy.gif",
  },

];


const faq = [
  
  {
    title: {
      RU: "Тильда — хорошее решение?",
      EN: "Is Tilda a Good Solution?",
      PL: "Czy Tilda to dobre rozwiązanie?",
    },
    text: {
      RU: "Тильда — отличный выбор для небольших проектов или для больших, но с ограниченным бюджетом. Почему именно так? Все дело в том, что Тильда является конструктором веб-сайтов. Благодаря гибкости платформы после создания сайта вы сможете даже сами корректировать тексты и изменять изображения. Но придется принять тот факт, что для использования Тильды вам придется подписывать подписки или покупать их и оплачивать дополнительное развитие. В любом случае это все равно дешевле, чем создание сайта с нуля.",
      EN: "Tilda is an excellent choice for small projects or for larger ones on a budget. Why is that? It's all because Tilda is a website builder. Thanks to the flexibility of the platform after creating the site, you can even adjust texts and change images yourself. But you'll have to accept the fact that you'll need to subscribe or purchase subscriptions and pay for additional development. In any case, it's still cheaper than creating a site from scratch.",
      PL: "Tilda to doskonały wybór dla małych projektów lub większych, ale z ograniczonym budżetem. Dlaczego tak myślimy? To wszystko za sprawą Tildy, która jest narzędziem do tworzenia stron internetowych. Dzięki elastyczności platformy po stworzeniu strony, możesz nawet samodzielnie dostosować teksty i zmieniać obrazy. Ale musisz się liczyć z faktem, że będzie to wiązać się z subskrypcjami lub ich zakupem i płaceniem za dodatkowy rozwój. W każdym przypadku jest to nadal tańsze niż tworzenie strony od zera.",
    },
  },

  {
    title: {
      RU: "Почему такая цена?",
      EN: "Why Such Price?",
      PL: "Dlaczego taka cena?",
    },
    text: {
      RU: "Создать сайт, написать модификацию, улучшить модификацию — это не так просто и быстро, как кажется. Процесс разработки включает в себя множество скрытых шагов, которые непосредственно влияют на результат. Разработка - это тонкий и трудоемкий процесс. В ходе работы часто возникают правки, увеличивающие сложность и время работы над проектом. Это длительная работа, которая требует определенных навыков. Ради этого я постоянно обучаюсь, поэтому стоимость разработки не может быть низкой.",
      EN: "Creating a website, writing modifications, improving modifications — it's not as simple and quick as it may seem. The development process includes many hidden steps that directly affect the result. Development is a delicate and laborious process. During the work, there are often edits that increase the complexity and time spent on the project. It's a lengthy job that requires specific skills. That's why I constantly educate myself, so the cost of development cannot be low.",
      PL: "Tworzenie strony internetowej, pisania modyfikacji, udoskonalanie modyfikacji — to nie jest takie proste i szybkie, jak się może wydawać. Proces rozwoju obejmuje wiele ukrytych kroków, które mają bezpośredni wpływ na wynik. Rozwój to delikatny i pracochłonny proces. W trakcie pracy często pojawiają się edycje, zwiększające złożoność i czas pracy nad projektem. To długa praca, która wymaga określonych umiejętności. Dlatego stale się dokształcam, dlatego koszt rozwoju nie może być niski.",
    },
  },

  {
    title: {
      RU: "В чем отличие правок от редакций?",
      EN: "What's the Difference Between Edits and Revisions?",
      PL: "Jaka jest różnica między edycjami a rewizjami?",
    },
    text: {
      RU: "Правки - это когда вы просите внести мелкие изменения: поменять цвет, передвинуть кнопку, скруглить края...<br><br>Редакции - это когда вы просите внести крупные изменения: поменять функционал, изменить дизайн блока, сделать новый блок...",
      EN: "Edits are when you ask for minor changes: change the color, move a button, round the edges...<br><br>Revisions are when you ask for major changes: change the functionality, modify the design of a block, create a new block...",
      PL: "Edycje to, gdy prosisz o drobne zmiany: zmień kolor, przesuń przycisk, zaokrągl krawędzie...<br><br>Rewizje to, gdy prosisz o większe zmiany: zmień funkcjonalność, zmodyfikuj projekt bloku, stwórz nowy blok...",
    },
  },

];

const facts = [
  
  {
    img: "https://avatars.githubusercontent.com/u/50206778?s=200&v=4",
    text: {
      RU: "Если кто-то из вас когда-то жаловался, что Airtable платный. То я нашел для вас Nocodb, обязательно погуглите!",
      EN: "If anyone of you has ever complained that Airtable is paid. Then I found Nocodb for you, be sure to google it!",
      PL: "Jeśli ktoś z Was kiedyś skarżył się, że Airtable jest płatny. Znalazłem dla ciebie Nocodb, koniecznie go sprawdź!",
    },
  },

  {
    img: "https://deusnotam.github.io/site/img/logo.jpeg",
    text: {
      RU: "Боитесь, что заказчик не оплатит? А может хотите защититься от этого на всякий случай? Тогда обязательно загляните в проект DEUS.",
      EN: "Worried that the client won't pay? Or maybe you want to protect yourself from this just in case? Then be sure to check out the DEUS project.",
      PL: "Obawiasz się, że klient nie zapłaci? A może chcesz się przed tym zabezpieczyć na wszelki wypadek? W takim razie koniecznie sprawdź projekt DEUS.",
    },
  },

  {
    img: "main/img/facts/music.gif",
    text: {
      RU: "А вы знали, что по сайту можно путешествовать с приятной музыкой? Просто кликните по иконке с волной 😉",
      EN: "Did you know that you can browse the site with nice music? Just click on the wave icon 😉",
      PL: "Czy wiesz, że możesz przeglądać stronę z przyjemną muzyką? Wystarczy kliknąć ikonę fali 😉",
    },
  },

];


const reviews = [
  
  {
    img: "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png",
    name: {
      RU: "Догикоин",
      EN: "Dogecoin",
      PL: "Dogecoin",
    },
    text: {
      RU: "Советую вам оставить отзыв, это покажет мастерство хозяина",
      EN: "I advise you to leave a review, it will show the host's skill",
      PL: "Radzę zostawić recenzję, pokaże to umiejętności gospodarza",
    },
  },

];


const soft = [
  
  {
    title: "Visual Studio Code",
    href: "https://code.visualstudio.com",
    img: "https://yt3.googleusercontent.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj",
    text: {
      RU: "Visual Studio Code — редактор исходного кода, разработанный Microsoft для Windows, Linux и macOS.",
      EN: "Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux, and macOS.",
      PL: "Visual Studio Code to edytor kodu źródłowego opracowany przez Microsoft dla systemów Windows, Linux i macOS.",
    },
  },

  {
    title: "Adobe Creative Cloud",
    href: "https://creativecloud.adobe.com",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
    text: {
      RU: "Photoshop, Illustrator, Premiere Pro, After Effects и многое другое в одной подписке Adobe Creative Cloud.",
      EN: "Photoshop, Illustrator, Premiere Pro, After Effects, and much more in one Adobe Creative Cloud subscription.",
      PL: "Photoshop, Illustrator, Premiere Pro, After Effects i wiele więcej w jednej subskrypcji Adobe Creative Cloud.",
    },
  },

  {
    title: "ICONS 8",
    href: "https://icons8.com",
    img: "https://maxst.icons8.com/vue-static/icon/menu/logo.svg",
    text: {
      RU: "Сайт с иконками, иллюстрациями, фотографиями и 3D моделями для ваших проектов.",
      EN: "A website with icons, illustrations, photos, and 3D models for your projects.",
      PL: "Strona z ikonami, ilustracjami, zdjęciami i modelami 3D dla Twoich projektów.",
    },
  },

];


const lessons = [
  
  {
    title: "Dogecoin",
    href: "#",
    img: "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png",
    text: {
      RU: "Скоро тут появятся уроки, а пока вот вам Dogecoin.",
      EN: "Lessons will appear here soon, but for now, here's Dogecoin for you.",
      PL: "Lekcje pojawią się tutaj wkrótce, ale na razie masz Dogecoin.",
    },
  },

];


const gallery = [
  
  {
    img: "main/img/gallery/1.jpeg",
  },

  {
    img: "main/img/gallery/2.jpeg",
  },

  {
    img: "main/img/gallery/3.png",
  },

  {
    img: "main/img/gallery/4.png",
  },

  {
    img: "main/img/gallery/5.png",
  },

];

const stack = [
  
  {
    title: "Tilda",
    color: "#000000",
    bgcolor: "#ffb20080",
  },

  {
    title: "VS Code",
    color: "#2532eb",
    bgcolor: "#ffffff80",
  },

  {
    title: "Figma",
    color: "#25eb8f",
    bgcolor: "#00000080",
  },

  {
    title: "NocoDB",
    color: "#ffffff",
    bgcolor: "#0015ff80",
  },

  {
    title: "HTML",
    color: "#ffffff",
    bgcolor: "#ff590080",
  },

  {
    title: "JavaScript",
    color: "#000000",
    bgcolor: "#f6ff0080",
  },

  {
    title: "CSS",
    color: "#ffffff",
    bgcolor: "#0015ff80",
  },

  {
    title: "Photoshop",
    color: "#32AAFF",
    bgcolor: "#001E3680",
  },

  {
    title: "Illustrator",
    color: "#FF9B00",
    bgcolor: "#32000080",
  },


];

const coinData = {
  BTC: {
    text: {
      RU: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(255, 147, 0, 60%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Bitcoin(BTC)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Send only assets <span style="color: #fff; background-color: rgb(255, 147, 0, 60%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Bitcoin(BTC)</span> to this address. Sending other assets will result in permanent loss.',
      PL: 'Wyślij tylko aktywa <span style="color: #fff; background-color: rgb(255, 147, 0, 60%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Bitcoin(BTC)</span> na ten adres. Wysłanie innych aktywów spowoduje trwałą utratę.',
    },
    address: 'bc1qrpmcy4zz7g6rtfxka8j4nk3yka72kmacvmam0a',
  },
  ETH: {
    text: {
      RU: 'Отправляйте только <span style="color: #fff; background-color: rgb(141, 176, 255, 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Ethereum(ETH) или активы в сети Ethereum(ERC20)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Send only <span style="color: #fff; background-color: rgb(141, 176, 255, 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Ethereum(ETH) or assets on the Ethereum(ERC20) network</span> to this address. Sending other assets will result in permanent loss.',
      PL: 'Wyślij tylko <span style="color: #fff; background-color: rgb(141, 176, 255, 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Ethereum(ETH) lub aktywa na sieci Ethereum(ERC20)</span> na ten adres. Wysłanie innych aktywów spowoduje trwałą utratę.',
    },
    address: '0x96800af5023619eA338551a8E20b612C8Dd6192C',
  },
  XRP: {
    text: {
      RU: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(0, 0, 0, 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">XRP(XRP)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Send only assets <span style="color: #fff; background-color: rgb(0, 0, 0, 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">XRP(XRP)</span> to this address. Sending other assets will result in permanent loss.',
      PL: 'Wyślij tylko aktywa <span style="color: #fff; background-color: rgb(0, 0, 0, 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">XRP(XRP)</span> na ten adres. Wysłanie innych aktywów spowoduje trwałą utratę.',
    },
    address: 'raHW9xPXB3YiQqkraR2DT1oH8vUr7X5EQT',
  },
  TON: {
    text: {
      RU: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(0, 78, 255, 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">TON(TON)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Send only assets <span style="color: #fff; background-color: rgb(0, 78, 255, 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">TON(TON)</span> to this address. Sending other assets will result in permanent loss.',
      PL: 'Wyślij tylko aktywa <span style="color: #fff; background-color: rgb(0, 78, 255, 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">TON(TON)</span> na ten adres. Wysłanie innych aktywów spowoduje trwałą utratę.',
    },
    address: 'EQAmDD_sRSt-LuVtw9wBfxq8v7eCH-XP3oA8wQuQ5s2EN_wB',
  },
  TRX: {
    text: {
      RU: 'Отправляйте только <span style="color: #fff; background-color: rgba(255, 0, 0, 0.6); border-radius: 10px; padding: 0 6px; font-weight: 600;">Tron(TRX) или активы в сети Tron(TRС20)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Send only <span style="color: #fff; background-color: rgba(255, 0, 0, 0.6); border-radius: 10px; padding: 0 6px; font-weight: 600;">Tron(TRX) or assets on the Tron(TRС20) network</span> to this address. Sending other assets will result in permanent loss.',
      PL: 'Wyślij tylko <span style="color: #fff; background-color: rgba(255, 0, 0, 0.6); border-radius: 10px; padding: 0 6px; font-weight: 600;">Tron (TRX) lub aktywa na sieci Tron (TRC20)</span> na ten adres. Wysłanie innych aktywów spowoduje trwałą utratę.',
    },
    address: 'TRD7vypAmXBP5qmXeejGUMXjgUMAMuS3mY',
  },
  SOL: {
    text: {
      RU: 'Отправляйте только <span style="color: #acffec; background-color: rgba(171, 0, 255, 0.5); border-radius: 10px; padding: 0 6px; font-weight: 600;">Solana(SOL) или активы в сети Solana(SPL)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Send only <span style="color: #acffec; background-color: rgba(171, 0, 255, 0.5); border-radius: 10px; padding: 0 6px; font-weight: 600;">Solana(SOL) or assets on the Solana(SPL) network</span> to this address. Sending other assets will result in permanent loss.',
      PL: 'Wyślij tylko <span style="color: #acffec; background-color: rgba(171, 0, 255, 0.5); border-radius: 10px; padding: 0 6px; font-weight: 600;">Solana (SOL) lub aktywa na sieci Solana (SPL)</span> na ten adres. Wysłanie innych aktywów spowoduje trwałą utratę.',
    },
    address: '8y1QfdDF4XGEWNM5Aj7N19c93MT31kjn3Cu3p5V7YhnX',
  },
  LTC: {
    text: {
      RU: 'Отправляйте только активы <span style="color: #fff; background-color: rgba(0, 47, 178, 0.5); border-radius: 10px; padding: 0 6px; font-weight: 600;">Litecoin(LTC)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Send only assets <span style="color: #fff; background-color: rgba(0, 47, 178, 0.5); border-radius: 10px; padding: 0 6px; font-weight: 600;">Litecoin(LTC)</span> to this address. Sending other assets will result in permanent loss.',
      PL: 'Wyślij tylko aktywa <span style="color: #fff; background-color: rgba(0, 47, 178, 0.5); border-radius: 10px; padding: 0 6px; font-weight: 600;">Litecoin (LTC)</span> na ten adres. Wysłanie innych aktywów spowoduje trwałą utratę.',
    },
    address: 'ltc1qrrv5lx0epj37qnp2ltyhrdq6srlky4typzy026',
  },
  BCH: {
    text: {
      RU: 'Отправляйте только активы <span style="color: #fff; background-color: rgba(16, 255, 0, 0.5); border-radius: 10px; padding: 0 6px; font-weight: 600;">Bitcoin_Cash(BCH)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Send only assets <span style="color: #fff; background-color: rgba(16, 255, 0, 0.5); border-radius: 10px; padding: 0 6px; font-weight: 600;">Bitcoin_Cash(BCH)</span> to this address. Sending other assets will result in permanent loss.',
      PL: 'Wyślij tylko aktywa <span style="color: #fff; background-color: rgba(16, 255, 0, 0.5); border-radius: 10px; padding: 0 6px; font-weight: 600;">Bitcoin Cash (BCH)</span> na ten adres. Wysłanie innych aktywów spowoduje trwałą utratę.',
    },
    address: 'qq8mpv5fkse5062t7sn0al8545x4lnx03u2wxr4k22',
  },
  DOGE: {
    text: {
      RU: 'Отправляйте только активы <span style="color: #fff; background-color: rgba(255, 215, 0, 0.5); border-radius: 10px; padding: 0 6px; font-weight: 600;">Dogecoin(DOGE)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Send only assets <span style="color: #fff; background-color: rgba(255, 215, 0, 0.5); border-radius: 10px; padding: 0 6px; font-weight: 600;">Dogecoin(DOGE)</span> to this address. Sending other assets will result in permanent loss.',
      PL: 'Wyślij tylko aktywa <span style="color: #fff; background-color: rgba(255, 215, 0, 0.5); border-radius: 10px; padding: 0 6px; font-weight: 600;">Dogecoin (DOGE)</span> na ten adres. Wysłanie innych aktywów spowoduje trwałą utratę.',
    },
    address: 'DMHtna8VCEB1BUeP2a9ki9TkiFSDMxtbo1',
  },
};
