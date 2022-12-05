import {STask} from "../objects/STask.mjs";
import {SType} from "../objects/SType.js";

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

                    result.push(task);
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
