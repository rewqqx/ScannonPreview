import {Drawable} from "../Drawable.mjs";
import {Ball} from "./Ball.mjs";
import {PlayerController} from "../../controller/implementation/PlayerController.mjs";
import {Score} from "./Score.js";

export class Cannon extends Drawable {

    constructor(context, scene, x, y) {
        super(context, x, y);

        this.scene = scene;

        this.rotation = 0;
        this.relativeRotation = Math.PI;

        this.setLookAtLocation(0, 0);

        this.setSize(196, 196);

        this.setImage('scripts/resources/cannon.svg')
    }

    setController(controller) {
        if (controller === "player") {
            this.controller = new PlayerController(this);
        }

        this.score = new Score(this.context, 50, 30, this.controller);
    }

    setLookAtLocation(x, y) {
        this.targetX = x;
        this.targetY = y;

        this.calculateAngleByLookAtPoint();
    }


    calculateAngleByLookAtPoint() {
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

        if (this.score !== undefined) {
            this.score.draw();
        }
    }


    action() {
        let ball = new Ball(this.context, this.x + this.width / 2, this.y + this.height / 2, this);

        let x = this.targetX - this.x;
        let y = this.targetY - this.y;

        let speed = 5;

        let norm = Math.sqrt(x * x + y * y);

        ball.setSpeed(x * speed / norm, y * speed / norm);

        this.scene.addItem(ball);
    }
}