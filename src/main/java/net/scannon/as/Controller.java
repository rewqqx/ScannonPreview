package net.scannon.as;

import net.scannon.as.database.adapter.DatabaseAdapter;
import net.scannon.as.database.adapter.implementation.UsersAdapter;
import net.scannon.as.security.AppConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
public class Controller {

    private UsersAdapter usersAdapter = new UsersAdapter();


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
        return usersAdapter.generateUserKey(name, password);
    }

    @PostMapping("/users/{name}")
    public boolean setStatistic(@PathVariable(value = "name") String name, @RequestBody Map<String, String> body, @RequestHeader(name = "name") String token) {

        if (!name.equals(token)) {
            return false;
        }

        return true;
    }

    @GetMapping("/users/{name}")
    public String getUser(@PathVariable(value = "name") String name, @RequestHeader(name = "name") String token) {
        if (!name.equals(token)) {
            return null;
        }

        return usersAdapter.getUserInfo(name).toJSON();
    }


}
