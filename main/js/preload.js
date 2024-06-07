// import { initMenu } from "./logic/menu.js";
import { initAboutPage } from "./logic/about.js";
import { initPortfolioPage } from "./logic/portfolio.js";

document.addEventListener("DOMContentLoaded", () => {
  barba.init({
    transitions: [
      {
        name: "preloader-transition",
        async leave(data) {
          var preloadDiv = document.querySelector(".preload");
          var preloadIconDiv = document.querySelector(".preload-icon");
          if (preloadIconDiv) {
            preloadIconDiv.style.opacity = "1";
            preloadIconDiv.style.visibility = "visible";
          }
          var preloadSquares = document.querySelectorAll(".preload-bg li");
          preloadSquares.forEach(function (square) {
            var randomDelay = Math.random() * 1000;
            setTimeout(function () {
              square.style.opacity = "1";
              square.style.visibility = "visible";
            }, randomDelay);
          });

          preloadDiv.style.display = "block";
          await gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
        },
        async enter(data) {
          var preloadDiv = document.querySelector(".preload");
          var preloadIconDiv = document.querySelector(".preload-icon");
          if (preloadIconDiv) {
            preloadIconDiv.style.opacity = "0";
            preloadIconDiv.style.visibility = "hidden";
          }
          var preloadSquares = document.querySelectorAll(".preload-bg li");
          preloadSquares.forEach(function (square) {
            var randomDelay = Math.random() * 1000;
            setTimeout(function () {
              square.style.opacity = "0";
              square.style.visibility = "hidden";
            }, randomDelay);
          });

          setTimeout(function () {
            preloadDiv.style.display = "none";
          }, 1500);

          gsap.from(data.next.container, { opacity: 0, duration: 0.5 });

          // Переинициализация страниц после перехода
          if (data.next.namespace === "about") {
            initAboutPage();
          }
          if (data.next.namespace === "portfolio") {
            initPortfolioPage();
          }
        },
      },
    ],
  });
});

// Инициализация страниц на начальной загрузке, если они активны
if (document.querySelector("main").dataset.barbaNamespace === "about") {
  initAboutPage();
}
if (document.querySelector("main").dataset.barbaNamespace === "portfolio") {
  initPortfolioPage();
}
