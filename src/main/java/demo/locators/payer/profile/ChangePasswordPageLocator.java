package demo.locators.payer.profile;

import org.openqa.selenium.By;

public interface ChangePasswordPageLocator {
    By assertChangePasswordPage = By.id("tv_change_password");
    By oldPasswordInput = By.id("et_old_password");
    By newPasswordInput = By.id("et_new_password");
    By confirmNewPasswordInput = By.id("et_conf_password");

    By warningText = By.id("textinput_error");

    By BTN_Change_Password = By.id("btn_change_password");
    By Back_BTN_Change_Password = By.xpath("//android.widget.ImageButton[@content-desc='Navigate up']");
}
