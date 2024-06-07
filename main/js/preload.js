import { initAboutPage } from "./initAbout.js";
import { initPortfolioPage } from "./initPortfolio.js";

document.addEventListener("DOMContentLoaded", function () {
  barba.init({
    transitions: [
      {
        name: "fade",
        leave(data) {
          return new Promise((resolve) => {
            const preloadDiv = document.querySelector(".preload");
            const preloadIconDiv = document.querySelector(".preload-icon");
            if (preloadIconDiv) {
              preloadIconDiv.style.opacity = "1";
              preloadIconDiv.style.visibility = "visible";
            }
            const preloadSquares = document.querySelectorAll(".preload-bg li");
            preloadSquares.forEach((square) => {
              square.style.opacity = "1";
              square.style.visibility = "visible";
            });
            preloadDiv.style.display = "block";

            setTimeout(() => {
              resolve();
            }, 500);
          });
        },
        enter(data) {
          return new Promise((resolve) => {
            setTimeout(() => {
              const preloadDiv = document.querySelector(".preload");
              const preloadIconDiv = document.querySelector(".preload-icon");
              if (preloadIconDiv) {
                preloadIconDiv.style.opacity = "0";
                preloadIconDiv.style.visibility = "hidden";
              }
              const preloadSquares =
                document.querySelectorAll(".preload-bg li");
              preloadSquares.forEach((square) => {
                const randomDelay = Math.random() * 1000;
                setTimeout(() => {
                  square.style.opacity = "0";
                  square.style.visibility = "hidden";
                }, randomDelay);
              });

              setTimeout(() => {
                preloadDiv.style.display = "none";
                resolve();

                // Инициализация страниц после завершения перехода
                if (data.next.namespace === "about") {
                  initAboutPage();
                }
                if (data.next.namespace === "portfolio") {
                  initPortfolioPage();
                }
              }, 1500);
            }, 500);
          });
        },
      },
    ],
  });

  // Инициализация страниц на начальной загрузке
  if (document.querySelector("main").dataset.barbaNamespace === "about") {
    initAboutPage();
  }
  if (document.querySelector("main").dataset.barbaNamespace === "portfolio") {
    initPortfolioPage();
  }
});
