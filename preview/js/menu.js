import {SignInMenu} from "../../scripts/menu/implementations/SignInMenu.mjs"


let uiContext = document.getElementById("ui");
let menu = new SignInMenu(uiContext);
menu.generateMenu();