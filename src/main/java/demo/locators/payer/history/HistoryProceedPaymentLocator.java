package demo.locators.payer.history;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface HistoryProceedPaymentLocator {
    By isOnPageProceedPayment = MobileBy.id("tv_merchant_name");
    By BTN_PROCEED = MobileBy.id("btn_proceed");
}
