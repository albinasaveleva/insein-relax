const handlerMenu = () => {
    const popupMenu = document.querySelector('.popup-menu');
    const openMenu = () => {
        popupMenu.style.visibility = 'visible';
        let style = document.createElement('style');
        style.classList.add('openMenuStyles');
        style.textContent = `
            .popup-dialog-menu {
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                }`;
        document.head.append(style);
        // popupDialogMenu.style.transform = 'translate3d(0, 0, 0)';
    };
    const closeMenu = () => {
        popupMenu.style.visibility = '';
        document.head.querySelector('.openMenuStyles').remove();
        // popupDialogMenu.style.transform = '';
    };

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.menu__icon')) {
            openMenu();
        }
        if (popupMenu.style.visibility === 'visible') {
            if(target.matches('.close-menu')) {
                closeMenu();
            } else if (target.matches('.menu-link')) {
                if (target.closest('.popup-menu-nav__item')) {
                    event.preventDefault();
                    console.log('link');
                    closeMenu();
                } else if (target.closest('.link-list-menu')) {
                    event.preventDefault();
                    console.log('link-list-menu ');
                    closeMenu();
                }
            } else {
                if (!target.matches('.menu__icon')) {
                    closeMenu();
                }
            }
        }
    });
};

export default handlerMenu;