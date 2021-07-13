const handlerFormula = () => {
    const wrappers = document.querySelectorAll('.wrapper_small');
    let circles, popupes;

    document.querySelector('#formula').addEventListener('mouseover', event => {
        let target = event.target;
        if (target.closest('.formula-item__icon')) {
            target = target.parentElement;
            circles = wrappers[0].querySelectorAll('.formula-item__icon');
            popupes = wrappers[0].querySelectorAll('.formula-item-popup');
            circles.forEach((circle, index) => {
                if (circle === target) {
                    popupes[index].style.visibility = 'visible';
                    popupes[index].style.opacity = '1';
                }
            });
        } else if (target.matches('.formula-slider__slide')) {
            target = target.firstElementChild;
            circles = wrappers[1].querySelectorAll('.formula-item__icon');
            popupes = wrappers[1].querySelectorAll('.formula-item-popup');
            circles.forEach((circle, index) => {
                if (circle === target) {
                    popupes[index].style.visibility = 'visible';
                    popupes[index].style.opacity = '1';
                }
            });
        }
    })
    document.querySelector('#formula').addEventListener('mouseout', event => {
        let target = event.target;
        if (target.closest('.formula-item__icon')) {
            target = target.parentElement;
            circles = wrappers[0].querySelectorAll('.formula-item__icon');
            popupes = wrappers[0].querySelectorAll('.formula-item-popup');
            circles.forEach((circle, index) => {
                if (circle === target) {
                    popupes[index].style.visibility = '';
                    popupes[index].style.opacity = '';
                }
            });
        } else if (target.matches('.formula-slider__slide')) {
            target = target.firstElementChild;
            circles = wrappers[1].querySelectorAll('.formula-item__icon');
            popupes = wrappers[1].querySelectorAll('.formula-item-popup');
            circles.forEach((circle, index) => {
                if (circle === target) {
                    popupes[index].style.visibility = '';
                    popupes[index].style.opacity = '';
                }
            });
        }
    })
    
    // circles.forEach((circle, index) => {
    //     circle.addEventListener('mouseover', (event) => {
    //         let target = event.target.parentElement;
    //         if (circle === target) {
    //             popupes[index].style.visibility = 'visible';
    //             popupes[index].style.opacity = '1';
    //         }
    //     });
    //     circle.addEventListener('mouseout', (event) => {
    //         let target = event.target.parentElement;
    //         if (circle === target) {
    //             popupes[index].style.opacity = '';
    //             popupes[index].style.visibility = '';
    //         }
    //     })
    // })
}
export default handlerFormula;