const formulaSlider = () => {
    const arrowLeft = document.querySelector('#formula-arrow_left'),
        arrowRight = document.querySelector('#formula-arrow_right'),
        slides = document.querySelectorAll('.formula-slider__slide');
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
        elem[index].style.opacity = '';
    };
    const nextSlide = (elem, index, ) => {
        elem[index].style.display = '';
        elem[index].style.opacity = '1';
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
export default formulaSlider;