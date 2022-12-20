import {Menu} from "../Menu.js";

export class InGameMenu extends Menu {

    constructor(context) {
        super(context);

        this.speedButtons = [];
        window.speed = 3;
    }

    generateMenu() {
        this.context.innerHTML = "";
        document.getElementById("ui").style.display = "";


        let content = document.createElement("div");
        content.setAttribute("class", "content_reverse");
        content.setAttribute("style", "background:transparent;");

        let horizontalBox = document.createElement("div");
        horizontalBox.setAttribute("class", "flexbox_horizontal");
        horizontalBox.setAttribute("style", "width: 348px; height: 48px; align-self:end; margin-bottom: 20px; margin-right:20px;");

        let button = document.createElement("div");
        button.setAttribute("class", "rectangle_button");
        button.setAttribute("style", "align-self: start; margin-left: 10px;");
        button.innerHTML = "";
        button.onclick = this.pauseGame;

        horizontalBox.appendChild(button);

        this.generateSpeedControl(horizontalBox);

        content.appendChild(horizontalBox);

        this.context.appendChild(content);
    }

    pauseGame() {
        window.scene.pauseGame();
    }

    generateSpeedControl(container) {
        for (let i = 0; i < 5; i++) {
            let menu = this;
            let button = document.createElement("div");
            button.setAttribute("class", "speed_button");
            button.setAttribute("style", "align-self: start; margin-left: 10px;");
            button.innerHTML = "";
            button.addEventListener("click", function () {
                menu.setSpeed(i);
            });
            button.addEventListener("mouseover", function () {
                menu.overButton(i);
            });
            button.addEventListener("mouseout", function () {
                menu.outButton(i);
            });


            this.speedButtons.push(button);
            container.appendChild(button);
        }

        this.outButton(3);
    }

    overButton(index) {
        for (let i = 0; i <= index; i++) {
            let button = this.speedButtons[i];
            button.setAttribute("style", "align-self: start; margin-left: 10px;background: green;");
        }

        for (let i = index + 1; i < this.speedButtons.length; i++) {
            let button = this.speedButtons[i];
            button.setAttribute("style", "align-self: start; margin-left: 10px;background: #31c8ec;");
        }
    }

    outButton(index) {
        for (let i = 0; i <= window.speed; i++) {
            let button = this.speedButtons[i];
            button.setAttribute("style", "align-self: start; margin-left: 10px;background: green;");
        }

        for (let i = window.speed + 1; i < this.speedButtons.length; i++) {
            let button = this.speedButtons[i];
            button.setAttribute("style", "align-self: start; margin-left: 10px;background: #31c8ec;");
        }
    }

    setSpeed(speed) {
        window.speed = speed;
    }
}
