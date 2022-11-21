import {Drawable} from "../Drawable.mjs";

export class Cannon extends Drawable {

    constructor(context, x, y) {
        super(context, x, y);

        this.rotation = 0;
        this.relativeRotation = Math.PI + Math.PI / 8;

        this.setLookAtLocation(0, 0);

        this.setImage('resources/cannon.svg')
    }

    setLookAtLocation(x, y) {
        this.targetX = x;
        this.targetY = y;

        this.calculateAngle();
    }

    calculateAngle() {
        let x = this.x - this.width / 2 - this.targetX;
        let y = this.y - this.height / 2 - this.targetY;

        let angle = Math.atan(y / x);

        if (x < 0) {
            this.rotation = Math.PI + angle;
        } else {
            this.rotation = angle;
        }
    }

    draw() {
        try {
            this.drawImage(this.context, this.image, this.x, this.y, this.width, this.height, this.rotation + this.relativeRotation);
        } catch (e) {

        }
    }

}