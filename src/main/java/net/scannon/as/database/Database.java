package net.scannon.as.database;

import net.scannon.as.exceptions.DatabaseException;
import net.scannon.as.utils.Utils;
import org.json.JSONObject;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class Database {

    private static volatile Database singleton;

    private String ip, port, login, password;


    private Connection connection;

    private Database() throws SQLException {
        readConfig();
        initDatabase();
    }

    private void readConfig() {
        JSONObject conf = Utils.readConfig("conf.json");
        ip = conf.getString("ip");
        port = conf.getString("port");
        login = conf.getString("login");
        password = conf.getString("password");
    }

    protected void initDatabase() throws SQLException {
        Properties props = new Properties();
        props.setProperty("user", login);
        props.setProperty("password", password);
        this.connection = DriverManager.getConnection("jdbc:postgresql://" + ip + ":" + port + "/postgres", props);
    }

    public static Database getDatabase() throws DatabaseException {
        try {
            if (singleton == null) {
                synchronized (Database.class) {
                    singleton = new Database();
                }
            }

            //TODO: Проверка connection. Если он отвалился пересоздай

            return singleton;
        } catch (Exception e) {
            throw new DatabaseException("Database Exception: " + e.toString());
        }
    }

    public Connection getConnection() {
        return connection;
    }

}
