package net.scannon.as.security;

import net.scannon.as.database.adapter.implementation.UsersAdapter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken;


@Configuration
public class CustomTokenAuthenticationProvider implements AuthenticationProvider {

    private static final Logger log = LoggerFactory.getLogger(CustomTokenAuthenticationProvider.class);

    UsersAdapter usersAdapter = new UsersAdapter();


    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String[] customToken;
        try {
            customToken = (String[]) authentication.getCredentials();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        return getValidationToken(customToken[0], customToken[1]);
    }

    private Authentication getValidationToken(String name, String key) {


        if (!usersAdapter.checkUserKey(name, key)) {
            return null;
        }
        String[] customToken = new String[]{name, key};
        return new PreAuthenticatedAuthenticationToken(name, customToken);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return PreAuthenticatedAuthenticationToken.class.equals(authentication);
    }

}