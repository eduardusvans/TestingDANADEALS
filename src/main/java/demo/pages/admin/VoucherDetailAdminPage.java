package demo.pages.admin;

import io.appium.java_client.android.AndroidElement;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.admin.VoucherDetailAdminPageLocator.*;
import static demo.utils.ActionUtils.tapElement;
import static demo.utils.ActionUtils.waitElement;

public class VoucherDetailAdminPage {

    public boolean isOnPage() { return waitElement(BUTTON_SAVE, 15).isDisplayed(); }
    public boolean seeStatusVoucher() { return waitElement(TXT_STATUS, 15).isDisplayed(); }
    public boolean seeVoucherName() { return waitElement(TXT_VOUCHER_NAME, 15).isDisplayed(); }
    public boolean seeMerchantID() { return waitElement(TXT_MERCHANT_ID, 15).isDisplayed(); }
    public boolean seeDiscount() { return waitElement(TXT_DISCOUNT, 15).isDisplayed(); }
    public boolean seeMaxDiscount() { return waitElement(TXT_MAX_DISCOUNT, 15).isDisplayed(); }
    public boolean seeVoucherPrice() { return waitElement(TXT_VOUCHER_PRICE, 15).isDisplayed(); }
    public boolean seeExpired() { return waitElement(TXT_EXPIRED, 15).isDisplayed(); }
    public boolean seeQuota() { return waitElement(INPUT_QUOTA, 15).isDisplayed(); }
    public boolean seeIncrease() { return waitElement(BUTTON_INCREASE, 15).isDisplayed(); }
    public boolean seeDecrease() { return waitElement(BUTTON_DECREASE, 15).isDisplayed(); }
    public boolean seeSave() { return waitElement(BUTTON_SAVE, 15).isDisplayed(); }

    public void inputQuota(String quota){ androidDriver.findElement(INPUT_QUOTA).sendKeys(quota); }

    public void selectStatus() { tapElement(TXT_STATUS); }
    public void clickIncrease(){ tapElement(BUTTON_INCREASE);}
    public void clickDecrease(){ tapElement(BUTTON_DECREASE); }
    public void clickSave(){ tapElement(BUTTON_SAVE); }

    public String getQuota(){
        AndroidElement labelquota = androidDriver.findElement(INPUT_QUOTA);
        String quotas = labelquota.getText();
        return quotas ;
    }

}
