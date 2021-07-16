const formulaSlider = () => {
    const arrowLeft = document.querySelector('#formula-arrow_left'),
        arrowRight = document.querySelector('#formula-arrow_right'),
        slider = document.querySelector('.formula-slider');
    let slides = document.querySelectorAll('.formula-slider__slide');
    let width = +getComputedStyle(slider.parentElement).width.slice(0, -2);

    let style = document.createElement('style');
    style.classList.add('formula-before-element-styles');
    style.innerHTML = `
        .formula-slider__slide.active::before {
            z-index: 0;
        }
        .formula-slider-wrap {
            display: flex;
            align-items: center;
            overflow: hidden;
        }
        .formula-slider {
            display: flex;
            align-items: flex-start;
        }
        .formula-slider__slide {
            flex: 0 0 23%;
        }
        .formula-slider__slide.active {
            opacity: 1;
        }
        .formula-slider__slide.active .formula-item__icon-inner {
            background: -webkit-gradient(linear, left top, right top, from(#F48922), to(#FFB015));
            background: linear-gradient(90deg, #F48922 0%, #FFB015 100%);
        }
        .formula-slider__slide.prev {

        }
        .formula-slider__slide.next {

        }
    `;
    document.head.append(style);

    const startPosition = () => {
        slider.innerHTML = `
        <div class="formula-item formula-slider__slide">
            <div class="formula-item__icon">
                <div class="formula-item-popup formula-item-popup-01">Работы ведутся
                    <strong>точно</strong> по графику со
                    строгим <strong>cоблюдением</strong> сроков ремонта,
                    <strong>указанных</strong> в договоре.
                </div>
                <div class="formula-item__icon-inner">01</div>
            </div>
        <div class="formula-item__descr">Делаем объекты в конкретный срок</div>
        </div><!-- formula-item -->
        <div class="formula-item formula-slider__slide">
            <div class="formula-item__icon">
                <div class="formula-item-popup formula-item-popup-02">Наш
                    <strong>профессиональный</strong> опыт реализации
                    объектов и задач <strong>различного</strong> назначения и масштаба. Мы очень
                    <strong>гибки</strong> и
                    <strong>лояльны</strong> к нам клиентам.
                </div>
                <div class="formula-item__icon-inner">02</div>
            </div>
            <div class="formula-item__descr">Подстраиваемость<br>под любую задачу</div>
        </div><!-- formula-item -->
        <div class="formula-item formula-slider__slide">
            <div class="formula-item__icon">
                <div class="formula-item-popup formula-item-popup-03">Перед началом работ мы
                    <strong>грамотно</strong>
                    прорабатываем, распределяем и просчитываем весь проект на основе ваших пожеланий и прочный, таким образом
                    мы верно управляем вашим <strong>бюджетом.</strong></div>
                <div class="formula-item__icon-inner">03</div>
            </div>
            <div class="formula-item__descr">Разумное распределение бюджета</div>
        </div><!-- formula-item -->
        <div class="formula-item formula-slider__slide">
            <div class="formula-item__icon">
                <div class="formula-item-popup formula-item-popup-04">Стоимость услуг,
                    <strong>зафиксированная</strong> в
                    договоре, <strong>не меняется</strong> в процессе выполнения работ. Вы можете быть
                    <strong>уверены</strong> в изначальной цене!
                </div>
                <div class="formula-item__icon-inner">04</div>
            </div>
            <div class="formula-item__descr">Гарантируем фиксированную цену</div>
        </div><!-- formula-item -->
        <div class="formula-item formula-slider__slide">
            <div class="formula-item__icon">
                <div class="formula-item-popup formula-item-popup-05"><p>Стоимость
                    <strong>фиксируется</strong> в договоре и
                    <strong>не меняется</strong> в процессе работы.</p>Мы предлагаем
                    <strong>наличный и безналичный
                        расчет,</strong> оплату на карту, а также беспроцентную рассрочку.
                </div>
                <div class="formula-item__icon-inner">05</div>
            </div>
            <div class="formula-item__descr">Несколько вариантов оплаты и рассрочка</div>
        </div><!-- formula-item -->
        <div class="formula-item formula-slider__slide">
            <div class="formula-item__icon">
                <div class="formula-item-popup formula-item-popup-06">
                    <strong>Сами</strong> вывозим и утилизируем мусор. По
                    приезду, вы войдете в <strong>чистую</strong> жилое помещение, в котором можно <strong>сразу
                    жить.</strong></div>
                <div class="formula-item__icon-inner">06</div>
            </div>
            <div class="formula-item__descr">Оставляем чистоту<br>после ремонта</div>
        </div>
        `;
    };
    const prevSlide = (index) => {
        slides = document.querySelectorAll('.formula-slider__slide');
        slider.prepend(slides[slides.length - 1]);
        slides = document.querySelectorAll('.formula-slider__slide');  
        slides.forEach(slide => {
            if (slide.matches('.active')) {
                slide.classList.remove('active');
            }
        });
        slides[index].classList.add('active');  
    };
    const nextSlide = (index) => {
        slides = document.querySelectorAll('.formula-slider__slide');
        slider.append(slides[0]);
        slides = document.querySelectorAll('.formula-slider__slide');
        slides.forEach(slide => {
            if (slide.matches('.active')) {
                slide.classList.remove('active');
            }
        });
        slides[index].classList.add('active');
    };
    const render = (index) => {
        slides = document.querySelectorAll('.formula-slider__slide');
        slider.prepend(slides[slides.length - 1]);
        slides = document.querySelectorAll('.formula-slider__slide');
        slides[index].classList.add('active');
    };
    const startRender = (index) => {
        slides = document.querySelectorAll('.formula-slider__slide');
        slides[index].classList.add('active');
    };

    window.addEventListener('resize', () => {
        startPosition();
        width = +getComputedStyle(slider.parentElement).width.slice(0, -2);
        if (window.innerWidth < 850) {
            startRender(0);
            slides.forEach(slide => {
                slide.style.width = `${width}px`;
                slide.style.flex = '0 0 10%';
            });
        } else {
            render(1);
            slides.forEach(slide => {
                slide.style.width = ``;
            });
        }
    });

    if (window.innerWidth < 850) {
        startRender(0);
        slides.forEach(slide => {
            slide.style.width = `${width}px`;
            slide.style.flex = '0 0 10%';
        });
    } else {
        render(1);
    }

    arrowLeft.addEventListener('click', () => {
        if (window.innerWidth > 850) {
            prevSlide(1);
        } else {
            prevSlide(0);
        }
    });
    arrowRight.addEventListener('click', () => {
        if (window.innerWidth > 850) {
            nextSlide(1);
        } else {
            nextSlide(0);
        }
    });
};
export default formulaSlider;