package demo.locators.payer.home;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface HomePayerPageLocator {

    //header
    By USER_NAME = MobileBy.id("tv_hello");
    By BALANCE_INFO = MobileBy.id("tv_wallet_balance");
    By SEARCH_VOUCHER = MobileBy.id("et_search");
    By FILTER_BUTTON = MobileBy.id("dropdown_filter");
    By SORT_BUTTON = MobileBy.id("dropdown_sort");
    By RESET_BUTTON = MobileBy.id("tv_reset");
        By TOPUP_ICON = MobileBy.id("btn_topup");
        By USER_BALANCE = MobileBy.id("tv_wallet_balance");

    //voucher
    By VOUCHERS_NAME = By.xpath("//android.widget.TextView[contains(@resource-id, 'com.team.danadeals:id/tv_voucher_name')]");
    By VOUCHER_SCROLL = MobileBy.id("com.team.danadeals:id/rv_voucher");
    By VOUCHER_PRICE_CHECK = MobileBy.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/" +
            "android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/" +
            "android.widget.FrameLayout[1]/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/" +
            "android.widget.LinearLayout[1]/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.TextView[6]");

            By VOUCHER_DISCOUNT_CHECK = MobileBy.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/" +
            "android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/" +
            "android.widget.LinearLayout/android.widget.FrameLayout[1]/android.view.ViewGroup/" +
            "android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/" +
            "androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.TextView[3]");

    By VOUCHER_NAME_FIRST = MobileBy.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/" +
            "android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.view.ViewGroup/" +
            "android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/androidx.cardview.widget.CardView/android.view.ViewGroup/" +
            "android.widget.TextView[1]");

    By MERCHANT_NAME = By.xpath("//android.widget.TextView[contains(@resource-id, 'tv_merchant_name')]");
}