package demo.pages.admin;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.LoginPageLocator.*;
import static demo.locators.admin.VoucherDetailAdminPageLocator.*;

public class VoucherDetailAdminPage {
    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement savebutton = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("btn_save")));
        return savebutton.isDisplayed();
    }
    public boolean seeStatusVoucher() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement statusLabel = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("tv_voucher_status")));
        return statusLabel.isDisplayed();
    }

    public boolean seeVoucherName() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 10);
        return wait.until(ExpectedConditions.presenceOfElementLocated(By.id("tv_voucher_name_admin"))).isDisplayed();
    }
    public boolean seeMerchantID() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 10);
        return wait.until(ExpectedConditions.presenceOfElementLocated(By.id("tv_merchant_name_admin"))).isDisplayed();
    }
    public boolean seeDiscount() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 10);
        return wait.until(ExpectedConditions.presenceOfElementLocated(By.id("tv_discount_admin"))).isDisplayed();
    }
    public boolean seeMaxDiscount() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 10);
        return wait.until(ExpectedConditions.presenceOfElementLocated(By.id("tv_max_discount_admin"))).isDisplayed();
    }
    public boolean seeVoucherPrice() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 10);
        return wait.until(ExpectedConditions.presenceOfElementLocated(By.id("tv_voucher_price_admin"))).isDisplayed();
    }
    public boolean seeExpired() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 10);
        return wait.until(ExpectedConditions.presenceOfElementLocated(By.id("tv_expired_admin"))).isDisplayed();
    }

    public void selectStatus(String statusName) {
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
        androidDriver.findElement(EDIT_TEXT_QUOTA).sendKeys(quota);
    }

    public void clickIncrease(){ androidDriver.findElement(BUTTON_INCREASE).click(); }
    public void clickDecrease(){ androidDriver.findElement(BUTTON_DECREASE).click(); }
    public void clickSave(){ androidDriver.findElement(BUTTON_SAVE).click(); }


}
