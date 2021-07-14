const handlerFormula = () => {
    const wrappers = document.querySelectorAll('.wrapper_small');
    let circles, popupes;

    const checkPosition = (target) => {
        let targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            // left: window.pageXOffset + target.getBoundingClientRect().left,
            // right: window.pageXOffset + target.getBoundingClientRect().right,
            // bottom: window.pageYOffset + target.getBoundingClientRect().bottom
          },
          windowPosition = {
            top: window.pageYOffset,
            // left: window.pageXOffset,
            // right: window.pageXOffset + document.documentElement.clientWidth,
            // bottom: window.pageYOffset + document.documentElement.clientHeight
          };
        if (targetPosition.top < windowPosition.top) {
            target.style.transform = 'rotate(180deg)';
            target.style.top = '170px';
        } else {
            target.style.transform = '';
            target.style.top = '';
        }
    };

    document.querySelector('#formula').addEventListener('mouseover', event => {
        let target = event.target;
        if (target.closest('.formula-item__icon')) {
            if (target.closest('.formula-slider__slide')) {
                target = target.parentElement;
                circles = wrappers[1].querySelectorAll('.formula-item__icon');
                popupes = wrappers[1].querySelectorAll('.formula-item-popup');
                circles.forEach((circle, index) => {
                    if (circle === target) {
                        popupes[index].style.visibility = 'visible';
                        popupes[index].style.opacity = '1';
                    }
                });

            } else {
                target = target.parentElement;
                circles = wrappers[0].querySelectorAll('.formula-item__icon');
                popupes = wrappers[0].querySelectorAll('.formula-item-popup');
                circles.forEach((circle, index) => {
                    if (circle === target) {
                        checkPosition(popupes[index]);
                        popupes[index].style.visibility = 'visible';
                        popupes[index].style.opacity = '1';
                    }
                });
            }
         }
    })
    document.querySelector('#formula').addEventListener('mouseout', event => {
        let target = event.target;
        if (target.closest('.formula-item__icon')) {
            if (target.closest('.formula-slider__slide')) {
                target = target.parentElement;
                circles = wrappers[1].querySelectorAll('.formula-item__icon');
                popupes = wrappers[1].querySelectorAll('.formula-item-popup');
                circles.forEach((circle, index) => {
                    if (circle === target) {
                        checkPosition(popupes[index]);
                        popupes[index].style.visibility = '';
                        popupes[index].style.opacity = '';
                    }
                });

            } else {
                target = target.parentElement;
                circles = wrappers[0].querySelectorAll('.formula-item__icon');
                popupes = wrappers[0].querySelectorAll('.formula-item-popup');
                circles.forEach((circle, index) => {
                    if (circle === target) {
                        checkPosition(popupes[index]);
                        popupes[index].style.visibility = '';
                        popupes[index].style.opacity = '';
                    }
                });
            }
         }
    })
}
export default handlerFormula;