package demo.locators.payer.profile;

import org.openqa.selenium.By;

public interface ChangeUserDataPageLocator {
    By fullNameRB = By.id("rb_name");
    By mailAddressRB = By.id("rb_mail");
    By passwordRB = By.id("rb_password");
    By BTN_UPDATE = By.id("btn_update");

    By fullNameInput = By.id("et_full_name");
    By mailInput = By.id("et_email");

    By warningText = By.id("textinput_error");

    By BACK_BTN_ChangeUserData = By.xpath("//android.widget.ImageButton[@content-desc='Navigate up']");
    By assertChangeUserDataPage = By.id("tv_edit_profile");
}
