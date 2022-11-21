import {Drawable} from "../Drawable.mjs";

class Cannon extends Drawable {

    constructor(context, x, y) {
        super(context, x, y);

        this.setLookAtLocation(0, 0);

        this.setImage('resources/cannon.svg')
    }

    setLookAtLocation(x, y) {
        this.targetX = x;
        this.targetY = y;
    }

}