import {GameEndMenu} from "../../scripts/menu/implementations/GameEndMenu.mjs";
import {InGameMenu} from "../../scripts/menu/implementations/InGameMenu.mjs";


let uiContext = document.getElementById("ui");
let menu = new InGameMenu(uiContext);
menu.generateMenu();