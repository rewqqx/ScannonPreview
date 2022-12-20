import {pushMetrics} from "../utils/MetricsUtils.js";

export function pushMetricsAdapter(metrics) {
    if(window.pingBd){
        pushMetrics(metrics);
    }
}