import {Drawable} from "../Drawable.js";
import {roundedRect} from "../../utils/DrawUtils.js"

export class Score extends Drawable {
    constructor(context, x, y, controller) {
        super(context, x, y);

        this.setSize(168, 48);
        this.text = "0000";
        this.controller = controller;
        this.setImage('scripts/resources/coin.png')
    }

    draw() {
        this.context.fillStyle = "#222226";
        roundedRect(this.context, this.x, this.y, this.width, this.height, 20, true);
        this.context.fillStyle = 'white'
        this.context.font = '36px FredokaOne';
        this.context.fillText(this.controller.score, this.x + 45, this.y + this.height / 2 + 13);

        try {
            this.drawImage(this.context, this.image, this.x - 10, this.y, this.height, this.height, 0);
        } catch (e) {

        }
    }
}