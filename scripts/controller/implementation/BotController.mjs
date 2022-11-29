import {Controller} from "../Controller.mjs";

export class BotController extends Controller {

    constructor(controllable) {
        super(controllable);
        this.factory = this.controllable.scene.factory;
    }

    tick() {
        this.targetTask = this.factory.getLastNotHitTask()

        if (this.targetTask === undefined) {
            return;
        }

        let x = this.targetTask.x + this.targetTask.width / 2;
        let y = this.targetTask.y;

        let deltaX = x - this.controllable.targetX;
        let deltaY = y - this.controllable.targetY;

        let norm = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        deltaX /= norm / 6;
        deltaY /= norm / 6;

        this.calcShoot();

        this.controllable.setLookAtLocation(this.controllable.targetX + deltaX, this.controllable.targetY + deltaY);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    calcShoot() {
        let randValue = this.getRandomInt(50);
        if (randValue == 0) {
            this.controllable.action();
        }
    }

}