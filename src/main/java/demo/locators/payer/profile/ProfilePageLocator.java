package demo.locators.payer.profile;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface ProfilePageLocator {
    By Account_Info = MobileBy.id("profile_settings_account");
    By Change_User_Data = MobileBy.id("profile_settings_change_name");
    By LOGOUT_BTN = MobileBy.id("btn_logout");
}
