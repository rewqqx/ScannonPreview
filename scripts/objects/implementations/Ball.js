import {Drawable} from "../Drawable.js";
import {Collision} from "../Collision.js";

export class Ball extends Drawable {

    constructor(context, x, y, owner) {
        super(context, x, y);

        this.setSpeed(0, 0);

        this.collision = new Collision('circle', this);
        this.collision.setRadius(this.width);
        this.collision.setOffset(32, 32);

        this.setImage('scripts/resources/stone.svg')

        this.owner = owner;
    }

    getName() {
        return 'ball'
    }

    tick() {
        this.move();
        this.setSpeed(this.speedX, this.speedY + 0.02);
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }


}