fetch('main/txt/about.json')
.then(response => response.json())
.then(data => {
    // Time
    function updateDateTime() {
        var nowInWarsaw = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Warsaw"}));
        var daysOfWeek = data.time.days[currentLanguage];
        var currentDay = daysOfWeek[nowInWarsaw.getDay()];
        var currentDate = nowInWarsaw.getDate().toString().padStart(2, '0') + '/' + (nowInWarsaw.getMonth() + 1).toString().padStart(2, '0');
        var currentTime = nowInWarsaw.toLocaleTimeString('en-US', { hour12: false });
        document.getElementById('currentDay').innerText = currentDay;
        document.getElementById('currentDate').innerText = currentDate;
        document.getElementById('currentTime').innerText = currentTime;
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);
    // Notes
    const notesContainer = document.getElementById("notesContainer");
    data.notes.forEach(note => {
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
    $('#notesContainer').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
    // Pay
    const qrCodeInstance = new QRCode(document.getElementById('coinAddressQR'), {
        width: 240,
        height: 240,
    });

    function selectCoin(coin) {
        const buttons = document.querySelectorAll('.tab-menu button');
        buttons.forEach(button => button.classList.remove('active'));

        const selectedButton = Array.from(buttons).find(button => button.textContent === coin);
        selectedButton.classList.add('active');

        const Data = data.coinData[coin];
        document.getElementById('coinText').innerHTML = `${Data.text[currentLanguage]}`;
        document.getElementById('coinAddress').value = Data.address;

        document.getElementById('coinAddressQR').classList.add('fade-out');

        setTimeout(() => {
            qrCodeInstance.clear();
            qrCodeInstance.makeCode(Data.address);
                                
            const qrCodeImg = document.querySelector('#coinAddressQR img');
            qrCodeImg.onclick = copyAddress;
            qrCodeImg.style.cursor = 'pointer';

            document.getElementById('coinAddressQR').classList.remove('fade-out');
        }, 500);
    }

    function copyAddress(language) {
        var addressInput = document.getElementById('coinAddress');
        addressInput.select();
        document.execCommand('copy');
 
        var copyButton = document.querySelector('.tpaybutton');
        copyButton.textContent = data.pay.buttonclick[language];
        copyButton.classList.add('copy-success');

        setTimeout(() => {
            copyButton.textContent = datapay.button[language];
            copyButton.classList.remove('copy-success');
        }, 2000);
    }

    selectCoin('BTC');
    // Reviews
    const reviewsContainer = document.getElementById("reviewsContainer");
    data.reviewsData.forEach(review => {
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
    $('#reviewsContainer').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
    // F.A.Q.
    const faqContainer = document.getElementById("faqContainer");
    data.faqData.forEach(faq => {
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
    cardHeaders.forEach(function(header) {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains("active");
            document.querySelectorAll(".aboutcard .faq-header").forEach(function(item) {
                item.classList.remove("active");
            });
            document.querySelectorAll(".aboutcard .faq-content").forEach(function(item) {
                item.classList.remove("active");
            });
            if (!isActive) {
                this.classList.add("active");
                content.classList.add("active");
            }
        });
    });
    // Gallery
    const galleryContainer = document.getElementById("imageGallery");
    data.galleryData.forEach(gallery => {
        const gallaryElement = document.createElement("div");
        gallaryElement.innerHTML = `<img src="${gallery.img}">`;
        galleryContainer.appendChild(gallaryElement);
    });
    $(document).ready(function(){
        $('#imageGallery').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
        });
    });
    // Stack
    const stackContainer = document.getElementById("stackGallery");
    data.stackData.forEach(stack => {
        const stackElement = document.createElement("div");
        stackElement.style.marginRight = '5px';
        stackElement.innerHTML = `
            <div class="tag" style="background-color: ${stack.bgcolor}; color: ${stack.color};">
                <img class="tagimg" src="${stack.img}">
                <span>${stack.title}</span>
            </div>
        `;
        stackContainer.appendChild(stackElement);
    });
    // Facts
    let shownFacts = [];
    function showRandomFact() {
        if (shownFacts.length === data.facts.length) {
            shownFacts = [];
        }
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * data.facts.length);
        } while (shownFacts.includes(randomIndex));
        shownFacts.push(randomIndex);
        const randomFact = data.facts[randomIndex];
        document.getElementById('factImage').src = randomFact.img;
        document.getElementById('factText').textContent = randomFact.text[currentLanguage];
    }
    showRandomFact();
    function showAnotherFact() {
        showRandomFact();
    }
    // Soft
    const softContainer = document.getElementById("softContainer");
    data.soft.forEach(soft => {
        const softElement = document.createElement("a");
        softElement.href = `${soft.href}`;
        softElement.target = '_blank';
        softElement.innerHTML = `
            <img src="${soft.img}">
            <p class="text">${soft.text[currentLanguage]}</p>
        `;
        softContainer.appendChild(softElement);
    });
    // Materials
    const materialContainer = document.getElementById("lessonsContainer");
    data.materials.forEach(material => {
        const materialElement = document.createElement("a");
        materialElement.href = `${material.href}`;
        materialElement.target = '_blank';
        materialElement.innerHTML = `
            <img src="${material.img}">
            <p class="text">${material.text[currentLanguage]}</p>
        `;
        materialContainer.appendChild(materialElement);
    });

    // Смена языка About
    function changeabout(language) {
        // Hello
        const helloElement = document.querySelector('.thello');
        const helloText = data.hello[language];
        helloElement.textContent = helloText;
        // Time
        const timeElement = document.querySelector('.ttime');
        const timeText = data.time.title[language];
        timeElement.textContent = timeText;
        // Pay
        const payElement = document.querySelector('.tpay');
        const payText = data.pay.title[language];
        payElement.textContent = payText;
                
        const paybuttonElement = document.querySelector('.tpaybutton');
        const paybuttonText = data.pay.button[language];
        paybuttonElement.textContent = paybuttonText;
        // Reviews
        const reviewsElement = document.querySelector('.treviews');
        const reviewsText = data.reviews[language];
        reviewsElement.textContent = reviewsText;
        // F.A.Q.
        const faqElement = document.querySelector('.tfaq');
        const faqText = data.faq[language];
        faqElement.textContent = faqText;
        // Gallery
        const galleryElement = document.querySelector('.tgallery');
        const galleryText = data.gallery[language];
        galleryElement.textContent = galleryText;
        // Stack
        const stackElement = document.querySelector('.tstack');
        const stackText = data.stack[language];
        stackElement.textContent = stackText;
        // Facts
        const factsElement = document.querySelector('.tfacts');
        const factsText = data.randomfacts.title[language];
        factsElement.textContent = factsText;

        const factsbuttonElement = document.querySelector('.tfactsbutton');
        const factsbuttonText = data.randomfacts.button[language];
        factsbuttonElement.textContent = factsbuttonText;
        // Soft
        const softElement = document.querySelector('.tsoft');
        const softText = data.tools.soft[language];
        softElement.textContent = softText;
        // Materials
        const materialsElement = document.querySelector('.tmaterials');
        const materialsText = data.tools.materials[language];
        materialsElement.textContent = materialsText;
    }
    changeabout(currentLanguage);
})