import {Task} from '../objects/implementations/Task.mjs'

export class TaskFactory {

    constructor(scene) {
        this.counter = 0;
        this.counterLimit = 1000;

        this.index = 0;

        this.tasks = ["x + 5 = 10", "x = 5 + 10", "x = 10 - 5", "x = 5"]

        this.scene = scene;
    }

    createTask(data) {
        let task = new Task(this.scene.context, 300, 0);
        task.setText(data);

        this.scene.items.push(task)
    }

    incrementCounter() {
        this.counter += 1;

        if (this.counter > this.counterLimit) {
            this.createTask(this.tasks[this.index]);
            this.counter = 0;
            this.index += 1;
        }
    }

    tick() {
        this.incrementCounter();
    }
}