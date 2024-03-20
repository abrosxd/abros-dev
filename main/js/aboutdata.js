const notes = [
  
  {
    link: "#",
    title: {
      RU: "Новости",
      EN: "Новости",
      PL: "Wiadomości",
    },
    text: {
      RU: "Ну то, что вы видите этот сайт - можно считать новостью 🤗",
      EN: "Ну то, что вы видите этот сайт - можно считать новостью 🤗",
      PL: "Cóż, to, co widzisz na tej stronie, można uznać za aktualności 🤗",
    },
    color: "rgb(72, 154, 255)",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTM0cHlobXc1aDVkN2ptaWhlODM0eXV0cW1tdXBmbXdza3VlMjV2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kfqjGTVX3YE6Y/giphy.gif",
  },

  {
    link: "#",
    title: {
      RU: "Курсы",
      EN: "Курсы",
      PL: "Kursy",
    },
    text: {
      RU: "Ничего нет - расслабтесь 😅",
      EN: "Ничего нет - расслабтесь 😅",
      PL: "Nic - relax 😅",
    },
    color: "azure",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTkxcXFtajBnZnFrNzUzdmhqdWU5anUyNnB0aHVzdHpuZ25oNWU5ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SwOyrG5xAmOI1pv0Rf/giphy.gif",
  },

  {
    link: "#",
    title: {
      RU: "Крипта",
      EN: "Крипта",
      PL: "Krypta",
    },
    text: {
      RU: "Близится халвинг. Ваши прогнозы? 🤔",
      EN: "Близится халвинг. Ваши прогнозы? 🤔",
      PL: "Halving się zbliża. Twoje przewidywania? 🤔",
    },
    color: "rgb(110, 68, 0)",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGRza3pxNW0zcmV1dHh1NXQ5c21oNm9paXJ2aXQxcXZybzQzaGhqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oNFP9kltPi7fp8TUAV/giphy.gif",
  },

];

const faq = [
  
  {
    title: {
      RU: "Тильда — хорошее решение?",
      EN: "Тильда — хорошее решение?",
      PL: "Tilda — dobrym rozwiązaniem?",
    },
    text: {
      RU: "Тильда — отличный выбор, для небольших проектов или для больших, но с бюджетом. Почему именно так? Все дело в том, что Тильда это конструктор сайтов, за счет гибкости платформы после разработки сайта вы сможете даже сами корректировать тексты и менять картинки. Но придется мирится с тем, что у неё есть или покупать подписки и платить за дополнительную разработку. В любом случае это до сих пор дешевле чем разработка сайта с нуля.",
      EN: "Тильда — отличный выбор, для небольших проектов или для больших, но с бюджетом. Почему именно так? Все дело в том, что Тильда это конструктор сайтов, за счет гибкости платформы после разработки сайта вы сможете даже сами корректировать тексты и менять картинки. Но придется мирится с тем, что у неё есть или покупать подписки и платить за дополнительную разработку. В любом случае это до сих пор дешевле чем разработка сайта с нуля.",
      PL: "Tilda — to doskonały wybór dla małych projektów lub dla dużych, ale z budżetem. Dlaczego właśnie? Rzecz w tym, że Tilda jest projektantem stron internetowych, ze względu na elastyczność platformy po rozwinięciu strony, możesz nawet samodzielnie dostosować teksty i zmienić obrazki. Ale trzeba znosić fakt, że ona ma lub kupuje subskrypcje i płacić za dodatkowy rozwój. W każdym razie jest to nadal tańsze niż tworzenie witryny od podstaw.",
    },
  },

  {
    title: {
      RU: "Почему такая цена?",
      EN: "Почему такая цена?",
      PL: "Dlaczego taka cena?",
    },
    text: {
      RU: "Сделать сайт, написать модификацию, улучшить модификацию — не так просто и быстро как кажется. Процесс разработки включает множество неявных этапов, которые напрямую влияют на результат. Разработка - процесс тонкий и кропотливый. В ходе работы зачастую происходят правки, которые увеличивают сложность и время работы над проектом. Это долгая работа, которая требует определенных навыков, ради которых я постоянно прохожу обучение, поэтому стоимость за разработку не может быть низкой.",
      EN: "Сделать сайт, написать модификацию, улучшить модификацию — не так просто и быстро как кажется. Процесс разработки включает множество неявных этапов, которые напрямую влияют на результат. Разработка - процесс тонкий и кропотливый. В ходе работы зачастую происходят правки, которые увеличивают сложность и время работы над проектом. Это долгая работа, которая требует определенных навыков, ради которых я постоянно прохожу обучение, поэтому стоимость за разработку не может быть низкой.",
      PL: "Zrób stronę, napisz modyfikację, ulepsz modyfikację — nie tak prostą i szybką, jak się wydaje. Proces rozwoju obejmuje wiele ukrytych kroków, które bezpośrednio wpływają na wynik. Rozwój to delikatny i żmudny proces. W toku prac często pojawiają się edycje zwiększające złożoność i czas pracy nad projektem. Jest to długa praca, która wymaga pewnych umiejętności, do których stale przechodzę szkolenia, więc koszt rozwoju nie może być niski.",
    },
  },

  {
    title: {
      RU: "В чем отличие правок от редакций?",
      EN: "В чем отличие правок от редакций?",
      PL: "Jaka jest różnica między edycjami a edycjami?",
    },
    text: {
      RU: "Правки - это когда вы просите внести мелкие изменения: поменять цвет, передвинуть кнопку, скруглить края...<br><br>Редакции - это когда вы просите внести крупные изменения: поменять функционал, изменить дизайн блока, сделать новый блок...",
      EN: "Правки - это когда вы просите внести мелкие изменения: поменять цвет, передвинуть кнопку, скруглить края...<br><br>Редакции - это когда вы просите внести крупные изменения: поменять функционал, изменить дизайн блока, сделать новый блок...",
      PL: "Edycje są wtedy, gdy prosisz o drobne zmiany: zmień kolor, przesuń przycisk, przekręć krawędzie ... < br >< br > Edycje - to wtedy prosisz o większe zmiany: zmień funkcjonalność, zmień projekt bloku, zrób nowy blok...",
    },
  },

];

