const handlerMenu = () => {
    const popupMenu = document.querySelector('.popup-menu');

    let style = document.createElement('style');
    style.classList.add('openMenuStyles');
    style.textContent = `
        .popup-dialog-menu {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }`;
    if (popupMenu.style.visibility === 'visible') {
        document.head.append(style);
    } else {
        document.head.querySelector('.openMenuStyles').remove();
    }
};

export default handlerMenu;