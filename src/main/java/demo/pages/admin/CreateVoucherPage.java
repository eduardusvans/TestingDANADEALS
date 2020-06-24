package demo.pages.admin;
import demo.driver.AndroidDriverInstance;
import demo.driver.WebDriverInstance;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.locators.admin.CreateVoucherPageLocator.*;
import static demo.locators.admin.HomeAdminPageLocator.BUTTON_LOGOUT;
import static demo.utils.ActionUtils.waitElement;

public class CreateVoucherPage {

    public boolean isOnCreatePage() {
        return waitElement(CREATE_PAGE, 30).isDisplayed();
    }

    public void statusVoucher() {
        AndroidDriverInstance.androidDriver.findElement(STATUS_VOUCHER).click();
    }

    public void clickStatus(String statuss){
        waitAbit(2000);
        switch (statuss.toLowerCase()) {
            case "active":
                AndroidDriverInstance.androidDriver.findElement(ACTIVE_STATUS).click();
                break;
            case "inactive":
                AndroidDriverInstance.androidDriver.findElement(INACTIVE_STATUS).click();
                break;
        }
    }

    public void inputVoucherName(String voucherName){
        AndroidDriverInstance.androidDriver.findElement(VOUCHER_NAME).sendKeys(voucherName);
    }

    public void inputMerchantId(String merchantId){
        AndroidDriverInstance.androidDriver.findElement(MERCHANT_ID).sendKeys(merchantId);
    }

    public void inputDiscount(String discount){
        AndroidDriverInstance.androidDriver.findElement(DISCOUNT).sendKeys(discount);
    }

    public void inputMaxDiscount(String maxDiscount){
        AndroidDriverInstance.androidDriver.findElement(MAX_DISCOUNT).sendKeys(maxDiscount);
    }

    public void chooseExpiredDate(String expireDate){
        AndroidDriverInstance.androidDriver.findElement(EXPIRED_DATE).sendKeys(expireDate);
    }

    public void quotaVoucher(String quotaVou){
        AndroidDriverInstance.androidDriver.findElement(QUOTA).sendKeys(quotaVou);
    }

    public void inputVoucherPrice(String vouPrice){
        AndroidDriverInstance.androidDriver.findElement(VOUCHER_PRICE).sendKeys(vouPrice);
    }

    public void clickCreateButton(){
        AndroidDriverInstance.androidDriver.findElement(CREATE_BUTTON).click();
    }

    public void waitAbit(int millis){
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
