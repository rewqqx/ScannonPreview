package net.scannon.as.database.adapter.implementation;

import net.scannon.as.database.adapter.DatabaseAdapter;
import net.scannon.as.objects.Metric;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

public class MetricAdapter extends DatabaseAdapter {

    public MetricAdapter() {
        super();
        tableName = "metrics";
    }

    public boolean pushMetrics(List<Metric> metrics) {
        Connection connection = database.getConnection();

        try (Statement statement = connection.createStatement()) {
            String query = "INSERT INTO " + tableName + " (user_id, level_id, expression_id, event_type,error_type, hit_expression,score,time) VALUES ";

            for (Metric metric : metrics) {
                query += metric.toValues() + ",";
            }

            query = query.substring(0, query.length() - 1) + ";";

            System.out.println(query);

            return statement.execute(query);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }
}
