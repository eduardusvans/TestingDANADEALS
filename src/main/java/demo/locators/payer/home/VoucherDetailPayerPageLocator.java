package demo.locators.payer.home;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface VoucherDetailPayerPageLocator {

    By VOUCHER_NAME = MobileBy.id("tv_voucher_name");
    By BACK_BUTTON = MobileBy.AccessibilityId("Navigate Up");
    By INSTRUCTION_TAB = MobileBy.AccessibilityId("Instruction");
    By TNC_TAB = MobileBy.AccessibilityId("T&c");
    By BUY_BUTTON_VIEW_DETAILS = MobileBy.id("btn_place");

    By DETAIL_CONTENT = MobileBy.xpath("textView2");
}
