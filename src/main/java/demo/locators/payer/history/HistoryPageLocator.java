package demo.locators.payer.history;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface HistoryPageLocator {
    By In_Progress_Tab = MobileBy.xpath("//android.widget.LinearLayout[@content-desc=\"IN-PROGRESS\"]");
    By Completed_Tab = MobileBy.xpath("//android.widget.LinearLayout[@content-desc=\"COMPLETED\"]");
    By Filter_Date = MobileBy.id("tv_filter");
}
