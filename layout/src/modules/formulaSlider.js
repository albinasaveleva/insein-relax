const formulaSlider = () => {
    const arrowLeft = document.querySelector('#formula-arrow_left'),
        arrowRight = document.querySelector('#formula-arrow_right'),
        slides = document.querySelectorAll('.formula-slider__slide');
    let currentSlide = 0;

    slides[currentSlide].style.opacity = '1';

    let style = document.createElement('style');
    style.classList.add('formula-before-element-styles');
    style.innerHTML = `
        .formula-slider__slide::before {
            z-index: 0;
        }
    `;
    document.head.append(style);

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
// const formulaSlider = () => {
//     const arrowLeft = document.querySelector('#formula-arrow_left'),
//         arrowRight = document.querySelector('#formula-arrow_right'),
//         slides = document.querySelectorAll('.formula-slider__slide');
//     let currentSlide = 0;

//     // slides[currentSlide].style.opacity = '1';
//     const render = (currentSlide) => {
//         slides[currentSlide].classList.add('.active');
//     }
//     render(currentSlide);
//     let style = document.createElement('style');
//     style.classList.add('formula-before-element-styles');
//     style.innerHTML = `
//         .formula-slider__slide::before {
//             z-index: 0;
//         }
//         .formula-slider-wrap {
//             display: flex;
//             align-items: center;
//             overflow: hidden;
//         }
//         .formula-slider {
//             display: flex;
//             align-items: flex-start;
//         }
//         .formula-slider__slide {
//             width: calc(100% / 3) !important;
//         }
//         .formula-slider__slide.active {
//             opacity: 1;
//         }
//         .formula-slider__slide.active .formula-item__icon-inner {
//             background: -webkit-gradient(linear, left top, right top, from(#F48922), to(#FFB015));
//             background: linear-gradient(90deg, #F48922 0%, #FFB015 100%);
//         }
//         .formula-slider__slide.prev {

//         }
//         .formula-slider__slide.next {

//         }
//     `;
//     document.head.append(style);

//     // slides.forEach((slide, index) => {
//     //     if (index === currentSlide) {
//     //         return;
//     //     } else {
//     //         slide.style.display = 'none';
//     //     }
//     // });
//     const prevSlide = (index) => {
//         slides[currentSlide].classList.remove('.active');

//         // elem[index].style.display = 'none';
//         // elem[index].style.opacity = '';
//     };
//     const nextSlide = (index) => {
//         slides[currentSlide].classList.add('.active');

//         // elem[index].style.display = '';
//         // elem[index].style.opacity = '1';
//     };
//     arrowLeft.addEventListener('click', () => {
//         prevSlide(currentSlide);
//         currentSlide--;
//         if (currentSlide < 0) {
//             currentSlide = slides.length - 1;
//         }  
//         nextSlide(currentSlide);      
//     });
//     arrowRight.addEventListener('click', () => {
//         prevSlide(slides, currentSlide);
//         currentSlide++;
//         // render(currentSlide);
//         if (currentSlide >= slides.length) {
//             currentSlide = 0;
//         }
//         nextSlide(slides, currentSlide);
//     });
// };
// export default formulaSlider;