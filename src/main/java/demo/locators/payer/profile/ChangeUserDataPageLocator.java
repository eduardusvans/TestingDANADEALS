package demo.locators.payer.profile;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface ChangeUserDataPageLocator {
    By fullNameRB = MobileBy.id("rb_name");
    By mailAddressRB = MobileBy.id("rb_mail");
    By passwordRB = MobileBy.id("rb_password");
    By BTN_UPDATE = MobileBy.id("btn_update");

    By fullNameInput = MobileBy.id("et_full_name");
    By mailInput = MobileBy.id("et_email");

    By warningText = MobileBy.id("textinput_error");

    By BACK_BTN_ChangeUserData = MobileBy.xpath("//android.widget.ImageButton[@content-desc='Navigate up']");
    By assertChangeUserDataPage = MobileBy.id("tv_edit_profile");
}
