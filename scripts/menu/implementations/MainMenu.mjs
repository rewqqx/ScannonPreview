import {Menu} from "../Menu.mjs";

export class MainMenu extends Menu {
    constructor(context, func) {
        super(context);

        this.func = func;
    }

    generateMenu() {

        let panel = document.createElement("div");
        panel.setAttribute("id", "menu");
        panel.setAttribute("class", "content");

        let div = document.createElement("div");
        panel.appendChild(div);

        let topic = document.createElement("h1");
        topic.setAttribute("class", "header");
        topic.innerHTML = "Scannon";
        div.appendChild(topic);

        panel.appendChild(this.createLevelCard());

        this.context.appendChild(panel);
    }

    createLevelCard() {
        let levelCard = document.createElement("div");
        levelCard.setAttribute("class", "level_card");

        let playButton = document.createElement("div");
        playButton.setAttribute("class", "level_design");
        playButton.setAttribute("id", "playButton");
        playButton.onclick = this.func;

        let button = document.createElement("div");
        button.setAttribute("class", "button");
        button.innerHTML = "Equations";
        playButton.appendChild(button);

        let splitter = document.createElement("div");
        splitter.setAttribute("class", "spliter");
        playButton.appendChild(splitter);

        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("class", "fit-picture");
        img.setAttribute("src", "./icons/calculator.png");
        div.appendChild(img);
        playButton.appendChild(div);

        levelCard.appendChild(playButton);

        return levelCard;
    }


}