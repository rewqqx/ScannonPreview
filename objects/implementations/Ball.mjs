import {Drawable} from "../Drawable.mjs";

export class Ball extends Drawable {

    constructor(context, x, y) {
        super(context, x, y);

        this.setImage('resources/stone.svg')
    }

    getName() {
        return 'ball'
    }


}