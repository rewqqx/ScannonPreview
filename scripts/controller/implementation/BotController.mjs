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

        let x = this.targetTask.x;
        let y = this.targetTask.y;

        let deltaX = x - this.controllable.targetX;
        let deltaY = y - this.controllable.targetY;

        let norm = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        deltaX /= norm;
        deltaY /= norm;

        this.controllable.setLookAtLocation(this.controllable.targetX + deltaX, this.controllable.targetY + deltaY);
    }

}