import {SignInMenu} from "../../scripts/menu/implementations/SignInMenu.mjs"
import {MainMenu} from "../../scripts/menu/implementations/MainMenu.mjs"

let uiContext = document.getElementById("ui");
let menu = new SignInMenu(uiContext);
if (!window.pingBd){
    menu = new MainMenu(uiContext);
}
menu.generateMenu();