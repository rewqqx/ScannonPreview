import {TaskFactory} from "../factory/TaskFactory.mjs";

export class Scene {
    constructor(context) {
        this.context = context;
        this.factory = new TaskFactory(this);
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
    }

    clearItems() {
        this.items.forEach(value => {
            value.clear();
        })
    }

    tick() {
        this.factory.tick();
        this.clearItems();

        this.items.forEach(value => {
            value.tick();
        })

        this.drawItems();
    }
}
