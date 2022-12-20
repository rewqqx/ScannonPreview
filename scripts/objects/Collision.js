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

    collideAction(instigator) {
        this.drawable.collideAction(instigator);
    }

    collide(collision) {
        if (this.type === collision.type) {
            return undefined;
        }

        if (this.type === 'circle') {
            return this.collideRectangleWithCircle(this, collision);
        } else {
            return this.collideRectangleWithCircle(collision, this);
        }
    }


    collideRectangleWithCircle(circle, rectangle) {
        let x = Math.abs(circle.drawable.x + circle.offsetX - rectangle.drawable.x - rectangle.offsetX);
        let y = Math.abs(circle.drawable.y + circle.offsetY - rectangle.drawable.y - rectangle.offsetY);

        if (x > (rectangle.width / 2 + circle.radius)) {
            return false;
        }
        if (y > (rectangle.height / 2 + circle.radius)) {
            return false;
        }

        if (x <= (rectangle.width / 2)) {
            return true;
        }
        if (y <= (rectangle.height / 2)) {
            return true;
        }

        let distance = Math.sqrt((rectangle.drawable.x + rectangle.offsetX - circle.drawable.x - rectangle.offsetX) * (rectangle.drawable.x + rectangle.offsetX - circle.drawable.x - rectangle.offsetX) + (rectangle.drawable.y + rectangle.offsetY - circle.drawable.y - circle.offsetY) * (rectangle.drawable.y + rectangle.offsetY - circle.drawable.y - circle.offsetY));
        return distance < circle.radius + rectangle.radius
    }

}