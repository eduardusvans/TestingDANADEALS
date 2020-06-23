package demo.locators.payer.home;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

import java.lang.reflect.MalformedParameterizedTypeException;

public interface VoucherCashierPageLocator {

    By CASHIER_PAGE_TEXT = MobileBy.id("tv_pay_method");
    By VOUCHER_NAME = MobileBy.id("tv_voucher_name");
    By VOUCHER_PRICE = MobileBy.id("tv_price");
    By CONFIRM_PAYMENT_TEXT = MobileBy.id("tv_confirm");
    By BACK_BUTTON = MobileBy.AccessibilityId("Navigate up");
    By PAY_BUTTON = MobileBy.id("btn_pay");

}