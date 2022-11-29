import {Background} from "./visual/Background.mjs";
import {Scene} from './objects/Scene.mjs'
import {Cannon} from './objects/implementations/Cannon.mjs'

let gameStarted = false;

loadFont();

let background = initBackground();
let scene = initScene();


setInterval(tick, 10);

function tick() {
    background.drawBackground();
    if (gameStarted) {
        scene.tick();
    }
}


document.getElementById("playButton").onclick = btnPlay;


function initScene() {
    let canvas = document.getElementById("canvas");
    canvas.width = 1920;
    canvas.height = 1080;
    canvas.style.display = "none";

    let context = canvas.getContext("2d");

    let scene = new Scene(context);

    let cannon = new Cannon(context, scene, 75, 650);
    cannon.setController("player");
    scene.addItem(cannon);

    let botCannon = new Cannon(context, scene, 1000, 650);
    botCannon.setController("bot");
    scene.addItem(botCannon);

    return scene;
}

function initBackground() {
    let bg = document.getElementById("background");
    bg.width = 1920;
    bg.height = 1080;
    bg.display = "";
    let bgContext = bg.getContext("2d");
    return new Background(bgContext);
}

function loadFont() {
    let f = new FontFace('FredokaOne', 'url(./fonts/FredokaOne-Regular.ttf)');

    f.load().then(function (font) {
        console.log('Font ready: FredokaOne');
        document.fonts.add(font);
        //context.font = '48px FredokaOne';
    });
}

function btnPlay() {
    gameStarted = true;
    document.getElementById("background").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("canvas").style.display = "";
}


