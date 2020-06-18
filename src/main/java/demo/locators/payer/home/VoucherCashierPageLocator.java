package demo.locators.payer.home;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface VoucherCashierPageLocator {

    By CONFIRM_PAYMENT_TEXT = MobileBy.id("tv_confirm");
    By BACK_BUTTON = MobileBy.id("");
    By PAY_BUTTON = MobileBy.id("btn_pay");

}