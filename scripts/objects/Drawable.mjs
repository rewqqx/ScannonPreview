export class Drawable {
    constructor(context, x, y) {
        this.x = x;
        this.y = y;
        this.context = context;

        this.setSize(64, 64);
    }


    setSize(x, y) {
        this.width = x;
        this.height = y;
    }

    setSpeed(x, y) {
        this.speedX = x;
        this.speedY = y;
    }

    setImage(path) {
        let self = this
        let image = new Image();
        image.onload = function () {
            self.context.drawImage(image, self.x, self.y, self.width, self.height);
            self.image = image;
        }
        image.src = path;
    }

    draw() {
        try {
            this.context.drawImage(this.image, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        } catch (e) {

        }
    }

    clear() {
        this.context.clearRect(this.x - this.width / 2 - 2, this.y - this.height / 2 - 2, this.width + 4, this.height + 4);
    }

    getName() {
        return 'drawable'
    }

    tick() {
    }

    collideAction() {

    }

}