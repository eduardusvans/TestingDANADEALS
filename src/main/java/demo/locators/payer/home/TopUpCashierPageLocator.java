package demo.locators.payer.home;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface TopUpCashierPageLocator {
    By VIRTUAL_ACCOUNT_NUMBER = MobileBy.id("tv_virtual_account_number");
    By TOPUP_AMOUNT_ORDER = MobileBy.id("tv_topup_amount");
    By TOPUP_BUTTON = MobileBy.id("btn_topup");
    By TOPUP_PAYMENT_PAGE = MobileBy.className("");
}