const facts = [
  
  {
    img: "https://avatars.githubusercontent.com/u/50206778?s=200&v=4",
    text: {
      RU: "Если кто-то из вас когда-то жаловался, что Airtable платный. То я нашел для вас Nocodb, обязательно погуглите!",
      EN: "Если кто-то из вас когда-то жаловался, что Airtable платный. То я нашел для вас Nocodb, обязательно погуглите!",
      PL: "Jeśli ktoś z Was kiedyś skarżył się, że Airtable otrzymuje zapłatę. Znalazłem dla ciebie Nocodb, koniecznie google!",
    },
  },

  {
    img: "https://deusnotam.github.io/site/img/logo.jpeg",
    text: {
      RU: "Боитесь, что заказчик не оплатит? А может хотите защитится от этого на всякий случай? Тогда обязательно загляни в проект DEUS.",
      EN: "Боитесь, что заказчик не оплатит? А может хотите защитится от этого на всякий случай? Тогда обязательно загляни в проект DEUS.",
      PL: "Boisz się, że klient nie zapłaci? A może chcesz się przed tym uchronić na wszelki wypadek? W takim razie koniecznie spójrz na projekt DEUS.",
    },
  },

  {
    img: "main/img/facts/music.gif",
    text: {
      RU: "А вы знали, что по сайту можно путешествовать с приятной музыкой? Просто кликни по иконке с волной 😉",
      EN: "А вы знали, что по сайту можно путешествовать с приятной музыкой? Просто кликни по иконке с волной 😉",
      PL: "Czy wiesz, że możesz podróżować po stronie z przyjemną muzyką? Wystarczy kliknąć na ikonę fali 😉",
    },
  },

];

