package demo.pages.admin;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.admin.HomeAdminPageLocator.*;
import static demo.locators.admin.VoucherDetailAdminPageLocator.TXT_STATUS;

public class HomeAdminPage {
    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement userLabel = wait
                .until(ExpectedConditions.presenceOfElementLocated(VOUCHER));
        return userLabel.isDisplayed();
    }

    public void clickVoucher(String statusVoucher) {
        androidDriver.findElement(VOUCHER).click();
        String xpath = "";
        List<AndroidElement> statuss = androidDriver.findElements(By.xpath(xpath));

        for (AndroidElement status : statuss) {
            if (status.getText().equalsIgnoreCase(statusVoucher)) {
                status.click();
                break;
            }
        }

    }
}
