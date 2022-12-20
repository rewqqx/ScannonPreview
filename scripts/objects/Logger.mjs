import {pushMetricsAdapter} from "../adapter/MetricsAdapter.mjs";

export class Logger {
    constructor() {
        this.logs = [];
    }

    pushMetric(metric) {
        metric.setDate(new Date().getTime());
        this.logs.push(metric);
    }

    cleanMetrics() {
        this.logs = [];
    }

    export() {
        pushMetricsAdapter(this.logs);
        this.cleanMetrics();
    }

}