window.addEventListener("load", function () {
  setTimeout(function () {
    var preloadDiv = document.querySelector(".loader");
    var preloadSquares = document.querySelectorAll(".loader-bg li");
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
  }, 500);
});
