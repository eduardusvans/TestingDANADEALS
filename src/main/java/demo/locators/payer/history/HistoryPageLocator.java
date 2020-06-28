package demo.locators.payer.history;

import org.openqa.selenium.By;

public interface HistoryPageLocator {
    By In_Progress_Tab = By.xpath("//android.widget.LinearLayout[@content-desc=\"IN-PROGRESS\"]");
    By Completed_Tab = By.xpath("//android.widget.LinearLayout[@content-desc=\"COMPLETED\"]");
    By Filter_Date = By.id("tv_filter");
}
