const portfolioSlider = () => {
    const arrowLeft = document.querySelector('#portfolio-arrow_left'),
        arrowRight = document.querySelector('#portfolio-arrow_right'),
        container = document.querySelector('.portfolio-slider'),
        slides = container.querySelectorAll('.portfolio-slider__slide-frame');
    let transformX = 0,
        maxLength = (+getComputedStyle(slides[0]).width.slice(0, -2) * slides.length / 2) - +getComputedStyle(container).width.slice(0, -2),
        transformWidth = maxLength / slides.length;

    const hiddenArrow = () => {
        if (Math.abs(transformX) === maxLength) {
            arrowRight.style.display = 'none';
        } else if (transformX === 0) {
            arrowLeft.style.display = 'none';
        } else {
            arrowRight.style.display = '';
            arrowLeft.style.display = '';
        }
    };
    hiddenArrow();

    arrowRight.addEventListener('click', () => {
        if (Math.abs(transformX) < maxLength) {
            transformX -= transformWidth;
            if (Math.abs(transformX) > maxLength) {
                transformX = maxLength * -1;
            }
            [...slides].every(slide => slide.style.transform = `translateX(${transformX}px)`);
            hiddenArrow();
        } 
    });
    arrowLeft.addEventListener('click', () => {
        if (transformX < 0) {
            transformX += transformWidth;
            if (transformX > 0) {
                transformX = 0;
            }
            [...slides].every(slide => slide.style.transform = `translateX(${transformX}px)`);
            hiddenArrow();
        } 
    });
};
export default portfolioSlider;