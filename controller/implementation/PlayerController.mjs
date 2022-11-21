import {Controller} from "../Controller.mjs";

export class PlayerController extends Controller {

    constructor(controllable) {
        super(controllable);

        onmousemove = (event) => {
            this.mouseMoveEvent(event);
        };

        onmousedown = (event) => {
            this.mouseClickEvent(event)
        }
    }

    mouseMoveEvent(event) {
        this.controllable.setLookAtLocation(event.x, event.y);
    }

    mouseClickEvent(event) {
        this.controllable.action();
    }
}