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

    collideTick() {
        for (let i = 0; i < this.items.length; i++) {
            for (let k = 0; k < this.items.length; k++) {
                if (i !== k) {
                    let collisionA = this.items[i].collision;
                    let collisionB = this.items[k].collision;

                    if (collisionA !== undefined && collisionB !== undefined) {
                        if (collisionA.collide(collisionB) && collisionB.collide(collisionA)) {
                            collisionA.collideAction();
                            collisionB.collideAction();
                        }
                    }
                }
            }

        }
    }

    tick() {
        this.factory.tick();
        this.collideTick();

        this.clearItems();

        this.items.forEach(value => {
            value.tick();
        })

        this.drawItems();
    }
}
