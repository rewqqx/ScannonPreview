import {SMetric} from "../structures/SMetric.js";

export function pushMetrics(metrics) {
    let array = "[";

    for (let i = 0; i < metrics.length; i++) {
        array += metrics[i].toJSON() + ",";
    }

    array = array.substring(0, array.length - 1);
    array += "]"

    let json = "{\"array\": " + array + "}";

    let url = "http://" + window.ip + ":" + window.port + "/metrics";


    let request = new XMLHttpRequest();
    request.open("POST", url, false);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("charset", "utf-8");
    request.setRequestHeader("name", window.userLogin);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200 || request.status == 0) {
            }
        }
    }

    request.send(json);
}

export function createClickMetric() {
    let metric = new SMetric();
    metric.setUserID(window.userID);
    metric.setEventType("click");
    metric.setLevelID(window.levelID);
    window.logger.pushMetric(metric);
}

export function createHitMetric(expressionID, score) {
    let metric = new SMetric();
    metric.setUserID(window.userID);
    metric.setEventType("hit");
    metric.setLevelID(window.levelID);
    metric.setExpression(expressionID)
    metric.setScore(score)
    window.logger.pushMetric(metric);
}

export function createErrorMetric(expressionID, score, error) {
    let metric = new SMetric();
    metric.setUserID(window.userID);
    metric.setEventType("error");
    metric.setErrorType(error);
    metric.setLevelID(window.levelID);
    metric.setExpression(expressionID)
    metric.setScore(score)
    window.logger.pushMetric(metric);
}