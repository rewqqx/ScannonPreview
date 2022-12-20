import {Menu} from "../Menu.js";

export class PauseMenu extends Menu {
    constructor(context) {
        super(context);
    }

    generateMenu() {
        this.context.innerHTML = "";
        document.getElementById("ui").style.display = "";

        let content = document.createElement("div");
        content.setAttribute("class", "content");

        let panel = document.createElement("div");
        panel.setAttribute("class", "panel");
        panel.setAttribute("style", "margin-top:20px");
        content.appendChild(panel);

        let buttonA = document.createElement("div");
        buttonA.setAttribute("class", "small_button");
        buttonA.setAttribute("style", "width: 90%; margin-top:40px;margin-bottom: 10px")
        buttonA.innerHTML = "RESUME";
        buttonA.onclick = this.resume;
        panel.appendChild(buttonA);

        let buttonB = document.createElement("div");
        buttonB.setAttribute("class", "small_button");
        buttonB.setAttribute("style", "width: 90%; margin-top:20px; margin-bottom: 10px")
        buttonB.innerHTML = "RESTART";
        buttonB.onclick = this.restart;
        panel.appendChild(buttonB);

        let buttonC = document.createElement("div");
        buttonC.setAttribute("class", "small_button");
        buttonC.setAttribute("style", "width: 90%; margin-top:20px")
        buttonC.innerHTML = "EXIT";
        buttonC.onclick = this.exit;
        panel.appendChild(buttonC);

        this.context.appendChild(content);
    }

    resume() {
        window.scene.unpauseGame();
    }

    exit() {
        window.scene.endGame();
    }

    restart() {
        window.scene.restartGame();
    }
}