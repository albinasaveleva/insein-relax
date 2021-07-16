import closePopup from "./closePopup";
import openPopup from "./openPopup";

const handlerPopupThank = () => {
    const popup = document.querySelector('.popup-thank');
    openPopup(popup);

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (popup.style.visibility === 'visible') {
            if (target.matches('.popup-thank') || 
            (target.matches('.close') && target.closest('.popup-thank'))) {
                closePopup(popup);
            } 
        }
    });
};
export default handlerPopupThank;