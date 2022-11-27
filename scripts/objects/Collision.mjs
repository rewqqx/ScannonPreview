export class Collision {
    constructor(type, drawable) {
        this.drawable = drawable;
        this.type = type;

        this.setOffset(0, 0);
    }

    setRadius(radius) {
        this.radius = radius;
    }

    setOffset(x, y) {
        this.offsetX = x;
        this.offsetY = y;
    }

    setSize(x, y) {
        this.width = x;
        this.height = y;
    }

    collideAction() {
        this.drawable.collideAction();
    }

    collide(collision) {
        if (this.type === 'circle') {
            return this.collideCircle(collision);
        } else {
            return this.collideBox(collision);
        }
    }


    // TODO: Квадрат с квадратом не нужен, и круг с кругом не нужен

    collideBox(collision) {
        if (collision.type === 'circle') {
            let x = Math.abs(collision.drawable.x + collision.offsetX - this.drawable.x - this.offsetX);
            let y = Math.abs(collision.drawable.y + collision.offsetY - this.drawable.y - this.offsetY);

            if (x > (this.width / 2 + collision.radius)) {
                return false;
            }
            if (y > (this.height / 2 + collision.radius)) {
                return false;
            }

            if (x <= (this.width / 2)) {
                return true;
            }
            if (y <= (this.height / 2)) {
                return true;
            }

            let distance = Math.sqrt((this.drawable.x + this.offsetX - collision.drawable.x - this.offsetX) * (this.drawable.x + this.offsetX - collision.drawable.x - this.offsetX) + (this.drawable.y + this.offsetY - collision.drawable.y - collision.offsetY) * (this.drawable.y + this.offsetY - collision.drawable.y - collision.offsetY));
            return distance < collision.radius + this.radius
        } else {
            if (this.drawable.x + this.offsetX < collision.drawable.x + collision.offsetX - this.width / 2) {
                return false;
            }

            if (this.drawable.x + this.offsetX > collision.drawable.x + collision.offsetX + this.width / 2 + collision.width / 2) {
                return false;
            }

            if (this.drawable.y + this.offsetY < collision.drawable.y + collision.offsetY - this.height / 2) {
                return false;
            }

            if (this.drawable.y + this.offsetY > collision.drawable.y + collision.offsetY + this.height / 2 + collision.height / 2) {
                return false;
            }

            return true;
        }
    }

    collideCircle(collision) {
        if (collision.type === 'circle') {
            let distance = Math.sqrt((this.drawable.x + this.offsetX - collision.drawable.x - this.offsetX) * (this.drawable.x + this.offsetX - collision.drawable.x - this.offsetX) + (this.drawable.y + this.offsetY - collision.drawable.y - collision.offsetY) * (this.drawable.y + this.offsetY - collision.drawable.y - collision.offsetY));
            return distance < collision.radius + this.radius;
        } else {
            let x = Math.abs(collision.drawable.x + collision.offsetX - this.drawable.x - this.offsetX);
            let y = Math.abs(collision.drawable.y + collision.offsetY - this.drawable.y - this.offsetY);

            console.log(collision.drawable.y  + " and " + this.drawable.y);
            console.log(y + " of " + (collision.height / 2 + this.radius));

            if (x > (collision.width / 2 + this.radius)) {
                return false;
            }
            if (y > (collision.height / 2 + this.radius)) {
                return false;
            }

            if (x <= (collision.width / 2)) {
                return true;
            }
            if (y <= (collision.height / 2)) {
                return true;
            }

            let distance = Math.sqrt((this.drawable.x + this.offsetX - collision.drawable.x - this.offsetX) * (this.drawable.x + this.offsetX - collision.drawable.x - this.offsetX) + (this.drawable.y + this.offsetY - collision.drawable.y - collision.offsetY) * (this.drawable.y + this.offsetY - collision.drawable.y - collision.offsetY));
            return distance < collision.radius + this.radius;
        }
    }

}