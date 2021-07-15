import closePopup from "./closePopup";
import handlerMenu from "./handlerMenu";
import handlerPopupRepairTypes from "./handlerPopupRepairTypes";
import openPopup from "./openPopup";
import scrollIntoView from "./scrollIntoView";

const bodyListeners = () => {
    // console.log(document.querySelectorAll('.header-contacts__phone-number')[1])

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
        } else if (target.matches('.button_wide')) {
            openPopup(document.querySelector('.popup-consultation'));
        } else if (target.matches('.popup-consultation') ||
            (target.matches('.close') && target.closest('.popup-consultation'))) {
                closePopup(document.querySelector('.popup-consultation'));
        } else if (target.matches('.title_block')) {
            target.classList.toggle('msg-active');
        } else if (target.matches('.header-contacts__arrow') ||
            target.closest('.header-contacts__arrow') ) {
                document.querySelector('.header-contacts__arrow').classList.toggle('active');
                document.querySelector('.header-contacts__phone-number-accord').classList.toggle('active');
                document.querySelectorAll('.header-contacts__phone-number')[1].classList.toggle('active');
        } else if (target.matches('.popup-thank') || 
            (target.matches('.close') && target.closest('.popup-thank'))) {
                closePopup(document.querySelector('.popup-thank'));
        } else if (target.matches('.popup-loader') || 
            (target.matches('.close') && target.closest('.popup-loader'))) {
                closePopup(document.querySelector('.popup-loader'));
        } else if (target.matches('.link-privacy') && 
            (target.textContent.trim() === 'политикой конфиденциальности' ||
            target.textContent.trim() === 'Политика конфиденциальности')) {
                openPopup(document.querySelector('.popup-privacy'));
        } else if (target.matches('.popup-privacy') || 
            (target.matches('.close') && target.closest('.popup-privacy'))) {
                closePopup(document.querySelector('.popup-privacy'));
        } else if (target.matches('.popup-transparency') || 
            (target.matches('.close') && target.closest('.popup-transparency'))) {
                closePopup(document.querySelector('.popup-transparency'));
        }
        else if (target.matches('.button-footer') ||
                target.closest('.button-footer')) {
            event.preventDefault();
            scrollIntoView(document.querySelector('.button-footer').firstElementChild);
        }
        else {console.log(target)};
    }) 
}   
export default bodyListeners;