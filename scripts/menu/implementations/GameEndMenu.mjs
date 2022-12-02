import {Menu} from "../Menu.mjs";

export class GameEndMenu extends Menu {
    constructor(context) {
        super(context);
    }

    generateMenu() {
        console.log("Game end");

        let content = document.createElement("div");
        content.setAttribute("class", "content");

        let panel = document.createElement("div");
        panel.setAttribute("class", "panel");
        content.appendChild(panel);

        let header = document.createElement("h1");
        header.setAttribute("class", "sub_header");
        header.innerHTML = "Game finished"
        panel.appendChild(header);

        this.context.appendChild(content);
    }


}