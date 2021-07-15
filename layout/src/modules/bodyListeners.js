import closePopup from "./closePopup";
import handlerMenu from "./handlerMenu";
import handlerPopupRepairTypes from "./handlerPopupRepairTypes";
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
                openPopup(document.querySelector('.popup-repair-types'));
                handlerPopupRepairTypes();
            } 
        } else if (target.tagName.toLowerCase() === 'a' &&
            target.textContent.trim() === 'Полный список услуг и цен') {
                openPopup(document.querySelector('.popup-repair-types'));
                handlerPopupRepairTypes();
        } else if (target.matches('.popup-repair-types') ||
            (target.matches('.close') && target.closest('.popup-repair-types'))) {
                closePopup(document.querySelector('.popup-repair-types'));
                handlerPopupRepairTypes();   
        }
        else {console.log(target)};
    }) 
}   
export default bodyListeners;