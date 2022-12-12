package net.scannon.as.database;

import net.scannon.as.exceptions.DatabaseException;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class Database {

    private static volatile Database singleton;

    private String ip = "127.0.0.1";
    private String port = "49153";
    private String login = "postgres";
    private String password = "postgrespw";

    private Connection connection;

    private Database() throws SQLException {
        initDatabase();
    }

    protected void initDatabase() throws SQLException {
        Properties props = new Properties();
        props.setProperty("user", login);
        props.setProperty("password", password);
        this.connection = DriverManager.getConnection("jdbc:postgresql://" + ip + ":" + port + "/postgres?", props);
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
