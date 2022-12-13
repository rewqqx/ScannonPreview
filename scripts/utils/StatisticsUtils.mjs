import {SStatistic} from "../structures/SStatistic.mjs";

export function readStatistics() {
    let url = "http://" + window.ip + ":" + window.port + "/users/" + window.userLogin + "/statistics";
    let result = []
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader("key", window.userToken);
    request.setRequestHeader("name", window.userLogin);
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

export function exportStatistics() {
    let url = "http://" + window.ip + ":" + window.port + "/users/" + window.userLogin;
    let body = new Map();

    window.statistics.forEach((value, key) => {
        let json = {"pos": value.posAmount, "neg": value.negAmount};
        posBody.set(key, JSON.stringify(json));
    });

    let request = new XMLHttpRequest();
    request.open("POST", url, false);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("charset", "utf-8");
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200 || request.status == 0) {
            }
        }
    }
    request.send(body);
}