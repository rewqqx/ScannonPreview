package net.scannon.as.objects;

import net.scannon.as.inerfaces.JSONElement;

public class User implements JSONElement {

    private int id;
    private String name;
    private String password;
    private String key;

    public User(int id, String name, String password, String key) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.key = key;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    @Override
    public String toJSON() {
        return "{\"id\":" + id + ",\"name\":\"" + name + "\", \"password\":\"" + password + "\", \"key\":\"" + key + "\"}";
    }
}
