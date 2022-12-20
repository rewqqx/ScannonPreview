import {Drawable} from "../Drawable.js";
import {roundedRect} from "../../utils/DrawUtils.js";

export class Hint extends Drawable {
    constructor(context, x, y) {
        super(context, x, y);
        this.time = 0;
        this.timeLimit = 300;
        this.shouldDraw = true;
    }

    setText(text) {
        this.text = text;
        this.context.font = '48px FredokaOne';
        const metrics = this.context.measureText(this.text);
        this.setSize(metrics.width + 50, 100);
    }

    draw() {
        if (!this.shouldDraw) {
            return;
        }
        this.context.fillStyle = this.selectBackgroundColor();

        roundedRect(this.context, this.x, this.y, this.width, this.height, 20, true);

        this.context.strokeStyle = this.selectBorderColor();
        this.context.lineWidth = 6;
        roundedRect(this.context, this.x, this.y, this.width, this.height, 20, false);

        this.context.fillStyle = 'white'
        this.context.font = '48px FredokaOne';
        this.context.fillText(this.text, this.x + 25, this.y + this.height / 2 + 16);
    }

    tick() {
        this.time += 1;
        if (this.time >= this.timeLimit) {
            this.shouldDraw = false;
            //window.scene.removeItem(this);
        }
    }

    selectBackgroundColor() {
        return '#32c9eb';
    }

    selectBorderColor() {
        return 'white';
    }
}