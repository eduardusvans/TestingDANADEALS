package demo.locators.payer.profile;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface ViewAccountInfoPageLocator {
    By Btn_Done_ViewAccountInfo = MobileBy.id("btn_done");
    By Back_Btn_ViewAccountInfo = MobileBy.xpath("//android.widget.ImageButton[@content-desc='Navigate up']");
}