const reviews = [
  
  {
    img: "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png",
    name: {
      RU: "Доги Коинов",
      EN: "Доги Коинов",
      PL: "Psy Monet",
    },
    text: {
      RU: "Советую вам оставлять отзывы, это показывает мастерство хозяина",
      EN: "Советую вам оставлять отзывы, это показывает мастерство хозяина",
      PL: "Radzę zostawić recenzje, to pokazuje umiejętność mistrza",
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
      EN: "Visual Studio Code — редактор исходного кода, разработанный Microsoft для Windows, Linux и macOS.",
      PL: "Visual Studio Code — edytor kodu źródłowego opracowany przez Microsoft dla systemów Windows, Linux i macOS.",
    },
  },

  {
    title: "Adobe Creative Cloud",
    href: "https://creativecloud.adobe.com",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
    text: {
      RU: "Photoshop, Illustrator, Premiere Pro, After Effects и многое другое в одной подписке Adobe Creative Cloud.",
      EN: "Photoshop, Illustrator, Premiere Pro, After Effects и многое другое в одной подписке Adobe Creative Cloud.",
      PL: "Photoshop, Illustrator, Premiere Pro, After Effects i wiele więcej na jednej subskrypcji Adobe Creative Cloud.",
    },
  },

  {
    title: "ICONS 8",
    href: "https://icons8.com",
    img: "https://maxst.icons8.com/vue-static/icon/menu/logo.svg",
    text: {
      RU: "Сайт с иконками, иллюстрациями, фотографиями и 3D моделями для ваших проектов.",
      EN: "Сайт с иконками, иллюстрациями, фотографиями и 3D моделями для ваших проектов.",
      PL: "Strona z ikonami, ilustracjami, zdjęciami i modelami 3 D dla Twoich projektów.",
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
      EN: "Скоро тут появятся уроки, а пока вот вам Dogecoin.",
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
      RU: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(255 147 0 / 60%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Bitcoin(BTC)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(255 147 0 / 60%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Bitcoin(BTC)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      PL: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(255 147 0 / 60%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Bitcoin(BTC)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
    },
    address: 'bc1qrpmcy4zz7g6rtfxka8j4nk3yka72kmacvmam0a',
  },
  ETH: {
    text: {
      RU: 'Отправляйте только <span style="color: #fff; background-color: rgb(141 176 255 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Ethereum(ETH) или активы в сети Ethereum(ERC20)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Отправляйте только <span style="color: #fff; background-color: rgb(141 176 255 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Ethereum(ETH) или активы в сети Ethereum(ERC20)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      PL: 'Отправляйте только <span style="color: #fff; background-color: rgb(141 176 255 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Ethereum(ETH) или активы в сети Ethereum(ERC20)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
    },
    address: '0x96800af5023619eA338551a8E20b612C8Dd6192C',
  },
  XRP: {
    text: {
      RU: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(0 0 0 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">XRP(XRP)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(0 0 0 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">XRP(XRP)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      PL: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(0 0 0 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">XRP(XRP)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
    },
    address: 'raHW9xPXB3YiQqkraR2DT1oH8vUr7X5EQT',
  },
  TON: {
    text: {
      RU: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(0 78 255 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">TON(TON)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(0 78 255 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">TON(TON)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      PL: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(0 78 255 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">TON(TON)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
    },
    address: 'EQAmDD_sRSt-LuVtw9wBfxq8v7eCH-XP3oA8wQuQ5s2EN_wB',
  },
  TRX: {
    text: {
      RU: 'Отправляйте только <span style="color: #fff; background-color: rgb(255 0 0 / 60%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Tron(TRX) или активы в сети Tron(TRС20)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Отправляйте только <span style="color: #fff; background-color: rgb(255 0 0 / 60%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Tron(TRX) или активы в сети Tron(TRС20)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      PL: 'Отправляйте только <span style="color: #fff; background-color: rgb(255 0 0 / 60%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Tron(TRX) или активы в сети Tron(TRС20)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
    },
    address: 'TRD7vypAmXBP5qmXeejGUMXjgUMAMuS3mY',
  },
  SOL: {
    text: {
      RU: 'Отправляйте только <span style="color: #acffec; background-color: rgb(171 0 255 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Solana(SOL) или активы в сети Solana(SPL)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Отправляйте только <span style="color: #acffec; background-color: rgb(171 0 255 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Solana(SOL) или активы в сети Solana(SPL)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      PL: 'Отправляйте только <span style="color: #acffec; background-color: rgb(171 0 255 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Solana(SOL) или активы в сети Solana(SPL)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
    },
    address: '8y1QfdDF4XGEWNM5Aj7N19c93MT31kjn3Cu3p5V7YhnX',
  },
  LTC: {
    text: {
      RU: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(0 47 178 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Litecoin(LTC)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(0 47 178 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Litecoin(LTC)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      PL: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(0 47 178 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Litecoin(LTC)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
    },
    address: 'ltc1qrrv5lx0epj37qnp2ltyhrdq6srlky4typzy026',
  },
  BCH: {
    text: {
      RU: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(16 255 0 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Bitcoin_Cash(BCH)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(16 255 0 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Bitcoin_Cash(BCH)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      PL: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(16 255 0 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Bitcoin_Cash(BCH)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
    },
    address: 'qq8mpv5fkse5062t7sn0al8545x4lnx03u2wxr4k22',
  },
  DOGE: {
    text: {
      RU: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(255 215 0 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Dogecoin(DOGE)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      EN: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(255 215 0 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Dogecoin(DOGE)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
      PL: 'Отправляйте только активы <span style="color: #fff; background-color: rgb(255 215 0 / 50%); border-radius: 10px; padding: 0 6px; font-weight: 600;">Dogecoin(DOGE)</span> на этот адрес. Остальные активы будут безвозвратно утеряны.',
    },
    address: 'DMHtna8VCEB1BUeP2a9ki9TkiFSDMxtbo1',
  },
};
