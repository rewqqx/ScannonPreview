package net.scannon.as.database.adapter.implementation;

import net.scannon.as.database.adapter.DatabaseAdapter;
import net.scannon.as.inerfaces.JSONElement;
import net.scannon.as.objects.Statistic;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class StatisticAdapter extends DatabaseAdapter {

    public StatisticAdapter() {
        super();
        tableName = "statistics";
    }


    public boolean createStatistic(Statistic statistic) {
        Connection connection = database.getConnection();

        try (Statement statement = connection.createStatement()) {
            String query = "INSERT INTO " + tableName + " (user_id, error_id, pos_amount, neg_amount) VALUES " + statistic.toString() + ";";
            return statement.execute(query);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    public Statistic getStatistic(int userID, int statisticID) {
        Connection connection = database.getConnection();

        try (Statement statement = connection.createStatement()) {
            String query = "SELECT * FROM " + tableName + " WHERE user_id = " + userID + " and " + "error_id = " + statisticID + ";";

            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                int posAmount = resultSet.getInt("pos_amount");
                int negAmount = resultSet.getInt("neg_amount");

                return new Statistic(userID, statisticID, posAmount, negAmount);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        Statistic newStat = new Statistic(userID, statisticID, 0, 0);

        if (createStatistic(newStat)) {
            return newStat;
        }

        return null;
    }

    public boolean setStatistics(Statistic statistic) {
        Connection connection = database.getConnection();

        try (Statement statement = connection.createStatement()) {
            String query = "UPDATE " + tableName + " SET pos_amount=" + statistic.getPosAmount() + ", neg_amount = " + statistic.getNegAmount() + " WHERE user_id = " + statistic.getUserID() + " AND error_id = " + statistic.getStatisticID() + ";";
            return statement.execute(query);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    public List<JSONElement> getAllStatisticsForUser(int userID) {

        List<JSONElement> res = new ArrayList<>();

        Connection connection = database.getConnection();
        try (Statement statement = connection.createStatement()) {
            String query = "select type, errors.id, pos_amount, neg_amount from errors left join statistics s on errors.id = s.error_id left join users u on s.user_id = u.id where user_id = " + userID + " or user_id is null;";
            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                int posAmount = resultSet.getInt("pos_amount");
                int negAmount = resultSet.getInt("neg_amount");
                int id = resultSet.getInt("id");

                String type = resultSet.getString("type");

                Statistic stat = new Statistic(userID, id, posAmount, negAmount);
                stat.setType(type);
                res.add(stat);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return res;
    }
}
