import {TaskFactory} from "../factory/TaskFactory.mjs";
import {Background} from "../visual/Background.mjs";

export class Scene {
    constructor(context) {
        this.context = context;
        this.factory = new TaskFactory(this, "./levels/level_0.json");
        this.items = []

        this.backgroundDrawer = new Background(context);
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

        this.backgroundDrawer.drawBackground();

        this.items.forEach(value => {
            value.tick();
        })

        this.drawItems();
    }
}
