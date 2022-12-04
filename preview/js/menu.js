import {GameEndMenu} from "../../scripts/menu/implementations/GameEndMenu.mjs";


let uiContext = document.getElementById("ui");
let menu = new GameEndMenu(uiContext);
menu.generateMenu();