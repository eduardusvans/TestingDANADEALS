package demo.pages.admin;

import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.admin.VoucherDetailAdminPageLocator.*;

public class VoucherDetailAdminPage {

    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement savebutton = wait
                .until(ExpectedConditions.presenceOfElementLocated(BUTTON_SAVE));
        return savebutton.isDisplayed();
    }
    public boolean seeStatusVoucher() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement statusLabel = wait
                .until(ExpectedConditions.presenceOfElementLocated(TXT_STATUS));
        return statusLabel.isDisplayed();
    }

    public boolean seeVoucherName() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 10);
        return wait.until(ExpectedConditions.presenceOfElementLocated(TXT_VOUCHER_NAME)).isDisplayed();
    }
    public boolean seeMerchantID() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 10);
        return wait.until(ExpectedConditions.presenceOfElementLocated(TXT_MERCHANT_ID)).isDisplayed();
    }
    public boolean seeDiscount() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 10);
        return wait.until(ExpectedConditions.presenceOfElementLocated(TXT_DISCOUNT)).isDisplayed();
    }
    public boolean seeMaxDiscount() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 10);
        return wait.until(ExpectedConditions.presenceOfElementLocated(TXT_MAX_DISCOUNT)).isDisplayed();
    }
    public boolean seeVoucherPrice() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 10);
        return wait.until(ExpectedConditions.presenceOfElementLocated(TXT_VOUCHER_PRICE)).isDisplayed();
    }
    public boolean seeExpired() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 10);
        return wait.until(ExpectedConditions.presenceOfElementLocated(TXT_EXPIRED)).isDisplayed();
    }

    public static void selectStatus(String statusName) {
        androidDriver.findElement(TXT_STATUS).click();

        String xpath = "";
        List<AndroidElement> statuss = androidDriver.findElements(By.xpath(xpath));

        for (AndroidElement status : statuss) {
            if (status.getText().equalsIgnoreCase(statusName)) {
                status.click();
                break;
            }
        }
    }

    public void inputQuota(String quota){
        androidDriver.findElement(INPUT_QUOTA).sendKeys(quota);
    }

    public void clickIncrease(){ androidDriver.findElement(BUTTON_INCREASE).click(); }
    public void clickDecrease(){ androidDriver.findElement(BUTTON_DECREASE).click(); }
    public void clickSave(){ androidDriver.findElement(BUTTON_SAVE).click(); }


}
