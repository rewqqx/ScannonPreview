package net.scannon.as.objects;

import org.json.JSONObject;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Metric {

    private String pattern = "dd-MM-yyyy HH:mm:ss";
    private SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);

    private int userID = -1, levelID = -1, expressionID = -1;
    private String eventType = "", errorType = "", hitExpression = "";

    private int score = 0;

    private Date time;


    public Metric() {

    }

    public Metric(JSONObject json) {

        if (json.has("user_id")) {
            userID = json.getInt("user_id");
        }

        if (json.has("level_id")) {
            levelID = json.getInt("level_id");
        }

        if (json.has("expression_id")) {
            expressionID = json.getInt("expression_id");
        }

        if (json.has("event_type")) {
            eventType = json.getString("event_type");
        }

        if (json.has("error_type")) {
            errorType = json.getString("error_type");
        }

        if (json.has("hit_expression")) {
            hitExpression = json.getString("hit_expression");
        }

        if (json.has("score")) {
            score = json.getInt("score");
        }

        if (json.has("timestamp")) {
            try {
                time = dateFormat.parse(json.getString("timestamp"));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public int getLevelID() {
        return levelID;
    }

    public void setLevelID(int levelID) {
        this.levelID = levelID;
    }

    public int getExpressionID() {
        return expressionID;
    }

    public void setExpressionID(int expressionID) {
        this.expressionID = expressionID;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public String getErrorType() {
        return errorType;
    }

    public void setErrorType(String errorType) {
        this.errorType = errorType;
    }

    public String getHitExpression() {
        return hitExpression;
    }

    public void setHitExpression(String hitExpression) {
        this.hitExpression = hitExpression;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String toValues() {
        if (time != null) {
            return "(" + userID + ", " + levelID + ", " + expressionID + ", '" + eventType + "', '" + errorType + "', '" + hitExpression + "', " + score + ", to_timestamp('" + dateFormat.format(time) + "', 'dd-mm-yyyy hh24:mi:ss'))";
        } else {
            return "(" + userID + ", " + levelID + ", " + expressionID + ", '" + eventType + "', '" + errorType + "', '" + hitExpression + "', " + score + ", null)";
        }
    }
}
