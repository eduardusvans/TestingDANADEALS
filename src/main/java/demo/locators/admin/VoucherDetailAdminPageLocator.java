package demo.locators.admin;

import org.openqa.selenium.By;

public interface VoucherDetailAdminPageLocator {

    By TXT_STATUS           = By.id("tv_voucher_status");
    By TXT_VOUCHER_NAME     = By.id("tv_voucher_name_admin");
    By TXT_MERCHANT_ID      = By.id("tv_merchant_name_admin");
    By TXT_DISCOUNT         = By.id("tv_discount_admin");
    By TXT_MAX_DISCOUNT     = By.id("tv_max_discount_admin");
    By TXT_VOUCHER_PRICE    = By.id("tv_voucher_price_admin");
    By TXT_EXPIRED          = By.id("tv_expired_admin");
    By INPUT_QUOTA          = By.id("quota_number");

    By BUTTON_INCREASE = By.id("increase");
    By BUTTON_DECREASE = By.id("decrease");
    By BUTTON_SAVE     = By.id("btn_save");

}
