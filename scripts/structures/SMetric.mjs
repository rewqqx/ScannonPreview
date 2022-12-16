export class SMetric {
    constructor() {
    }

    setUserID(id) {
        this.userID = id;
    }

    setLevelID(id) {
        this.levelID = id;
    }

    setExpression(id) {
        this.expressionID = id;
    }

    setEventType(type) {
        this.eventType = type;
    }

    setErrorType(type) {
        this.errorType = type;
    }

    setHitExpression(expression) {
        this.expression = expression;
    }

    setScore(score) {
        this.score = score;
    }

    setDate(date) {
        this.date = date;
    }

    toJSON() {
        let json = {
            "user_id": this.userID,
            "level_id": this.levelID,
            "expression_id": this.expressionID,
            "event_type": this.eventType,
            "error_type": this.errorType,
            "hit_expression": this.expression,
            "score": this.score,
            "timestamp": this.date
        }

        return JSON.stringify(json)
    }
}