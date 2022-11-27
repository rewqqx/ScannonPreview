import {Task} from '../objects/implementations/Task.mjs'
import {readTaskFromFile} from "../utils/TaskReader.mjs";

export class TaskFactory {

    constructor(scene, levelPath) {
        this.counter = 0;
        this.counterLimit = 200;

        this.index = 0;

        this.tasks = readTaskFromFile(levelPath);

        this.scene = scene;
    }

    createTask(data) {
        let task = new Task(this.scene.context, 300, 0);
        task.setData(data);

        this.scene.items.push(task);
    }

    incrementCounter() {
        this.counter += 1;

        if (this.counter > this.counterLimit && this.index < this.tasks.length) {
            this.createTask(this.tasks[this.index]);
            this.counter = 0;
            this.index += 1;
        }
    }

    tick() {
        this.incrementCounter();
    }
}