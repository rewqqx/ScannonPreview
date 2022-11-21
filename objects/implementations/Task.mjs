import {Drawable} from "../Drawable.mjs";

export class Task extends Drawable {

    constructor(context, x, y) {
        super(context, x, y);
        this.width = 300;
        this.height = 150;
        this.color = 'blue'
    }

    draw() {
        this.context.fillStyle = this.color
        this.context.rect(this.x, this.y, this.width, this.height);
    }

    getName() {
        return 'task'
    }
}