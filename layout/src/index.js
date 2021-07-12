'use strict';

import bodyListeners from "./modules/bodyListeners";
import handlerMenu from "./modules/handlerMenu";
import handlerPopupRepairTypes from "./modules/handlerPopupRepairTypes";
import scrollStart from "./modules/scrollStart";

handlerPopupRepairTypes();
bodyListeners();
handlerMenu();
scrollStart();
