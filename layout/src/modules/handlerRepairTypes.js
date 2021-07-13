const handlerRepairTypes = () => {
    const currentCount = document.querySelector('.slider-counter-content__current'),
        totalCount = document.querySelector('.slider-counter-content__total');
    let currentSlide = 0;
    currentCount.textContent = 1;

    const repairTypesTabs = () => {
        const tabs = document.querySelectorAll('.repair-types-nav__item'), 
            tabsContent = document.querySelectorAll('.types-repair');
        
        const toggleTabContent = (index) => {
            tabsContent.forEach((item, i) => {
                if (index === i) {
                    tabs[i].classList.add('active');
                    item.style.display = '';
                } else {
                    tabs[i].classList.remove('active');
                    item.style.display = 'none';
                }
            });
        };
    
        document.body.addEventListener('click', (event) => {
            let target = event.target;
            if (target.matches('.repair-types-nav__item')) {
                currentCount.textContent = 1;
                currentSlide = 0;

                tabs.forEach((item, index) => {
                    if (target === item) {
                        toggleTabContent(index);
                    }
                });
            }
        });
    };
    const repairSlider = () => {
        const arrowLeft = document.querySelector('#repair-types-arrow_left'),
            arrowRight = document.querySelector('#repair-types-arrow_right'),
            slides = document.querySelectorAll('.types-repair');

        totalCount.textContent = slides.length;
        currentCount.textContent = 1;
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                return;
            } else {
                slide.style.display = 'none';
            }
        });
    
        const prevSlide = (elem, index, ) => {
            elem[index].style.display = 'none';
            currentCount.textContent = currentSlide + 1;
        };
        const nextSlide = (elem, index, ) => {
            elem[index].style.display = '';
            currentCount.textContent = currentSlide + 1;
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
    const repairTypesSlider = () => {
        const arrowLeft = document.querySelector('#nav-arrow-repair-left_base'),
            arrowRight = document.querySelector('#nav-arrow-repair-right_base'),
            container = document.querySelector('.repair-types-nav'),
            slides = document.querySelectorAll('.repair-types-nav__item'),
            transformBlock = document.querySelector('.nav-list-repair');
        let transformX = 0,
            maxLength = +getComputedStyle(transformBlock).width.slice(0, -2) - +getComputedStyle(container).width.slice(0, -2),
            transformWidth = maxLength / slides.length;
        const hiddenArrow = () => {
            if (Math.abs(transformX) === maxLength) {
                arrowLeft.style.display = 'none';
            } else if (transformX === 0) {
                arrowRight.style.display = 'none';
            } else {
                arrowLeft.style.display = '';
                arrowRight.style.display = '';
            }
        };
        hiddenArrow();

        arrowLeft.addEventListener('click', () => {
            if (Math.abs(transformX) < maxLength) {
                transformX -= transformWidth;
                if (Math.abs(transformX) > maxLength) {
                    transformX = maxLength * -1;
                }
                transformBlock.style.transform = `translateX(${transformX}px)`;
                hiddenArrow();
            } 
        });
        arrowRight.addEventListener('click', () => {
            if (transformX < 0) {
                transformX += transformWidth;
                if (transformX > 0) {
                    transformX = 0;
                }
                transformBlock.style.transform = `translateX(${transformX}px)`;
                hiddenArrow();
            } 
        });
    };

    repairTypesTabs();
    repairSlider();
    if (window.innerWidth <= 1024) {
        repairTypesSlider();
    }
};
export default handlerRepairTypes;