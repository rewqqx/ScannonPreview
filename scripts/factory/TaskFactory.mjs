import {Task} from '../objects/implementations/Task.mjs'
import {readTaskFromFile} from "../utils/TaskReader.mjs";

export class TaskFactory {

    constructor(scene, levelPath) {
        this.counter = 0;
        this.counterLimit = 200;
        this.index = 0;
        this.tasks = readTaskFromFile(levelPath);
        this.scene = scene;
        this.createdTasks = []
    }

    createTask(data) {
        let task = new Task(this.scene.context, 700, 0);
        task.setData(data);


        this.scene.items.push(task);
        this.createdTasks.push(task);
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

    getLastNotHitTask() {
        for (let i = 0; i < this.createdTasks.length; i++) {
            let task = this.createdTasks[i];
            if (task.reward !== undefined && task.reward > 0 && !task.isCollided) {
                return task
            }
        }
        return undefined;
    }

    deleteExpiredChildren() {
        for (let i = 0; i < this.createdTasks.length; i++) {
            let task = this.createdTasks[i];
            if (task.reward !== undefined && task.reward > 0 && !task.isCollided) {
                return task
            }
        }
    }
}