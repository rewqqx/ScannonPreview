package net.scannon.as;

import net.scannon.as.security.AppConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
public class Controller {

    private static final Logger log = LoggerFactory.getLogger(Controller.class);

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


}
