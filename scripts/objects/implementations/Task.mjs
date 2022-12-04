import {Drawable} from "../Drawable.mjs";
import {Collision} from "../Collision.mjs";
import {roundedRect} from "../../utils/DrawUtils.mjs"

export class Task extends Drawable {

    constructor(context, x, y) {
        super(context, x, y);

        this.isCollided = false;

        this.setSize(300, 150);
        this.setSpeed(0, 1);

        this.collision = new Collision('rectangle', this);
        this.collision.setSize(300, 150);
        this.collision.setOffset(150, 75);
    }

    draw() {
        this.context.fillStyle = this.selectBackgroundColor();

        roundedRect(this.context, this.x, this.y, this.width, this.height, 20, true);

        this.context.strokeStyle = this.selectBorderColor();
        this.context.lineWidth = 6;
        roundedRect(this.context, this.x, this.y, this.width, this.height, 20, false);

        this.context.fillStyle = 'white'
        this.context.font = '48px FredokaOne';
        this.context.fillText(this.text, this.x + 25, this.y + this.height / 2 + 16);
    }

    clear() {
        this.context.clearRect(this.x - 5, this.y - 5, this.width + 10, this.height + 10);
    }

    getName() {
        return 'task'
    }

    tick() {
        this.move();
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    setData(data) {
        this.data = data;
        this.text = data.expression.split("*").join("∙");

        this.context.font = '48px FredokaOne';

        this.reward = data.reward;
        this.punishment = data.punishment;
        this.types = data.errors;

        const metrics = this.context.measureText(this.text);

        this.setSize(metrics.width + 50, 100);
        this.collision.setSize(metrics.width + 50, 100);
    }

    selectBorderColor() {
        return 'white';
    }

    selectBackgroundColor() {
        if (this.isCollided) {
            if (this.reward > 0) {
                return '#84ff00';
            } else {
                return '#ff00a5';
            }
        } else {
            return '#32c9eb';
        }
    }

    collideAction(instigator) {
        if (!this.isCollided) {
            this.calculateStatistics(this.reward);
            this.isCollided = true;
            instigator.owner.controller.addScore(this.reward);
        }
    }

    calculateStatistics(value) {
        let prefix = "correct";

        if (value <= 0) {
            prefix = "error";
        }

        for (let i = 0; i < this.types.length; i++) {
            let type = this.types[i];
            let old = window.statistics.get(prefix + "_" + type);

            if (old === undefined) {
                old = 0;
            }
            
            old += 1;

            window.statistics.set(prefix + "_" + type, old);
        }
    }

}