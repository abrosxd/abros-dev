window.addEventListener('load', function() {
    setTimeout(function() {
        var preloadDiv = document.querySelector('.preload');
        var preloadIconDiv = document.querySelector('.preload-icon');
        if (preloadIconDiv) {
            preloadIconDiv.style.opacity = '0';
            preloadIconDiv.style.visibility = 'hidden';
        }
        var preloadSquares = document.querySelectorAll('.preload-bg li');
        preloadSquares.forEach(function(square) {
            var randomDelay = Math.random() * 1000;
            setTimeout(function() {
                square.style.opacity = '0';
                square.style.visibility = 'hidden';
            }, randomDelay);
        });

        setTimeout(function() {
            preloadDiv.style.display = 'none';
        }, 1500);
    }, 500);
});
