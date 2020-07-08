package demo.locators.admin;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface NavBarAdminPageLocator {
    By home_icon = MobileBy.id("page_home_admin");
    By create_voucher = MobileBy.id("page_create_voucher");
}
