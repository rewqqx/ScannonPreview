import {Drawable} from "../Drawable.mjs";
import {Collision} from "../Collision.mjs";

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
        this.context.fillStyle = this.selectBorderColor();
        this.roundedRect(this.context, this.x, this.y, this.width, this.height, 10);

        this.context.fillStyle = 'white'
        this.roundedRect(this.context, this.x + 3, this.y + 3, this.width - 6, this.height - 6, 10);

        this.context.fillStyle = 'black'
        this.context.font = '48px serif';
        this.context.fillText(this.text, this.x + 25, this.y + this.height / 2 + 12);
    }

    clear() {
        this.context.clearRect(this.x - 1, this.y - 1, this.width + 2, this.height + 2);
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
        this.text = data.expression;

        this.context.font = '48px serif';

        const metrics = this.context.measureText(this.text);

        this.setSize(metrics.width + 50, 100);
    }

    selectBorderColor() {
        if (!this.isCollided) {
            return 'grey';
        }

        if (this.isCollided) {
            return 'green';
        }
    }

    collideAction() {
        if (!this.isCollided) {
            this.isCollided = true;
        }
    }
}