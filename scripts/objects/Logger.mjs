import {pushMetrics} from "../utils/MetricsUtils.mjs";

export class Logger {
    constructor() {
        this.logs = [];
    }

    pushMetric(metric) {
        metric.setDate(new Date().getTime());
        this.logs.push(metric);
        console.log(metric);
    }

    cleanMetrics() {
        this.logs = [];
    }

    export() {
        pushMetrics(this.logs);
        this.cleanMetrics();
    }

}