import {Drawable} from "../Drawable.mjs";
import {Ball} from "./Ball.mjs";

export class Cannon extends Drawable {

    constructor(context, scene, x, y) {
        super(context, x, y);

        this.scene = scene;

        this.rotation = 0;
        this.relativeRotation = Math.PI;

        this.setLookAtLocation(0, 0);

        this.setSize(196, 196);

        this.setImage('/resources/cannon.svg')
    }

    setLookAtLocation(x, y) {
        this.targetX = x;
        this.targetY = y;

        this.calculateAngle();
    }

    calculateAngle() {
        let x = this.x - this.targetX;
        let y = this.y - this.targetY;

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


    action() {
        let ball = new Ball(this.context, this.x + this.width / 2, this.y + this.height / 2);

        let x = this.targetX - this.x;
        let y = this.targetY - this.y;

        let speed = 5;

        let norm = Math.sqrt(x * x + y * y);

        ball.setSpeed(x * speed / norm, y * speed / norm);

        this.scene.addItem(ball);
    }
}