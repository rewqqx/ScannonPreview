import {Drawable} from "../Drawable.mjs";

export class Task extends Drawable {

    constructor(context, x, y) {
        super(context, x, y);

        this.setSize(300, 150);

        this.speedX = 0;
        this.speedY = 1;

        this.color = 'blue'
    }

    draw() {
        this.context.fillStyle = this.color
        this.context.rect(this.x, this.y, this.width, this.height);
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
}