package demo.locators.admin;

import org.openqa.selenium.By;

public interface HomeAdminPageLocator {
    By VOUCHER = By.id("rv_voucher");

    By INPUT_SEARCH_VOUCHER = By.id("et_search");

    By BUTTON_ACTIVE = By.id("btn_active");
    By BUTTON_INACTIVE = By.id("btn_inactive");
    By BUTTON_LOGOUT = By.id("btn_logout");
    By BUTTON_RESET = By.id("tv_reset_admin");

    By RECYCLE_VIEW_VOUCHER = By.id("rv_admin");

    By VOUCHER_MERCHANT_NAME = By.xpath("//androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.TextView[2]");
    By VOUCHER_STATUS = By.xpath("//androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.Button");

}
