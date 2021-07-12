'use strict';

import bodyListeners from "./modules/bodyListeners";
import handlerMenu from "./modules/handlerMenu";
import handlerPopupConsultation from "./modules/handlerPopupConsultation";
import handlerPopupPrivacy from "./modules/handlerPopupPrivacy";
import handlerPopupRepairTypes from "./modules/handlerPopupRepairTypes";
import handlerPopupTransparency from "./modules/handlerPopupTransparency";
import handlerRepairTypes from "./modules/handlerRepairTypes";
import scrollStart from "./modules/scrollStart";
import transparencySlider from "./modules/transparencySlider";
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
});
