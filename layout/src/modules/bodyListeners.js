import closePopup from "./closePopup";
import handlerMenu from "./handlerMenu";
import openPopup from "./openPopup";
import scrollIntoView from "./scrollIntoView";

const bodyListeners = () => {
    // console.log(document.querySelectorAll('.menu__icon'))

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.menu__icon')) {
            openPopup(document.querySelector('.popup-menu'));
            handlerMenu();
        } else if (target.matches('.close-menu') || 
            (target.matches('.row') && target.closest('.popup-dialog-menu')) ||
            target.matches('.popup-menu')) {
                closePopup(document.querySelector('.popup-menu'));
                handlerMenu();
        } else if (target.matches('.menu-link')) {
            if (target.closest('.popup-menu-nav__item')) {
                event.preventDefault();
                scrollIntoView(target);
                closePopup(document.querySelector('.popup-menu'));
                handlerMenu();
            } else if (target.closest('.link-list-menu')) {
                event.preventDefault();
                closePopup(document.querySelector('.popup-menu'));
                handlerMenu();
            }
        }
        else {console.log(target)};
    }) 
}   
export default bodyListeners;