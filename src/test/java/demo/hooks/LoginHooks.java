package demo.hooks;

import demo.controller.UserController;
import demo.pages.LoginPage;
import demo.request.LogoutRequest;
import io.cucumber.java.After;
import io.restassured.response.Response;

public class LoginHooks {

    @After(value = "@LoginAPI")
    public void logout(){
        String id = LoginPage.getId();
        String token = LoginPage.getToken();

        LogoutRequest logoutRequest = new LogoutRequest();

        Response response = UserController.postLogout(logoutRequest, id, token);
        response.getBody().prettyPrint();
    }


}
