package demo.pages.payer.home;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.payer.home.VoucherDetailPayerPageLocator.*;

public class VoucherDetailPayerPage {
    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement voucher = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("custom_voucher")));
        return voucher.isDisplayed();
    }

}
