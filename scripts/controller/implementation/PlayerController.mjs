import {Controller} from "../Controller.mjs";
import {createClickMetric} from "../../utils/MetricsUtils.mjs";

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
        if (window.gamePaused) {
            return;
        }
        this.controllable.setLookAtLocation(event.x, event.y);
    }

    mouseClickEvent(event) {
        if (window.gamePaused) {
            return;
        }
        this.controllable.action();
        createClickMetric();
    }
}