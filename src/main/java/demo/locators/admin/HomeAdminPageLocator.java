package demo.locators.admin;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface HomeAdminPageLocator {
    By VOUCHER = By.id("rv_voucher");

    By INPUT_SEARCH_VOUCHER = By.id("et_search");

    By BUTTON_ACTIVE = By.id("btn_active");
    By BUTTON_INACTIVE = By.id("btn_inactive");
    By BUTTON_LOGOUT = By.id("btn_logout");
    By BUTTON_RESET = By.id("tv_reset_admin");

    By PROGRESS_BAR = By.id("progress_bar_horizontal_activity_main");

    By RECYCLE_VIEW_VOUCHER = By.id("rv_admin");
    By VOUCHER_ITEM =By.id("voucher_item_admin");
    By VOUCHER_NAME = By.id("tv_voucher_name");
    By VOUCHER_MERCHANT_NAME = By.xpath("//android.widget.TextView[contains(@resource-id, 'tv_merchant_name')]");
    By VOUCHER_STATUS = By.xpath("//android.widget.Button[contains(@resource-id, 'btn_buy')]");

    By CREATE_VOUCHER = MobileBy.id("page_create_voucher");
}
