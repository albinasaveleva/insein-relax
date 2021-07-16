import closePopup from "./closePopup";

const handlerPopupError = () => {
    const popup = document.querySelector('.popup-loader');
    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (popup.style.visibility === 'visible') {
            if (target.matches('.popup-loader') || 
            (target.matches('.close') && target.closest('.popup-loader'))) {
                closePopup(popup);
            } 
        }
    });
};
export default handlerPopupError;