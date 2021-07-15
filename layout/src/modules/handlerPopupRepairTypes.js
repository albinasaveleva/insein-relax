const handlerPopupRepairTypes = () => {
    const popup = document.querySelector('.popup-repair-types');
    let repairList = [],
        repairTypes = new Set();

    const clearContent = () => {
        document.querySelector('.nav-list-popup-repair').textContent = '';
        document.querySelector('.popup-repair-types-content-table').textContent = '';
    }
    const showTitle = (text) => {
        const title = document.querySelector('#switch-inner');
        title.textContent = text;
    };
    const tabsSlider = () => {
        const arrowLeft = document.querySelector('#nav-arrow-popup-repair_left'),
            arrowRight = document.querySelector('#nav-arrow-popup-repair_right'),
            slides = document.querySelectorAll('.popup-repair-types-nav__item');
        let currentSlide = 0;

        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                return;
            } else {
                slide.style.display = 'none';
            }
        });
        const prevSlide = (elem, index, ) => {
            elem[index].style.display = 'none';
        };
        const nextSlide = (elem, index, ) => {
            elem[index].style.display = '';
        };
        arrowLeft.addEventListener('click', () => {
            prevSlide(slides, currentSlide);
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }  
            nextSlide(slides, currentSlide);      
        });
        arrowRight.addEventListener('click', () => {
            prevSlide(slides, currentSlide);
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            nextSlide(slides, currentSlide);
        });
    };
    const popupTabs = () => {
        const tabs = document.querySelector('.nav-list-popup-repair').children, 
            tabsContent = document.querySelector('.popup-repair-types-content-table').children;

        const toggleTabContent = (index) => {
            [...tabsContent].forEach((item, i) => {
                if (index === i) {
                    tabs[i].classList.add('active');
                    item.style.display = '';
                } else {
                    tabs[i].classList.remove('active');
                    item.style.display = 'none';
                }
            });
        };
        document.body.addEventListener('click', (event) => {
            let target = event.target;
            if (target.matches('.popup-repair-types-nav__item')) {
                [...tabs].forEach((item, index) => {
                    if (target === item) {
                        toggleTabContent(index);
                        showTitle(item.textContent);
                    }
                });
            }
        });
        toggleTabContent(0);
    };
    const showContent = () => {
        const showNavContent = (navItem, navIndex) => {
            const contentTable = document.querySelector('.popup-repair-types-content-table');

            let table = document.createElement('table');
            table.classList.add('popup-repair-types-content-table__list');
            let tbody = document.createElement('tbody');

            repairList.forEach((item, index) => {
                if (navItem === item.type) {
                    let tr = document.createElement('tr');
                    tr.classList.add('mobile-row');
                    if (navIndex === 0 && index === 0) {
                        tr.classList.add('showHide');
                    }
                    tr.innerHTML = `
                        <td class="repair-types-name">${item.name}</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                        <td class="repair-types-value">м<sup>2</sup></td>
                        <td class="repair-types-value">${item.cost} руб.</td>
                    `;
                    tbody.append(tr);
                }
                table.append(tbody); 
            })
            contentTable.append(table);
        };
        const showNavList = () => {
            const navList = document.querySelector('.nav-list-popup-repair');
            [...repairTypes].forEach((item, index) => {
                let nav = document.createElement('button');
                nav.classList.add('button_o', 'popup-repair-types-nav__item');
                if (index === 0) {
                    nav.classList.add('active');
                    showTitle(item);
                }
                nav.textContent = item;
                navList.append(nav);
                showNavContent(item, index);
            });
            popupTabs();
            if (window.innerWidth <= 1024) {
                tabsSlider();
            }
        };
        showNavList();
    };
    const getContent = () => {
        const url = '../../crm-backend/db.json';
        return fetch(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                } else {
                    return response.json();
                }
            })
            .then((result) => {
                repairList = result;
                result.forEach(element => {
                    repairTypes.add(element.type);
                });
                clearContent();
                showContent();
            })
            .catch((error) => console.log(error));
    };

    if (popup.style.visibility !== 'visible') {
        clearContent();   
    } else {
        getContent();
    }
};
export default handlerPopupRepairTypes;

