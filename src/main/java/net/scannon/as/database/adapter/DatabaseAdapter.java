package net.scannon.as.database.adapter;

import net.scannon.as.database.Database;
import net.scannon.as.exceptions.DatabaseException;

public class DatabaseAdapter {

    protected Database database;
    protected String tableName = "";

    public DatabaseAdapter() {
        try {
            this.database = Database.getDatabase();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}