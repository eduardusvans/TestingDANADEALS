package demo.locators.payer;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface NavBarPayerPageLocator {
    By home_icon = MobileBy.id("page_home");
    By history_icon = MobileBy.id("page_history");
    By profile_icon = MobileBy.id("page_profile");
}
