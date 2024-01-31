document.addEventListener('DOMContentLoaded', () => {

    // Get all elements with the class "next-btn" (using querySelectorAll)
    const nextBtn = document.querySelectorAll('.next-btn');

    // Get all elements with the class "next-btn" (using querySelectorAll)
    const prevBtn = document.querySelectorAll('.prev-btn');

        // Get all slides (assuming correct class name "slide")
        const slides = document.querySelectorAll('.slide');
  

    // Iterate over each "next-btn" element (using Array.from)
    Array.from(nextBtn).forEach(btn => btn.addEventListener('click', () => {
      console.log('hitting next button');
  
      // Remove "active" class from all slides
      slides.forEach(slide => slide.classList.remove('active'));
  
      // Advance to the next slide
      slideNumber++;
      if (slideNumber > slides.length - 1) {
        slideNumber = 0;
      }
      slides[slideNumber].classList.add('active');
    }));
  
    // Iterate over each "prev-btn" element (using Array.from)
    Array.from(prevBtn).forEach(btn => btn.addEventListener('click', () => {
      console.log('hitting prev button');
  
      // Remove "active" class from all slides
      slides.forEach(slide => slide.classList.remove('active'));
  
      // Advance to the next slide
      slideNumber--;
      if (slideNumber <0) {
        slideNumber =  slides.length - 1;
      }
      slides[slideNumber].classList.add('active');
    }));
  
    // Important: Initialize slideNumber
    slideNumber = 0; // Start with the first slide
  });
  