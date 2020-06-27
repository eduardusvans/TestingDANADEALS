package demo.locators.payer.forgotPassword;

import org.openqa.selenium.By;

public interface ResetPasswordPageLocator {
    By INPUT_NEW_PASSWORD = By.id("et_new_password");
    By INPUT_CONFIRM_NEW_PASSWORD = By.id("et_conf_password");

    By BUTTON_CHANGE = By.id("btn_change_password");
}
