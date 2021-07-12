import closePopup from "./closePopup";
import openPopup from "./openPopup";

const handlerPopupConsultation = () => {
    const popup = document.querySelector('.popup-consultation');

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.button_wide')) {
            openPopup(popup);   
        } 
        if (popup.style.visibility === 'visible') {
            if (target.matches('.popup-consultation') ||
            (target.matches('.close') && target.closest('.popup-consultation'))) {
                closePopup(popup);   
            }
        }
    });

};
export default handlerPopupConsultation;