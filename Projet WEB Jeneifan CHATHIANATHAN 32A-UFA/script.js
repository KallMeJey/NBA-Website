var indexOfSlide = 1;

/* Faire défiler le carousel */
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(indexOfSlide -= 1);
    } else {
        showSlides(indexOfSlide += 1);
    }
    if (n === -1) {
        myTimer = setInterval(function() { plusSlides(n + 2) }, 5000);
    } else {
        myTimer = setInterval(function() { plusSlides(n + 1) }, 5000);
    }
}

/* Automatiser le carousel */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { indexOfSlide = 1 }
    if (n < 1) { indexOfSlide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[indexOfSlide - 1].style.display = "block";

}

/* Activation d'un évènement avec un timer */

window.addEventListener("load", function() {
    showSlides(indexOfSlide);
    myTimer = setInterval(function() { plusSlides(1) }, 2000);
})