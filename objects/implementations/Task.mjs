import {Drawable} from "../Drawable.mjs";

export class Task extends Drawable {

    constructor(context, x, y) {
        super(context, x, y);

        this.setSize(300, 150);

        this.speedX = 0;
        this.speedY = 1;

        this.color = 'grey'

        this.text = 'x + 5 = 10'
    }

    draw() {
        this.context.fillStyle = this.color
        this.roundedRect(this.context, this.x, this.y, this.width, this.height, 10);

        this.context.fillStyle = 'white'
        this.roundedRect(this.context, this.x + 3, this.y + 3, this.width - 6, this.height - 6, 10);

        this.context.fillStyle = 'black'
        this.context.font = '48px serif';
        this.context.fillText(this.text, this.x + 50, this.y + 50);
    }

    clear() {
        this.context.clearRect(this.x, this.y, this.width, this.height);
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

    setText(text) {
        this.text = text;
    }
}