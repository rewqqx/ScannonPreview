import {GameEndMenu} from "../../scripts/menu/implementations/GameEndMenu.mjs";
import {InGameMenu} from "../../scripts/menu/implementations/InGameMenu.mjs";
import {PauseMenu} from "../../scripts/menu/implementations/PauseMenu.mjs";


let uiContext = document.getElementById("ui");
let menu = new PauseMenu(uiContext);
menu.generateMenu();