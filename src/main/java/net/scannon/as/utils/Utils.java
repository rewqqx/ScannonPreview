package net.scannon.as.utils;

import net.scannon.as.inerfaces.JSONElement;

import java.util.List;

public class Utils {

    public static String listToJSON(List<JSONElement> array) {
        String res = "{ \"array\":";

        for (JSONElement element : array) {
            res += element.toJSON() + ",";
        }

        res += "}";


        return res;
    }
}
