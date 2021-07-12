const transparencySlider = () => {
    const arrowLeft = document.querySelector('#transparency-arrow_left'),
    arrowRight = document.querySelector('#transparency-arrow_right'),
    slides = document.querySelectorAll('.transparency-item');
    
    if (window.innerWidth <= 1090) {
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
    } else {
        slides.forEach((slide) => {
                slide.style.display = '';
        });
    }
};
export default transparencySlider;