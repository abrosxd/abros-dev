fetch("/public/locales/about.yaml")
  .then((response) => response.text())
  .then((yamlData) => {
    const data = jsyaml.load(yamlData);
    const updateDateTime = () => {
      const nowInWarsaw = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Europe/Warsaw" })
      );
      const daysOfWeek = data.time.days[currentLanguage];
      const currentDay = daysOfWeek[nowInWarsaw.getDay()];
      const currentDate = `${nowInWarsaw
        .getDate()
        .toString()
        .padStart(2, "0")}/${(nowInWarsaw.getMonth() + 1)
        .toString()
        .padStart(2, "0")}`;
      const currentTime = nowInWarsaw.toLocaleTimeString("en-US", {
        hour12: false,
      });
      document.getElementById("currentDay").innerText = currentDay;
      document.getElementById("currentDate").innerText = currentDate;
      document.getElementById("currentTime").innerText = currentTime;
    };
    updateDateTime();
    setInterval(updateDateTime, 1000);

    const notesContainer = document.getElementById("notesContainer");
    data.notes.forEach((note) => {
      const noteElement = document.createElement("div");
      noteElement.className = "note";
      noteElement.innerHTML = `
            <a href="${note.link}">
                <span class="notetitle">${note.title[currentLanguage]}</span>
                <span class="notetext">${note.text[currentLanguage]}</span>
                <div class="noteshape" style="background-color: ${note.color};"></div>
                <img src="${note.img}">
            </a>
        `;
      notesContainer.appendChild(noteElement);
    });
    $("#notesContainer").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    });

    const reviewsContainer = document.getElementById("reviewsContainer");
    data.reviewsData.forEach((review) => {
      const reviewElement = document.createElement("div");
      reviewElement.className = "review";
      reviewElement.innerHTML = `
            <div class="reviewcontainer">
                <img class="reviewimg" src="${review.img}">
                <span class="reviewname">${review.name[currentLanguage]}</span>
                <span class="reviewtext">«${review.text[currentLanguage]}»</span>
            </div>
        `;
      reviewsContainer.appendChild(reviewElement);
    });
    $("#reviewsContainer").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    });

    const faqContainer = document.getElementById("faqContainer");
    data.faqData.forEach((faq) => {
      const faqElement = document.createElement("div");
      faqElement.innerHTML = `
            <div class="faq-header button">${faq.title[currentLanguage]}</div>
            <div class="faq-content">
                <p>${faq.text[currentLanguage]}</p>
            </div>
        `;
      faqContainer.appendChild(faqElement);
    });

    const cardHeaders = document.querySelectorAll(".aboutcard .faq-header");
    cardHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const isActive = this.classList.contains("active");
        document
          .querySelectorAll(".aboutcard .faq-header")
          .forEach((item) => item.classList.remove("active"));
        document
          .querySelectorAll(".aboutcard .faq-content")
          .forEach((item) => item.classList.remove("active"));
        if (!isActive) {
          this.classList.add("active");
          content.classList.add("active");
        }
      });
    });

    const galleryContainer = document.getElementById("imageGallery");
    data.galleryData.forEach((gallery) => {
      const gallaryElement = document.createElement("div");
      gallaryElement.innerHTML = `<img src="${gallery.img}">`;
      galleryContainer.appendChild(gallaryElement);
    });
    $(document).ready(function () {
      $("#imageGallery").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
      });
    });

    const stackContainer = document.getElementById("stackGallery");
    data.stackData.forEach((stack) => {
      const stackElement = document.createElement("div");
      stackElement.style.marginRight = "5px";
      stackElement.innerHTML = `
            <div class="tag" style="background-color: ${stack.bgcolor}; color: ${stack.color};">
                <img class="tagimg" src="${stack.img}">
                <span>${stack.title}</span>
            </div>
        `;
      stackContainer.appendChild(stackElement);
    });

    let shownFacts = [];
    const showRandomFact = () => {
      if (shownFacts.length === data.facts.length) {
        shownFacts = [];
      }
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * data.facts.length);
      } while (shownFacts.includes(randomIndex));
      shownFacts.push(randomIndex);
      const randomFact = data.facts[randomIndex];
      document.getElementById("factImage").src = randomFact.img;
      document.getElementById("factText").textContent =
        randomFact.text[currentLanguage];
    };
    showRandomFact();
    const showAnotherFact = () => {
      showRandomFact();
    };
    const showFactButton = document.getElementById("showFactButton");
    showFactButton.addEventListener("click", showAnotherFact);

    const softContainer = document.getElementById("softContainer");
    data.soft.forEach((soft) => {
      const softElement = document.createElement("a");
      softElement.href = `${soft.href}`;
      softElement.target = "_blank";
      softElement.innerHTML = `
            <img src="${soft.img}">
            <p class="text">${soft.text[currentLanguage]}</p>
        `;
      softContainer.appendChild(softElement);
    });

    const materialContainer = document.getElementById("lessonsContainer");
    data.materials.forEach((material) => {
      const materialElement = document.createElement("a");
      materialElement.href = `${material.href}`;
      materialElement.target = "_blank";
      materialElement.innerHTML = `
            <img src="${material.img}">
            <p class="text">${material.text[currentLanguage]}</p>
        `;
      materialContainer.appendChild(materialElement);
    });

    const changeabout = (language) => {
      document.querySelector(".thello").textContent = data.hello[language];
      document.querySelector(".ttime").textContent = data.time.title[language];
      document.querySelector(".treviews").textContent = data.reviews[language];
      document.querySelector(".tfaq").textContent = data.faq[language];
      document.querySelector(".tgallery").textContent = data.gallery[language];
      document.querySelector(".tstack").textContent = data.stack[language];
      document.querySelector(".tfacts").textContent =
        data.randomfacts.title[language];
      document.querySelector(".tfactsbutton").textContent =
        data.randomfacts.button[language];
      document.querySelector(".tsoft").textContent = data.tools.soft[language];
      document.querySelector(".tmaterials").textContent =
        data.tools.materials[language];
    };
    changeabout(currentLanguage);
  })
  .catch((error) => console.error("Ошибка загрузки файла about.yaml", error));
