package demo.locators;

import org.openqa.selenium.By;

public interface LoginPageLocator {

        By APP_NAME             = By.id("tv_app_name");

        By INPUT_PHONE          = By.id("et_phone");
        By INPUT_PASSWORD       = By.id("et_password");

        By BUTTON_LOGIN         = By.id("btn_login");
        By LINK_FORGOT          = By.id("tv_forgot");
        By LINK_REGISTER_HERE   = By.id("tv_register_here");

        By TXT_NOT_REGISTER     = By.id("tv_not_yet_registered");
        By WARNING_TEXT       = By.id("textinput_error");
        By POP_UP_NOTIFICATION = By.id("cp_view");

}
