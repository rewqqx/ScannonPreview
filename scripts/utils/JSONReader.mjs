import {STask} from "../structures/STask.mjs";
import {SType} from "../structures/SType.mjs";
import {SStatistic} from "../structures/SStatistic.mjs";
import {SLevel} from "../structures/SLevel.js";
import {SGroup} from "../structures/SGroup.mjs";

export function readTaskFromFile(path) {
    let result = [];
    let request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200 || request.status == 0) {
                let content = request.responseText;
                let json = JSON.parse(content);
                let sequence = json.sequence;

                for (let i = 0; i < sequence.length; i++) {
                    let node = sequence[i];
                    let task = new STask();

                    task.setExpression(node.unicode);
                    task.setReward(node.scoreForHit);
                    task.setPunishment(node.scoreForSkip);
                    task.setErrors(node.types);
                    task.setTutorial(node.tutorial);

                    result.push(task);
                }
            }
        }
    }
    request.send(null);
    return result;
}

export function readLevelFromFile(path) {
    let result = new SLevel();
    let request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200 || request.status == 0) {
                let content = request.responseText;
                let json = JSON.parse(content);
                let sequences = json.sequences;
                result.setName(json.name);

                for (let i = 0; i < sequences.length; i++) {
                    let node = sequences[i];
                    let sequencePath = "./levels/sequences/" + node + ".json";
                    result.addSequence(sequencePath);
                }
            }
        }
    }
    request.send(null);
    return result;
}

export function readGroupFromFile(path) {
    let result = new SGroup();
    let request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200 || request.status == 0) {
                let content = request.responseText;
                let json = JSON.parse(content);

                let levels = json.levels;

                result.setName(json.name);
                result.setIconPath(json.icon);

                for (let i = 0; i < levels.length; i++) {
                    let node = levels[i];
                    let levelPath = "./levels/levels/" + node + ".json";
                    let sLevel = readLevelFromFile(levelPath);
                    result.addLevel(sLevel);
                }
            }
        }
    }
    request.send(null);
    return result;
}

export function readGroupPathsFromConfig(path) {
    let result = []
    let request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200 || request.status == 0) {
                let content = request.responseText;
                let json = JSON.parse(content);

                let groups = json.groups;

                for (let i = 0; i < groups.length; i++) {
                    let node = groups[i];
                    let groupPath = "./levels/groups/" + node + ".json";
                    result.push(groupPath);
                }
            }
        }
    }
    request.send(null);
    return result;
}


export function readExpressionTypes(path) {
    let result = [];
    let request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200 || request.status == 0) {
                let content = request.responseText;
                let json = JSON.parse(content);
                let types = json.types;

                for (let i = 0; i < types.length; i++) {
                    let node = types[i];
                    let sType = new SType();
                    sType.setType(node.type);
                    sType.setName(node.eng);
                    result.push(sType);
                }
            }
        }
    }
    request.send(null);
    return result;
}


export function readStatistics(url) {
    let result = []
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader("key", "03090a2d-a7bd-4a0d-97d2-95d74015f26b");
    request.setRequestHeader("name", "admin");
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200 || request.status == 0) {
                let content = request.responseText;
                let json = JSON.parse(content);
                let statistics = json.array;

                for (let i = 0; i < statistics.length; i++) {
                    let node = statistics[i];
                    let sStatistic = new SStatistic();
                    sStatistic.setType(node.type);
                    sStatistic.setID(node.id);
                    sStatistic.setPosAmount(node.pos_amount);
                    sStatistic.setNegAmount(node.neg_amount);
                    result.push(sStatistic);
                }
            }
        }
    }
    request.send();
    return result;
}