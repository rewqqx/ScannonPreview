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


var f = new FontFace('FredokaOne', 'url(./fonts/FredokaOne-Regular.ttf)');

f.load().then(function(font) {

    // Ready to use the font in a canvas context
    console.log('Font ready: FredokaOne');

    // Add font on the html page
    document.fonts.add(font);

    context.font = '48px FredokaOne';
});


let scene = new Scene(context);
let cannon = new Cannon(context, scene, 75, 650);
cannon.setController("player");


scene.addItem(cannon);
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


