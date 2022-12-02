import {Menu} from "../Menu.mjs";

export class GameEndMenu extends Menu {
    constructor(context) {
        super(context);
    }

    generateMenu() {
        console.log("Game end");

        let panel = document.createElement("div");
        panel.setAttribute("class", "panel");

        this.context.appendChild(panel);
    }


}