export class SMetric {
    constructor() {
    }

    setUserID(id) {
        if (id === undefined) {
            this.userID = -1;
        } else {
            this.userID = id;
        }
    }

    setLevelID(id) {
        if (id === undefined) {
            this.levelID = -1;
        } else {
            this.levelID = id;
        }
    }

    setExpression(id) {
        if (id === undefined) {
            this.expressionID = -1;
        } else {
            this.expressionID = id;
        }
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
        if (score !== undefined) {
            this.score = 0;
        } else {
            this.score = score;
        }
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