package net.scannon.as.database.adapter.implementation;

import net.scannon.as.database.adapter.DatabaseAdapter;
import net.scannon.as.objects.User;
import org.json.JSONObject;


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

    public String getUserKey(String name, String password) {
        Connection connection = database.getConnection();

        try (Statement statement = connection.createStatement()) {
            String query = "SELECT * FROM " + tableName + " WHERE login = '" + name + "' and " + "password = '" + password + "';";

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


    public boolean createUser(String name, String password) {
        Connection connection = database.getConnection();

        try (Statement statement = connection.createStatement()) {
            String query = "INSERT INTO " + tableName + " (login, password) VALUES ('" + name + "','" + password + "');";
            statement.execute(query);
            return true;
        } catch (SQLException e) {
        }
        return false;
    }


    public boolean checkUserKey(String name, String key) {
        JSONObject json = getUserByKey(key);
        String user = json.getString("login");

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
            String query = "UPDATE " + tableName + " SET key='" + key + "' WHERE login = '" + name + "' AND password = '" + password + "';";
            statement.execute(query);
            return key;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public JSONObject getUserByKey(String key) {
        Connection connection = database.getConnection();

        try (Statement statement = connection.createStatement()) {
            String query = "SELECT * FROM " + tableName + " WHERE key = '" + key + "';";

            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                String name = resultSet.getString("login");
                int id = resultSet.getInt("id");
                JSONObject object = new JSONObject();
                object.put("login", name);
                object.put("id", id);
                return object;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    public User getUserInfo(String name) {
        Connection connection = database.getConnection();

        try (Statement statement = connection.createStatement()) {
            String query = "SELECT * FROM " + tableName + " WHERE login = '" + name + "';";

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
