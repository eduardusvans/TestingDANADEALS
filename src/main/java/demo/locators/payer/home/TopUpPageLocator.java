package demo.locators.payer.home;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface TopUpPageLocator {
    By TOPUP_PAGE = MobileBy.id("tv_topup_amount");
    By NOMINAL_BALANCE = MobileBy.id("tv_balance");
    By BUTTON_10K = MobileBy.id("btn_10k");
    By BUTTON_25K = MobileBy.id("btn_25k");
    By BUTTON_50K = MobileBy.id("btn_50k");
    By VIRTUAL_ACCOUNT_BUTTON = MobileBy.id("rb_va");
    By MERCHANT_BUTTON = MobileBy.id("rb_merchant");
    By BANK_BNI_BUTTON = MobileBy.id("tvBankBni");
    By BANK_MANDIRI_BUTTON = MobileBy.id("tvBankMandiri");
    By BANK_BCA_BUTTON = MobileBy.id("tvBankBca");
    By NEXT_BUTTON_TOPUP = MobileBy.id("btn_next");

}
