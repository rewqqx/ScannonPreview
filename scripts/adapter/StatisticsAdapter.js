import {readStatistics, exportStatistics} from "../utils/StatisticsUtils.js";
import {SStatistic} from "../structures/SStatistic.js";

export function readStatisticsAdapter() {
    if (window.pingBd) {
        return readStatistics();
    } else {
        let result = [];
        let tmpStatArr = ["brackets_open_only_for_first_argument",
            "negative_first_number",
            "minus_on_minus_is_plus",
            "multiplication_commutativity",
            "additional_operands_reducing",
            "big_amount_of_transformations",
            "sum_operation_mistake",
            "mul_mistake"];
        if (window.statistics === undefined) {
            window.statistics = new Map();
            for (let i = 0; i < tmpStatArr.length; i++) {
                let sStatistic = new SStatistic();
                sStatistic.setType(tmpStatArr[i]);
                sStatistic.setID(i + 1);
                sStatistic.setPosAmount(0);
                sStatistic.setNegAmount(0);
                result.push(sStatistic);
            }
        } else {
            for (let i = 0; i < window.statistics.size; i++) {
                result.push(window.statistics.get(tmpStatArr[i]))
            }
        }
        return result;
    }
}

export function exportStatisticsAdapter() {
    if (window.pingBd) {
        exportStatistics();
    }
}