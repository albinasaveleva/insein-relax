const handlerPopupRepairTypes = () => {
    const popup = document.querySelector('.popup-repair-types');
    const openPopup = () => {
        popup.style.visibility = 'visible';
    };
    const closePopup = () => {
        popup.style.visibility = '';
    };

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.tagName.toLowerCase() === 'a' && target.textContent.trim() === 'Полный список услуг и цен') {
            openPopup();   
        } 
        if (popup.style.visibility === 'visible') {
            if (target.matches('.close') && target.closest('.popup-repair-types')) {
                closePopup();   
            } else if (target.matches('.popup-repair-types')) {
                closePopup();   
            }
        }
    });

};
export default handlerPopupRepairTypes;

