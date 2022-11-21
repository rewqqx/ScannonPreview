export class Scene {
    constructor(context) {
        this.context = context;
        this.items = []
    }

    addItem(item) {
        this.items.push(item)
    }

    drawItems() {
        this.context.beginPath();
        this.items.forEach(value => {
            value.draw();
        })
        this.context.fill();
    }

    clearItems() {
        this.items.forEach(value => {
            value.clear();
        })
    }

    tick() {
        this.clearItems();

        this.items.forEach(value => {
            value.tick();
        })

        this.drawItems();
    }
}
