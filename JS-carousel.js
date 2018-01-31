function createSlides(slidesClass, dotsClass){
    var slideIndex = 0;
    return function showSlides() {
        var i;
        var slides = document.getElementsByClassName(slidesClass);
        var dots = document.getElementsByClassName(dotsClass);
        for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000);
}

}

var slides1 = createSlides("mySlides1", "dot1");
var slides2 = createSlides("mySlides2", "dot2");
var slides3 = createSlides("mySlides3", "dot3");
var slides4 = createSlides("mySlides4", "dot4");
var slides5 = createSlides("mySlides5", "dot5");
var slides6 = createSlides("mySlides6", "dot6");
slides1();
slides2();
slides3();
slides4();
slides5();
slides6();

