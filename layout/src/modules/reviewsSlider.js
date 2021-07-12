const reviewsSlider = () => {
    const arrowLeft = document.querySelector('#reviews-arrow_left'),
        arrowRight = document.querySelector('#reviews-arrow_right'),
        slides = document.querySelectorAll('.reviews-slider__slide');
    let currentSlide = 0;

    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            return;
        } else {
            slide.style.display = 'none';
        }
    });
    const prevSlide = (elem, index, ) => {
        elem[index].style.display = 'none';
    };
    const nextSlide = (elem, index, ) => {
        elem[index].style.display = '';
    };
    arrowLeft.addEventListener('click', () => {
        prevSlide(slides, currentSlide);
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }  
        nextSlide(slides, currentSlide);      
    });
    arrowRight.addEventListener('click', () => {
        prevSlide(slides, currentSlide);
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide);
    });
};
export default reviewsSlider;