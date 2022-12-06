package net.scannon.as.objects;

import net.scannon.as.inerfaces.JSONElement;

public class Statistic implements JSONElement {

    private int userID = -1;
    private int statisticID = -1;
    private int posAmount = 0;
    private int negAmount = 0;

    private String type = "none";

    public Statistic(int userID, int statisticID, int posAmount, int negAmount) {
        this.userID = userID;
        this.statisticID = statisticID;
        this.posAmount = posAmount;
        this.negAmount = negAmount;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public int getStatisticID() {
        return statisticID;
    }

    public void setStatisticID(int statisticID) {
        this.statisticID = statisticID;
    }

    public int getPosAmount() {
        return posAmount;
    }

    public void setPosAmount(int posAmount) {
        this.posAmount = posAmount;
    }

    public int getNegAmount() {
        return negAmount;
    }

    public void setNegAmount(int negAmount) {
        this.negAmount = negAmount;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String toString() {
        return "(" + userID + ", " + statisticID + ", " + posAmount + ", " + negAmount + ")";
    }

    @Override
    public String toJSON() {
        return "{\"id\":" + statisticID + ", \"type\": \"" + type + "\", \"pos_amount\":" + posAmount + ", \"neg_amount\":" + negAmount + "}";
    }

}
