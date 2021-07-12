'use strict';

import bodyListeners from "./modules/bodyListeners";
import handlerMenu from "./modules/handlerMenu";
import handlerPopupPrivacy from "./modules/handlerPopupPrivacy";
import handlerPopupRepairTypes from "./modules/handlerPopupRepairTypes";
import handlerPopupTransparency from "./modules/handlerPopupTransparency";
import scrollStart from "./modules/scrollStart";

handlerPopupTransparency();
handlerPopupPrivacy();
handlerPopupRepairTypes();
bodyListeners();
handlerMenu();
scrollStart();
