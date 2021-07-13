'use strict';

import accordion from "./modules/accordion";
import bodyListeners from "./modules/bodyListeners";
import checkInputs from "./modules/checkInputs";
import contactsAccordion from "./modules/contactsAccordion";
import handlerMenu from "./modules/handlerMenu";
import handlerPopupConsultation from "./modules/handlerPopupConsultation";
import handlerPopupPrivacy from "./modules/handlerPopupPrivacy";
import handlerPopupRepairTypes from "./modules/handlerPopupRepairTypes";
import handlerPopupTransparency from "./modules/handlerPopupTransparency";
import handlerRepairTypes from "./modules/handlerRepairTypes";
import reviewsSlider from "./modules/reviewsSlider";
import scrollStart from "./modules/scrollStart";
import sendForm from "./modules/sendForm";
import transparencySlider from "./modules/transparencySlider";
contactsAccordion();
sendForm();
accordion();
reviewsSlider();
checkInputs();
handlerRepairTypes();
handlerPopupConsultation();
transparencySlider();

handlerPopupTransparency();
handlerPopupPrivacy();
handlerPopupRepairTypes();
bodyListeners();
handlerMenu();
scrollStart();

window.addEventListener('resize', () => {
    transparencySlider();
    handlerRepairTypes();
    handlerPopupRepairTypes();
});
