const handlerPopupPrivacy = () => {
    const popup = document.querySelector('.popup-privacy');
    const openPopup = () => {
        popup.style.visibility = 'visible';
    };
    const closePopup = () => {
        popup.style.visibility = 'hidden';
    };
    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.link-privacy') && 
        (target.textContent.trim() === 'политикой конфиденциальности' ||
        target.textContent.trim() === 'Политика конфиденциальности')) {
            openPopup();
        }
        if (popup.style.visibility === 'visible') {
            if (target.matches('.close') && target.closest('.popup-privacy')) {
                closePopup();
            } else if (target.matches('.popup-privacy')) {
                closePopup();
            }
        }
    });
};
export default handlerPopupPrivacy;