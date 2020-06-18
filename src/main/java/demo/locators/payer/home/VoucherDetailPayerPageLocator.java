package demo.locators.payer.home;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface VoucherDetailPayerPageLocator {

    By VOUCHER_CUSTOM_VIEW = MobileBy.id("custom_voucher");
    By BACK_BUTTON = MobileBy.id("");
    By INSTRUCTION_TAB = MobileBy.id("");
    By TNC_TAB = MobileBy.id("");
    By BUY_BUTTON_VIEW_DETAILS = MobileBy.id("btn_buy");
}
