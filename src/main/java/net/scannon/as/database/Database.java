package net.scannon.as.database;

import net.scannon.as.exceptions.DatabaseException;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Database {

    private static volatile Database singleton;

    private Connection connection;

    private Database() throws SQLException {
        initDatabase();
    }

    protected void initDatabase() throws SQLException {
        this.connection = DriverManager.getConnection("jdbc:postgresql:[//127.0.0.1[:port]/][database][?property1=value1[&property2=value2]...]");
    }

    public static Database getDatabase() throws DatabaseException {
        try {
            if (singleton == null) {
                synchronized (Database.class) {
                    singleton = new Database();
                }
            }

            return singleton;
        } catch (Exception e) {
            throw new DatabaseException("Database Exception: " + e.toString());
        }
    }

    public Connection getConnection() {
        return connection;
    }

}
