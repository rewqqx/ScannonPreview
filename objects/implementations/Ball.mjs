import {Drawable} from "../Drawable.mjs";

export class Ball extends Drawable {

    constructor(context, x, y) {
        super(context, x, y);

        this.speedX = 0;
        this.speedY = 0;

        this.setImage('resources/stone.svg')
    }

    getName() {
        return 'ball'
    }

    tick() {
        this.move();
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }


}