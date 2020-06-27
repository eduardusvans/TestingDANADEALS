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
import static demo.utils.ActionUtils.*;

public class HomeAdminPage {
    public boolean isOnPage() {
        return waitElement(INPUT_SEARCH_VOUCHER, 15).isDisplayed();
    }

    public void clickVoucher(String statusVoucher) {
        tapElement(VOUCHER);
    }

    public void clickVoucher3Param(String name,String statusVoucher, String quota) {
        tapElement(VOUCHER);
    }

    public String getVoucherUpdate(){
        return getElement(INPUT_QUOTA).getText();
    }

    public void inputSearchVoucher(String keyword) {
        inputElement(INPUT_SEARCH_VOUCHER, keyword);
    }

    public void clearInputSearchVoucher() {
        getElement(INPUT_SEARCH_VOUCHER).clear();
    }

    public void tapLogoutButton() {
        tapElement(BUTTON_LOGOUT);
    }

    public void tapResetButton() {
        tapElement(BUTTON_RESET);
    }

    public void tapFilterButton(String status) {
        switch (status.toLowerCase()) {
            case "active":
                tapElement(BUTTON_ACTIVE);
                break;
            case "inactive":
                tapElement(BUTTON_INACTIVE);
                break;
            default:
                tapElement(BUTTON_RESET);
        }
    }

    public boolean checkAllVouchersPresence() {
        boolean mixStatus = false;
        boolean mixMerchant = false;
        while (!mixStatus && !mixMerchant) {

        }
        return true;
    }

    public boolean checkKeywordVoucherPresence(String keyword) {
        return true;
    }

    public boolean checkStatusVoucherPresence(String chosenStatus) {
        return true;
    }

}
