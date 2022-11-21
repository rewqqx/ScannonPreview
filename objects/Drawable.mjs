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

    setImage(path) {
        let self = this
        let image = new Image();
        image.onload = function () {
            self.context.drawImage(image, self.x, self.y, self.width, self.height);
            self.image = image;
            console.log(self.image.src);
        }
        image.src = path;
    }

    draw() {
        try {
            this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
        } catch (e) {

        }
    }

    clear() {
        this.context.clearRect(this.x, this.y, this.width, this.height);
    }

    getName() {
        return 'drawable'
    }

    tick() {
    }
}