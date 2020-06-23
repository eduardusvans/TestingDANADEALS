package demo.hooks;

import demo.controller.UserController;
import demo.request.LogoutRequest;
import demo.response.Data;
import demo.response.User;
import io.cucumber.java.After;
import io.restassured.response.Response;

import static demo.steps_definitions.LoginStepsDefinitions.getId;
import static demo.steps_definitions.LoginStepsDefinitions.getToken;


public class LoginHooks {

    @After(value = "@Login")
    public void logout(){
        User user = new User();
        Data data = new Data();
        String id = user.getIdUser();
        String token = data.getToken();

        LogoutRequest logoutRequest = new LogoutRequest();

        logoutRequest.setId(id);
        logoutRequest.setToken(token);

        Response response = UserController.postLogout(logoutRequest,id);
        response.getBody().prettyPrint();
    }


}
