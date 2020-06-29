package demo.pages.admin;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.admin.HomeAdminPageLocator.*;
import static demo.locators.admin.VoucherDetailAdminPageLocator.INPUT_QUOTA;
import static demo.locators.admin.VoucherDetailAdminPageLocator.TXT_STATUS;

public class HomeAdminPage {
    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 150);
        WebElement userLabel = wait
                .until(ExpectedConditions.presenceOfElementLocated(BUTTON_LOGOUT));
        return userLabel.isDisplayed();
    }

    public void clickVoucher(String statusVoucher) {
        androidDriver.findElement(VOUCHER).click();
    }

    public void clickVoucher3Param(String name,String statusVoucher, String quota) {
        androidDriver.findElement(VOUCHER).click();
    }
    public String getVoucherUpdate(){
        AndroidElement labelquota = androidDriver.findElement(INPUT_QUOTA);
        String quota = labelquota.getText();
        return quota ;
    }


}
