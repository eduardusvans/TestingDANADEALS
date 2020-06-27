package demo.locators.payer.profile;

import org.openqa.selenium.By;

public interface ViewAccountInfoPageLocator {
    By assertAccountInfo = By.id("tv_account_info");
    By fullNameTxt = By.id("et_name");
    By mailTxt = By.id("et_email");
    By phoneNumberTxt = By.id("et_phone");
    By Btn_Done_ViewAccountInfo = By.id("btn_done");
    By Back_Btn_ViewAccountInfo = By.xpath("//android.widget.ImageButton[@content-desc='Navigate up']");
}
