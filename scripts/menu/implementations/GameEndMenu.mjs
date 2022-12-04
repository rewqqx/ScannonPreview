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

        let topLine = document.createElement("div");
        topLine.setAttribute("class", "topline");
        panel.appendChild(topLine)

        let header = document.createElement("h1");
        header.setAttribute("class", "header_white");
        header.innerHTML = "Game finished"
        topLine.appendChild(header);

        this.context.appendChild(content);
    }


}