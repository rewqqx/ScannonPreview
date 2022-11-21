import {Drawable} from "../Drawable.mjs";

export class Ball extends Drawable {

    constructor(context, x, y) {
        super(context, x, y);

        this.setSpeed(0, 0);

        this.setImage('resources/stone.svg')
    }

    setSpeed(x, y) {
        this.speedX = x;
        this.speedY = y;
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