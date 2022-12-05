package net.scannon.as;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Configuration
public class CustomFilter implements Filter {

    private static final Logger LOGGER = LoggerFactory.getLogger(CustomFilter.class);

    @Override
    public void init(FilterConfig filterConfig) {
        LOGGER.info("########## Initiating Custom filter ##########");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        LOGGER.info("Logging Request  {} : {}", request.getMethod(), request.getRequestURI());
        filterChain.doFilter(request, response);

        if (request.getRequestURI().equals("/")) {
            LOGGER.info("HOME");
        }
        LOGGER.info("Test :{}", request.getRequestURI());
        LOGGER.info("Logging Response :{}", response.getContentType());
    }

    @Override
    public void destroy() {
    }
}