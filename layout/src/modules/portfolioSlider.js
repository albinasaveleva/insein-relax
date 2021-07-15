const portfolioSlider = () => {
    const desctopSlider = () => {
        const arrowLeft = document.querySelector('#portfolio-arrow_left'),
            arrowRight = document.querySelector('#portfolio-arrow_right'),
            container = document.querySelector('.portfolio-slider'),
            slides = container.querySelectorAll('.portfolio-slider__slide-frame');

        slides.forEach(slide => slide.style.transition = 'all 1s ease 0s');

        let transformX = 0,
            maxLength = (+getComputedStyle(slides[0]).width.slice(0, -2) * slides.length / 2) - +getComputedStyle(container).width.slice(0, -2),
            transformWidth = maxLength / slides.length;
        if (window.innerWidth < 900) {
            transformWidth = maxLength / slides.length / 2;
        }
        
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

        window.addEventListener('resize', () => {
            slides.forEach(slide => slide.style.transform = ``);
            arrowRight.style.display = '';
            arrowLeft.style.display = '';
            hiddenArrow();
            transformX = 0;
        });
    };
    const mobileSlider = () => {
        const arrowLeft = document.querySelector('#portfolio-arrow-mobile_left'),
            arrowRight = document.querySelector('#portfolio-arrow-mobile_right'),
            slider = document.querySelector('.portfolio-slider-mobile'),
            slides = slider.querySelectorAll('.portfolio-slider__slide-frame'),
            sliderCount = document.querySelector('#portfolio-counter');
        let totalCount = sliderCount.querySelector('.slider-counter-content__total'),
            currentCount = sliderCount.querySelector('.slider-counter-content__current');
        let currentSlide = 0;

        totalCount.textContent = slides.length;
        currentCount.textContent = currentSlide + 1;

        const hiddenArrow = () => {
            if (currentSlide === slides.length - 1) {
                arrowRight.style.display = 'none';
            } else if (currentSlide === 0) {
                arrowLeft.style.display = 'none';
            } else {
                arrowRight.style.display = '';
                arrowLeft.style.display = '';
            }
        };
        hiddenArrow();

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
            currentCount.textContent = currentSlide + 1;
            nextSlide(slides, currentSlide);  
            hiddenArrow();    
        });
        arrowRight.addEventListener('click', () => {
            prevSlide(slides, currentSlide);
            currentSlide++;
            currentCount.textContent = currentSlide + 1;
            nextSlide(slides, currentSlide);
            hiddenArrow();
        });
    };

    if (window.innerWidth > 575) {
        desctopSlider();
    } else {
        mobileSlider();
    }
    // window.addEventListener('resize', () => {
    //     if (window.innerWidth > 575) {
    //         desctopSlider();
    //     } else {
    //         mobileSlider();
    //     }
    // });
};
export default portfolioSlider;