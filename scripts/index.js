import {Background} from "./visual/Background.mjs";
import {Scene} from './objects/Scene.mjs'
import {Cannon} from './objects/implementations/Cannon.mjs'
import {MainMenu} from './menu/implementations/MainMenu.mjs'
import {
    readBackendConfigFromFile,
    readGroupFromFile,
    readGroupPathsFromConfig
} from "./utils/JSONReader.mjs";
import {Logger} from "./objects/Logger.mjs";

window.levelGroups = readLevelGroups();
window.logger = new Logger();

readBackendConfigFromFile("./config/backend.json");

loadFont();

let background = initBackground();
window.scene = initScene();
window.score = 0;
window.negAmount = 0;
window.posAmount = 0;


setInterval(tick, 10);

function tick() {
    background.drawBackground();
    window.scene.tick();
}

window.mainmenu = new MainMenu(document.getElementById("ui"));

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
    scene.addFixedItem(cannon);

    let botCannon = new Cannon(context, scene, 1600, 350);
    botCannon.setController("bot");
    scene.addFixedItem(botCannon);

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
        document.fonts.add(font);
        //context.font = '48px FredokaOne';
    });
}


function readLevelGroups() {
    let result = [];
    let groupPaths = readGroupPathsFromConfig("./levels/game/game_config.json");
    for (let i = 0; i < groupPaths.length; i++) {
        let path = groupPaths[i];
        result.push(readGroupFromFile(path));
    }
    return result;
}

