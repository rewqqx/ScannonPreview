package net.scannon.as.utils;

import antlr.StringUtils;
import net.scannon.as.inerfaces.JSONElement;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Utils {

    public static String listToJSON(List<JSONElement> array) {
        String res = "{ \"array\":[";

        for (JSONElement element : array) {
            res += element.toJSON() + ",";
        }

        res = res.substring(0, res.length() - 1);

        res += "]}";

        return res;
    }

    public static JSONObject readConfig(String path) {
        Map<String, String> res = new HashMap<>();
        String content = "";

        try {
            List<String> lines = Files.readAllLines(new File(path).toPath());

            for (String line : lines) {
                content += line + "\n";
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return new JSONObject(content);
    }
}
