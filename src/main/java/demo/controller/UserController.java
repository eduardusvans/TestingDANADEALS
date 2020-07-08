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

        return RestAssured
                .given()
                .baseUri(url)
                .basePath(path)
                .log()
                .all()
                .header("Content-type", "application/json")
                .header("Accept", "*/*")
                .body(loginRequest)
                .post("/auth/login");
    }

    public static Response postLogout(LogoutRequest logoutRequest, String id, String bearerToken) {

        return RestAssured
                .given()
                .baseUri(url)
                .basePath(path)
                .log()
                .all()
                .header("Authorization",
                        "Bearer " + bearerToken)
                .header("Content-type", "application/json")
                .header("Accept", "*/*")
                .body(logoutRequest)
                .post(String.format("/user/%s/logout",id));
    }


}
