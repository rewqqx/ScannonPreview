package net.scannon.as.database.adapter.implementation;

import net.scannon.as.database.adapter.DatabaseAdapter;
import net.scannon.as.objects.Metric;
import org.json.JSONObject;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class SequenceAdapter extends DatabaseAdapter {

    public SequenceAdapter() {
        super();
        tableName = "sequence";
    }

    public boolean insertSequence(JSONObject object) {
        Connection connection = database.getConnection();

        try (Statement statement = connection.createStatement()) {
            String query = "INSERT INTO " + tableName + " (expressions) VALUES ('" + object.toString() + "');";
            return statement.execute(query);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

}
