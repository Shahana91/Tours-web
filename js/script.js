document.addEventListener('DOMContentLoaded', () => {


const nextBtn = document.querySelectorAll('.next-btn');
const prevBtn = document.querySelectorAll('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;
console.log('nextBtn');
console.log(nextBtn);
console.log('prevBtn');
console.log(prevBtn);
console.log('slides');
console.log(slides);
console.log('numberOfSlides');
console.log(numberOfSlides);

//slider next button
nextBtn[0].addEventListener('click',()=>{
    console.log('hitting next button')

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });



    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }
    slides[slideNumber].classList.add('active');
});

//slider previous button
prevBtn[0].onclick = () => {
    console.log('hitting prev button')
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });



    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add('active')
}
});