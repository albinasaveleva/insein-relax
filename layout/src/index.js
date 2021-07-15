'use strict';

import accordion from "./modules/accordion";
import bodyListeners from "./modules/bodyListeners";
import checkInputs from "./modules/checkInputs";
import contactsAccordion from "./modules/contactsAccordion";
import formulaSlider from "./modules/formulaSlider";
import handlerFormula from "./modules/handlerFormula";
// import handlerMenu from "./modules/handlerMenu";
// import handlerPopupConsultation from "./modules/handlerPopupConsultation";
import handlerPopupPortfolio from "./modules/handlerPopupPortfolio";
import handlerPopupPrivacy from "./modules/handlerPopupPrivacy";
// import handlerPopupRepairTypes from "./modules/handlerPopupRepairTypes";
import handlerPopupTransparency from "./modules/handlerPopupTransparency";
import handlerRepairTypes from "./modules/handlerRepairTypes";
import portfolioSlider from "./modules/portfolioSlider";
import reviewsSlider from "./modules/reviewsSlider";
import scrollStart from "./modules/scrollStart";
import sendForm from "./modules/sendForm";
import transparencySlider from "./modules/transparencySlider";
formulaSlider();
handlerFormula();
handlerPopupPortfolio();
portfolioSlider();
contactsAccordion();
sendForm();
accordion();
reviewsSlider();
checkInputs();
handlerRepairTypes();
// handlerPopupConsultation();
transparencySlider();

handlerPopupTransparency();
handlerPopupPrivacy();
// handlerPopupRepairTypes();
bodyListeners();
// handlerMenu();
scrollStart();

window.addEventListener('resize', () => {
    transparencySlider();
    handlerRepairTypes();
    // handlerPopupRepairTypes();
    portfolioSlider();
});
