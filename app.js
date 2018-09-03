// // Make all the content on the page fade-in after the webpage loads
// $('.header').delay(1000).hide().fadeIn(1000).slideDown(1000);
// $('.hero').delay(1000).hide().delay(1000).fadeIn(1000).slideDown(1000);
// $('.services').delay(1000).hide().delay(2000).fadeIn(1000).slideDown(1000);
// $('.gallery').delay(1000).hide().delay(3000).fadeIn(1000);
// $('.about').delay(1000).hide().delay(4000).fadeIn(1000);
// $('.centered').delay(1000).hide().delay(4000).fadeIn(1000);
// $('.contact').delay(1000).hide().delay(5000).fadeIn(1000);
// $('.footer').delay(1000).hide().delay(6000).fadeIn(1000);


// ---------- slider controls ----------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous button controls
function plusSlides (n) {
    showSlides(slideIndex += n);
}

// Slide controls
function currentSlide (n) {
    showSlides(slideIndex = n);
}

// showSlides Function
function showSlides (n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    if ( n > slides.length ) { slideIndex = 1 }
    if ( n < 1 ) { slideIndex = slides.length }
    for ( let i = 0; i < slides.length; i++ ) {
        slides[i].style.display = 'none';
    }
    for ( let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('.active', '');
    }
    slides[slideIndex - 1].style.display = 'flex';
}