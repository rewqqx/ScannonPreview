import {Background} from "./visual/Background.mjs";
import {Scene} from './objects/Scene.mjs'
import {Cannon} from './objects/implementations/Cannon.mjs'
import {PlayerController} from "./controller/implementation/PlayerController.mjs";

let background = document.getElementById("background");
background.width = 1920;
background.height = 1080;
background.display = "";
let bgContext = background.getContext("2d");
let backgroundDrawer = new Background(bgContext);


let canvas = document.getElementById("canvas");
canvas.width = 1920;
canvas.height = 1080;
let context = canvas.getContext("2d");
canvas.style.display = "none";


let scene = new Scene(context);

let cannon = new Cannon(context, scene, 0, 500);

scene.addItem(cannon);
let controller = new PlayerController(cannon);

let gameStarted = false;

setInterval(tick, 10);

function tick() {
    backgroundDrawer.drawBackground();
    if (gameStarted) {
        scene.tick();
    }
}


document.getElementById("playButton").onclick = btnPlay;

function btnPlay() {
    gameStarted = true;
    background.style.display = "none";
    document.getElementById("menu").style.display = "none";
    canvas.style.display = "";
}


