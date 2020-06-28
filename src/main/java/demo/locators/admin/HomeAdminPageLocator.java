package demo.locators.admin;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface HomeAdminPageLocator {
    By VOUCHER = By.id("rv_voucher");
    By BUTTON_LOGOUT = By.id("btn_logout");
    By CREATE_VOUCHER = MobileBy.id("page_create_voucher");
    By SUCCESS_TOAST_MESSAGE = MobileBy.xpath("//android.widget.Toast[contains(@text, 'Success')]");
}
