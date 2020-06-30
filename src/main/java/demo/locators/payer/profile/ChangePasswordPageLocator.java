package demo.locators.payer.profile;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface ChangePasswordPageLocator {
    By oldPasswordInput = MobileBy.id("et_old_password");
    By newPasswordInput = MobileBy.id("et_new_password");
    By confirmNewPasswordInput = MobileBy.id("et_conf_password");

    By ShowPassword1 = MobileBy.xpath("(//android.widget.ImageButton[@content-desc='Show password'])[1]");
    By ShowPassword2 = MobileBy.xpath("(//android.widget.ImageButton[@content-desc='Show password'])[2]");
    By ShowPassword3 = MobileBy.xpath("(//android.widget.ImageButton[@content-desc='Show password'])[3]");

    By warningText = MobileBy.id("textinput_error");

    By BTN_Change_Password = MobileBy.id("btn_change_password");
    By Back_BTN_Change_Password = MobileBy.xpath("//android.widget.ImageButton[@content-desc='Navigate up']");
}
