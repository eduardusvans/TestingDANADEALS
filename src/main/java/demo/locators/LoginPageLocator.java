package demo.locators;

import org.openqa.selenium.By;

public interface LoginPageLocator {
    By APP_NAME_LABEL = By.id("");
    By EDIT_TEXT_PHONE = By.id("et_phone");
    By EDIT_TEXT_PASSWORD = By.id("et_password");
    By BUTTON_LOGIN = By.id("btn_login");

    By LINK_FORGOT = By.id("tv_forgot");
    By LINK_REGISTER = By.id("tv_register_here");

    By TXT_COUNTRY_CODE = By.id("");
    By TXT_NOT_REGISTER = By.id("tv_not_yet_registered");

}
