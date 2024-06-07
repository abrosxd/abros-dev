console.log("Barba.js инициализируется");
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded событие");
  barba.init({
    transitions: [
      {
        name: "fade",
        leave(data) {
          console.log("leave transition начат");
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
              console.log("leave transition завершен");
              resolve();
            }, 500);
          });
        },
        enter(data) {
          console.log("enter transition начат");
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
                console.log("enter transition завершен");
                resolve();
              }, 1500);
            }, 500);
          });
        },
      },
    ],
  });
});
