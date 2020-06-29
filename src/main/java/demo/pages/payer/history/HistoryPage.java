package demo.pages.payer.history;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.payer.history.HistoryPageLocator.*;

public class HistoryPage {
    public boolean isOnPageHistory() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement history_icon = wait
                .until(ExpectedConditions.presenceOfElementLocated(History_Icon));
        return history_icon.isDisplayed();
    }
}
