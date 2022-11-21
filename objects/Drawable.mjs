export class Drawable {
    constructor(context, x, y) {
        this.x = x;
        this.y = y;
        this.context = context;

        this.setSize(64, 64);
    }


    setSize(x, y) {
        this.sizeX = x;
        this.sizeY = y;
    }

    setImage(path) {
        let self = this
        let image = new Image();
        image.onload = function () {
            self.context.drawImage(image, self.x, self.y, self.sizeX, self.sizeY);
            self.image = image;
            console.log(self.image.src);
        }
        image.src = path;
    }

    draw() {
        try {
            this.context.drawImage(this.image, this.x, this.y, this.sizeX, this.sizeY);
        } catch (e) {

        }
    }

    getName() {
        return 'drawable'
    }
}