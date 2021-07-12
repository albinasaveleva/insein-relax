'use strict';

import bodyListeners from "./modules/bodyListeners";
import handlerMenu from "./modules/handlerMenu";
import handlerPopupPrivacy from "./modules/handlerPopupPrivacy";
import handlerPopupRepairTypes from "./modules/handlerPopupRepairTypes";
import scrollStart from "./modules/scrollStart";

handlerPopupPrivacy();
handlerPopupRepairTypes();
bodyListeners();
handlerMenu();
scrollStart();
