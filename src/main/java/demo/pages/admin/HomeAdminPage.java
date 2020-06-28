package demo.pages.admin;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.admin.HomeAdminPageLocator.VOUCHER;
import static demo.utils.ActionUtils.tapElement;

public class HomeAdminPage {
    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement userLabel = wait
                .until(ExpectedConditions.presenceOfElementLocated(VOUCHER));
        return userLabel.isDisplayed();
    }
    public void tapAnyVoucher(){ tapElement(VOUCHER); }
    public void tapVoucher(String voucherName){  }


}
