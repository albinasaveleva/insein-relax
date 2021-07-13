import closePopup from "./closePopup";
import openPopup from "./openPopup";

const handlerPopupPortfolio = () => {
    const popup = document.querySelector('.popup-portfolio'),
        portfolioSlider = document.querySelector('.portfolio-slider'),
        mobilePortfolioSlider = document.querySelector('.portfolio-slider-mobile'),        
        sliderCounter = document.querySelector('#popup-portfolio-counter'),
        currentSliderCounter = sliderCounter.querySelector('.slider-counter-content__current'),
        totalSliderCounter = sliderCounter.querySelector('.slider-counter-content__total');
    let slidesFrame;
    if (window.innerWidth > 575) {
        slidesFrame = portfolioSlider.querySelectorAll('.portfolio-slider__slide-frame');
    } else {
        slidesFrame = mobilePortfolioSlider.querySelectorAll('.portfolio-slider__slide-frame');
    }
    const texts = document.querySelectorAll('.popup-portfolio-text'),
        slides = document.querySelectorAll('.popup-portfolio-slider__slide');

    const render = (currentIndex) => {
        slides.forEach((item, index) => {
            if (index === currentIndex) {
                currentSliderCounter.textContent = currentIndex + 1;
                item.style.display = '';
                texts.forEach((item, textIndex) => {
                    if (currentIndex === textIndex) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            } else {
                item.style.display = 'none';
            }
        });
    };
    const popupPortfolioSlider = (currentIndex) => {
        const arrowLeft = document.querySelector('#popup_portfolio_left'),
            arrowRight = document.querySelector('#popup_portfolio_right');
        let currentSlide = currentIndex;

        const checkArrow = () => {
            if (currentSlide === 0) {
                arrowLeft.style.display = 'none';
            } else if (currentSlide === slides.length - 1) {
                arrowRight.style.display = 'none';
            } else {
                arrowLeft.style.display = '';
                arrowRight.style.display = '';
            }
        };
        checkArrow();

        arrowLeft.addEventListener('click', () => {
            arrowLeft.style.display = '';
            currentSlide--;
            checkArrow(); 
            currentSliderCounter.textContent = currentSlide + 1;
            render(currentSlide);    
        });
        arrowRight.addEventListener('click', () => {
            arrowRight.style.display = '';
            currentSlide++;
            checkArrow();
            currentSliderCounter.textContent = currentSlide + 1;
            render(currentSlide);
        });
    };

    const showContent = (currentIndex) => {
        totalSliderCounter.textContent = slidesFrame.length;
        render(currentIndex, slides);
        popupPortfolioSlider(currentIndex);
    };
    
    slidesFrame.forEach((item, index) => {
        item.addEventListener('click', event => {
            let target = event.target;
            if (target.matches('.portfolio-slider__slide-frame')) {
                openPopup(popup);   
                showContent(index);
            }
        });
    });
    document.addEventListener('click', (event) => {
        let target = event.target;
        if (popup.style.visibility === 'visible') {
            if (target.matches('.popup-portfolio') ||
            (target.matches('.close') && target.closest('.popup-portfolio'))) {
                closePopup(popup);   
            }
        }
    });
};
export default handlerPopupPortfolio;