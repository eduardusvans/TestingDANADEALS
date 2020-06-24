package demo.locators.payer.profile;

import org.openqa.selenium.By;

public interface ProfilePageLocator {
    By Account_Info = By.id("profile_settings_account");
    By Change_User_Data = By.id("profile_settings_change_name");
    By assertProfilePage = By.id("tv_profile_settings");
    By LOGOUT_BTN = By.id("btn_logout");
}
