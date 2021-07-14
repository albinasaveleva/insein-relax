const docsSlider = (currentElem) => {
    const arrowLeft = document.querySelector('#transparency_left'),
        arrowRight = document.querySelector('#transparency_right'),
        slides = document.querySelectorAll('.popup-transparency-slider__slide'),
        sliderCount = document.querySelector('#transparency-popup-counter'),
        curentCount = sliderCount.querySelector('.slider-counter-content__current'),
        totalCount = sliderCount.querySelector('.slider-counter-content__total');

    slides.forEach((slide) => {
        slide.style.display = '';
    });
    let currentSlide = currentElem;
    curentCount.textContent = currentSlide + 1;
    totalCount.textContent = slides.length;

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
        curentCount.textContent = currentSlide + 1;
        nextSlide(slides, currentSlide);      
    });
    arrowRight.addEventListener('click', () => {
        prevSlide(slides, currentSlide);
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        curentCount.textContent = currentSlide + 1;
        nextSlide(slides, currentSlide);
    });
};
export default docsSlider;