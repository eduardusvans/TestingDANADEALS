package demo.controller;

import demo.request.LoginRequest;
import demo.request.LogoutRequest;
import demo.response.User;
import io.restassured.RestAssured;
import io.restassured.response.Response;

public class UserController {


    private static String url = "https://teamdeals.burrow.io";
    private static String path = "/api";

    public static Response postLogin(LoginRequest loginRequest) {
        Response response = RestAssured
                .given()
                .baseUri(url)
                .basePath(path)
                .log()
                .all()
                .header("Content-type", "application/json")
                .header("Accept", "*/*")
                .body(loginRequest)
                .post("/auth/login");

        return response;
    }

    public static Response postLogout(LogoutRequest logoutRequest, String id) {
        Response response = RestAssured
                .given()
                .baseUri(url)
                .basePath(path)
                .log()
                .all()
                .header("Content-type", "application/json")
                .header("Accept", "*/*")
                .body(logoutRequest)

                .post(String.format("/user/%s/logout",id));
        //        .post("/user/",id,"/login");
//                .post("/user/'(String.format(",id,"))'/logout");
        return response;
    }


}
