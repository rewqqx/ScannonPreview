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


    roundedRect(context, x, y, width, height, radius, fill) {
        context.beginPath();
        context.moveTo(x, y + radius);
        context.arcTo(x, y + height, x + radius, y + height, radius);
        context.arcTo(x + width, y + height, x + width, y + height - radius, radius);
        context.arcTo(x + width, y, x + width - radius, y, radius);
        context.arcTo(x, y, x, y + radius, radius);
        if (fill) {
            context.fill();
        } else {
            context.stroke();
        }
    }

    // TODO: Rename function and arguments:
    // degrees -> rotateAngleInDegrees
    // drawImage -> transformAndDraw
    // h,w,x,y
    drawImage(context, image, x, y, w, h, degrees) {
        context.save();
        context.translate(x + w / 2, y + h / 2);
        context.rotate(degrees);
        context.translate(-x - w / 2, -y - h / 2);
        context.drawImage(image, x, y, w, h);
        context.restore();
    }
}