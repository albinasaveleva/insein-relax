import closePopup from "./closePopup";
import openPopup from "./openPopup";

const handlerPopupPrivacy = () => {
    const popup = document.querySelector('.popup-privacy');
    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.link-privacy') && 
        (target.textContent.trim() === 'политикой конфиденциальности' ||
        target.textContent.trim() === 'Политика конфиденциальности')) {
            openPopup(popup);
        }
        if (popup.style.visibility === 'visible') {
            if (target.matches('.popup-privacy') || 
            (target.matches('.close') && target.closest('.popup-privacy'))) {
                closePopup(popup);
            } 
        }
    });
};
export default handlerPopupPrivacy;