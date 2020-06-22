package demo.locators.payer.home;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface TopUpPageLocator {
    By TOPUP_PAGE = MobileBy.className("");
    By NOMINAL_BALANCE = MobileBy.id("tv_balance");
    By NOMINAL_TOPUP = MobileBy.id("");
    By VIRTUAL_ACCOUNT_BUTTON = MobileBy.id("rb_va");
    By MERCHANT_BUTTON = MobileBy.id("rb_merchant");
    By BANK_BNI_BUTTON = MobileBy.id("tvBankBni");
    By BANK_MANDIRI_BUTTON = MobileBy.id("tvBankMandiri");
    By BANK_BCA_BUTTON = MobileBy.id("tvBankBca");
    By NEXT_BUTTON_TOPUP = MobileBy.id("btn_next");

}
