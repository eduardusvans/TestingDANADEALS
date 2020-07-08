package demo.locators.payer.home;

import org.openqa.selenium.By;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;


public interface HomePayerPageLocator {
    By GREETING = By.id("tv_hello");
    By TOPUP_ICON = MobileBy.id("btn_topup");
    By USER_BALANCE = MobileBy.id("tv_wallet_balance");
}
