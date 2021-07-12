import closePopup from "./closePopup";
import openPopup from "./openPopup";

const handlerPopupRepairTypes = () => {
    const popup = document.querySelector('.popup-repair-types');

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.tagName.toLowerCase() === 'a' && 
        target.textContent.trim() === 'Полный список услуг и цен') {
            openPopup(popup);   
        } 
        if (popup.style.visibility === 'visible') {
            if (target.matches('.popup-repair-types') ||
            (target.matches('.close') && target.closest('.popup-repair-types'))) {
                closePopup(popup);   
            }
        }
    });

};
export default handlerPopupRepairTypes;

