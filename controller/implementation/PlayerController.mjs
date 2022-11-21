import {Controller} from "../Controller.mjs";

export class PlayerController extends Controller {

    constructor(controllable) {
        super(controllable);

        onmousemove = (event) => {
            this.mouseMoveEvent(event);
        };
    }

    mouseMoveEvent(event) {
        this.controllable.setLookAtLocation(event.x, event.y);
    }
}