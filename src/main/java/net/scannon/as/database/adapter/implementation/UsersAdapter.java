package net.scannon.as.database.adapter.implementation;

import net.scannon.as.database.adapter.DatabaseAdapter;
import net.scannon.as.objects.User;


import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.UUID;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

public class UsersAdapter extends DatabaseAdapter {

    public UsersAdapter() {
        super();
        tableName = "users";
    }

    private String getUserKey(String name, String password) {
        Connection connection = database.getConnection();

        try (Statement statement = connection.createStatement()) {
            String query = "SELECT * FROM " + tableName + " WHERE name = '" + name + "' and " + "password = '" + password + "';";

            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                String key = resultSet.getString("key");
                return key;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    public boolean checkUserKey(String name, String password, String key) {
        String checkKey = getUserKey(name, password);

        if (checkKey == null) {
            return false;
        }

        return checkKey.equals(key);
    }


    public boolean checkUserKey(String name, String key) {
        String user = getUserByKey(key);

        if (user == null) {
            return false;
        }

        return user.equals(name);
    }

    public String generateUserKey(String name, String password) {
        Connection connection = database.getConnection();
        UUID randomUUID = UUID.randomUUID();
        String key = randomUUID.toString();
        try (Statement statement = connection.createStatement()) {
            String query = "UPDATE " + tableName + " SET key='" + key + "' WHERE name = '" + name + "' AND password = '" + password + "';";
            statement.execute(query);
            return key;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public String getUserByKey(String key) {
        Connection connection = database.getConnection();

        try (Statement statement = connection.createStatement()) {
            String query = "SELECT * FROM " + tableName + " WHERE key = '" + key + "';";

            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                String name = resultSet.getString("name");
                return name;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    public User getUserInfo(String name) {
        Connection connection = database.getConnection();

        try (Statement statement = connection.createStatement()) {
            String query = "SELECT * FROM " + tableName + " WHERE name = '" + name + "';";

            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                String password = resultSet.getString("password");
                String key = resultSet.getString("key");
                int id = resultSet.getInt("id");
                return new User(id, name, password, key);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }
}
