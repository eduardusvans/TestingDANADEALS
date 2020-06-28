package demo.locators.payer;

import org.openqa.selenium.By;

public interface RegisterPageLocator {
    By INPUT_PHONE_NUMBER = By.id("etPhoneRegister");
    By INPUT_FULL_NAME = By.id("et_full_name");
    By INPUT_EMAIL = By.id("et_email");
    By INPUT_PASSWORD = By.id("et_password");
    By INPUT_CONFIRM_PASSWORD = By.id("et_confirmpassword");

    By ICON_SHOW_PASSWORD = By.id(""); // hasn't declared yet
    By ICON_SHOW_CONFIRM_PASSWORD = By.id(""); // hasn't declared yet
    By BUTTON_CREATE_ACCOUNT = By.id("btn_register");
    By LINK_LOGIN_HERE = By.id("tv_login_here");
}
