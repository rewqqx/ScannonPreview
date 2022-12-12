package net.scannon.as;

import net.scannon.as.database.adapter.DatabaseAdapter;
import net.scannon.as.database.adapter.implementation.StatisticAdapter;
import net.scannon.as.database.adapter.implementation.UsersAdapter;
import net.scannon.as.inerfaces.JSONElement;
import net.scannon.as.objects.Statistic;
import net.scannon.as.objects.User;
import net.scannon.as.security.AppConfig;
import net.scannon.as.utils.Utils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
public class Controller {

    private UsersAdapter usersAdapter = new UsersAdapter();
    private StatisticAdapter statisticAdapter = new StatisticAdapter();


    @Autowired
    AppConfig appConfig;


    @GetMapping("/test")
    public String Testweb(HttpServletRequest request) {
        return "test";
    }

    @GetMapping("/")
    public String main() {
        return ".";
    }


    @GetMapping("/{name}/{password}")
    public String getUserKey(@PathVariable(value = "name") String name, @PathVariable(value = "password") String password) {
        String key = usersAdapter.getUserKey(name, password);

        if (key == null) {
            key = usersAdapter.getUserKey(name, password);
        }

        return key;
    }

    @GetMapping("/{token}")
    public String getUserByToken(@PathVariable(value = "token") String token) {
        String login =  usersAdapter.getUserByKey(token);
        return "{\"login\":\"" + login + "\"}";
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody Map<String, String> body) {
        String name = body.get("name");
        String password = body.get("password");

        if (!usersAdapter.createUser(name, password)) {
            String key = usersAdapter.getUserKey(name, password);

            if (key == null) {
                key = usersAdapter.getUserKey(name, password);
            }

            return "{\"token\":\"" + key + "\"}";
        }

        String key = usersAdapter.generateUserKey(name, password);
        return "{\"token\":\"" + key + "\"}";
    }

    @PostMapping("/users/{name}")
    public boolean setStatistic(@PathVariable(value = "name") String name, @RequestBody Map<String, String> body, @RequestHeader(name = "name") String token) {

        if (!name.equals(token)) {
            return false;
        }

        User user = usersAdapter.getUserInfo(name);

        body.keySet().forEach(k -> {
            String val = body.get(k);
            statisticAdapter.getStatistic(user.getId(), Integer.parseInt(k));
            statisticAdapter.setStatistics(new Statistic(user.getId(), Integer.parseInt(k), Integer.parseInt(val), 0));
        });

        return true;
    }

    @GetMapping("/users/{name}/statistics")
    public String getUserStatistic(@PathVariable(value = "name") String name, @RequestHeader(name = "name") String token) {
        if (!name.equals(token)) {
            return null;
        }

        User user = usersAdapter.getUserInfo(name);
        List<JSONElement> statistics = statisticAdapter.getAllStatisticsForUser(user.getId());

        return Utils.listToJSON(statistics);
    }

    @GetMapping("/users/{name}")
    public String getUser(@PathVariable(value = "name") String name, @RequestHeader(name = "name") String token) {
        if (!name.equals(token)) {
            return null;
        }

        return usersAdapter.getUserInfo(name).toJSON();
    }


}
