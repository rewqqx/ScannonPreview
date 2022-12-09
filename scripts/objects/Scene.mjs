import {TaskFactory} from "../factory/TaskFactory.mjs";
import {Background} from "../visual/Background.mjs";
import {GameEndMenu} from "../menu/implementations/GameEndMenu.mjs"
import {InGameMenu} from "../menu/implementations/InGameMenu.mjs";

export class Scene {
    constructor(context, uiContext) {
        this.context = context;
        this.uiContext = uiContext;
        this.factory = new TaskFactory(this, "./levels/sequence_0.json");
        this.items = []
        this.hasGameStarted = false;
        this.doTick = false;
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
                            collisionA.collideAction(collisionB.drawable);
                            collisionB.collideAction(collisionA.drawable);
                        }
                    }
                }
            }

        }
    }

    checkGameEnd() {
        if (!this.hasGameStarted && this.factory.createdTasks.length !== 0) {
            this.hasGameStarted = true;
        }

        if (this.hasGameStarted && this.factory.createdTasks.length === 0) {
            return true;
        }

        return false;
    }

    tick() {
        if (!this.doTick) {
            return;
        }

        if (this.checkGameEnd()) {
            this.endGame();
        }

        this.factory.tick();
        this.collideTick();

        this.backgroundDrawer.drawBackground();

        this.items.forEach(value => {
            value.tick();
        })

        this.drawItems();
    }

    setDoTick(doTick) {
        this.doTick = doTick;
    }

    loadNewGame(path) {
        this.factory = new TaskFactory(this, path);
        this.doTick = true;
        this.hasGameStarted = false;

        let inGameMenu = new InGameMenu(this.uiContext);
        inGameMenu.generateMenu();
    }

    endGame() {
        this.hasGameStarted = false;
        this.menu = new GameEndMenu(this.uiContext);
        this.menu.generateMenu();
    }
}
