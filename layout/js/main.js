'use strict';

const handlerMenu = () => {
    const popupMenu = document.querySelector('.popup-menu'),
        popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu');
    const openMenu = () => {
            popupMenu.style.visibility = 'visible';
            popupDialogMenu.style.right = '645px';
        };
    const closeMenu = () => {
        popupMenu.style.visibility = 'hidden';
        popupDialogMenu.style.right = '0';
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
handlerMenu();