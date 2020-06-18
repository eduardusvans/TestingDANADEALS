package demo.locators.payer.home;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface HomePayerPageLocator {

    //header
    By USER_NAME = MobileBy.id("tv_hello");
    By BALANCE_INFO = MobileBy.id("tv_wallet_balance");
    By SEARCH_VOUCHER = MobileBy.id("et_search");
    By FILTER_BUTTON = MobileBy.id("filter");
    By SORT_BUTTON = MobileBy.id("sort");
    By DELETE_SEARCH = MobileBy.id("");

    //Voucher List
    By VIEW_DETAILS_VOUCHER = MobileBy.id("");
    By BUY_BUTTON_ON_VOUCHER = MobileBy.id("");

}

