package demo.locators.payer.history;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface HistoryDetailPageLocator {
    By assertHistoryDetail = MobileBy.id("tv_transaction_id");
    By BACK_BTN_HistoryDetail = MobileBy.xpath("//android.widget.ImageButton[@content-desc='Navigate up']");
}
