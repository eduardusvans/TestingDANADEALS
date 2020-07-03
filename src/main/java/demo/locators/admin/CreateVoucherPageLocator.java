package demo.locators.admin;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface CreateVoucherPageLocator {
    By CREATE_PAGE = MobileBy.className("tv_voucher_status");
    By STATUS_VOUCHER = MobileBy.xpath("//android.widget.TextView[contains(@text,'Active')]");
    By ACTIVE_STATUS = MobileBy.xpath("//android.widget.TextView[1]");
    By INACTIVE_STATUS = MobileBy.xpath("//android.widget.TextView[2]");
    By VOUCHER_NAME = MobileBy.id("et_voucher_name");
    By MERCHANT_ID = MobileBy.id("et_merchant_id");
    By DISCOUNT = MobileBy.id("et_discount");
    By MAX_DISCOUNT = MobileBy.id("et_max_discount");
    By EXPIRED_DATE = MobileBy.id("et_expired");
    By QUOTA = MobileBy.id("et_quota");
    By VOUCHER_PRICE = MobileBy.id("et_voucher_price");
    By CREATE_BUTTON = MobileBy.id("btn_create");

}
