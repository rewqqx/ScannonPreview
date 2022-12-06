import {Background} from "./visual/Background.mjs";
import {Scene} from './objects/Scene.mjs'
import {Cannon} from './objects/implementations/Cannon.mjs'
import {MainMenu} from './menu/implementations/MainMenu.mjs'
import {readStatistics} from "./utils/JSONReader.mjs";

let gameStarted = false;
let staticsMap = readStatistics("http://localhost:8080/users/admin/statistics");
window.statistics = new Map();

for (let i = 0; i < staticsMap.length; i++) {
    let stat = staticsMap[i];
    window.statistics.set(stat.type, stat);
}


loadFont();

let background = initBackground();
window.scene = initScene();


setInterval(tick, 10);

function tick() {
    background.drawBackground();
    if (gameStarted) {
        window.scene.tick();
    }
}

window.mainmenu = new MainMenu(document.getElementById("ui"), btnPlay);
window.mainmenu.generateMenu();

function initScene() {
    let canvas = document.getElementById("canvas");
    canvas.width = 1920;
    canvas.height = 1080;
    canvas.style.display = "none";

    let context = canvas.getContext("2d");
    context.width = 1920;
    context.height = 1080;

    let uiContext = document.getElementById("ui");

    let scene = new Scene(context, uiContext);

    let cannon = new Cannon(context, scene, 75, 350);
    cannon.setController("player");
    scene.addItem(cannon);

    let botCannon = new Cannon(context, scene, 1600, 350);
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
    document.getElementById("ui").style.display = "none";
    document.getElementById("canvas").style.display = "";
}


