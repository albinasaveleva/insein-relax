import closePopup from "./closePopup";
import openPopup from "./openPopup";
import docsSlider from "./docsSlider";

const handlerPopupTransparency = () => {
    const popup = document.querySelector('.popup-transparency');
    document.querySelectorAll('.transparency-item__img').forEach((item, index) => {
        item.addEventListener('click', (event) => {
            let target = event.target;
            if (target.matches('.transparency-item__img')) {
                openPopup(popup);
                docsSlider(index);
            }
        });
    });
};
export default handlerPopupTransparency;