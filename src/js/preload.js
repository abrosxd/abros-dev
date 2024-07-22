window.addEventListener("load", function () {
  setTimeout(function () {
    var loader = document.querySelector(".loader");
    var loaderIcon = loader.querySelector(".loader-icon");
    var loaderSquares = loader.querySelectorAll(".loader-bg li");
    loaderIcon.style.opacity = "0";
    loaderIcon.style.visibility = "hidden";
    loaderSquares.forEach(function (square) {
      var randomDelay = Math.random() * 1000;
      setTimeout(function () {
        square.style.opacity = "0";
        square.style.visibility = "hidden";
      }, randomDelay);
    });

    setTimeout(function () {
      loader.style.display = "none";
    }, 1500);
  }, 500);
});
