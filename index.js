import {Scene} from './objects/Scene.mjs'
import {Ball} from './objects/implementations/Ball.mjs'
import {Task} from './objects/implementations/Task.mjs'

let c = document.getElementById("canvas");
let context = canvas.getContext("2d");


/*
let image = new Image();
image.onload = function () {
    context.drawImage(image, 0, 0, 100, 100)
}
image.src = 'resources/stone.svg';*/


c.width = 1920;
c.height = 1080;

let scene = new Scene(context);

scene.addItem(new Ball(context, 50, 50))
scene.addItem(new Task(context, 100, 100))

scene.drawItems();