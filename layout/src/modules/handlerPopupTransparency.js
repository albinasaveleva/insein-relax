import closePopup from "./closePopup";
import openPopup from "./openPopup";
import transparencySlider from "./transparencySlider";

const handlerPopupTransparency = () => {
    const popup = document.querySelector('.popup-transparency');
    document.querySelectorAll('.transparency-item__img').forEach((item, index) => {
        item.addEventListener('click', (event) => {
            let target = event.target;
            if (target.matches('.transparency-item__img')) {
                openPopup(popup);
                transparencySlider(index);
            }
        });
    });
    document.addEventListener('click', (event) => {
        let target = event.target;
        if (popup.style.visibility === 'visible') {
            if (target.matches('.popup-transparency') || 
            (target.matches('.close') && target.closest('.popup-transparency'))) {
                closePopup(popup);
            }
        }
    });
};
export default handlerPopupTransparency;