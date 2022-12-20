import {Controller} from "../Controller.js";
import {createClickMetric} from "../../utils/MetricsUtils.js";

export class PlayerController extends Controller {

    constructor(controllable) {
        super(controllable);

        window.playerController = this

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