export class Controller {
    constructor(controllable) {
        this.score = 0;
        this.controllable = controllable;
    }

    addScore(add) {
        this.score += add;
    }
}