package demo.pages.admin;
import demo.driver.AndroidDriverInstance;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;
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
        boolean mixMerchant = false;
        boolean mixStatus = false;
        int counter = 0;

        do {
            if (!mixMerchant) {
                List<AndroidElement> nameList = AndroidDriverInstance.androidDriver.findElements(VOUCHER_MERCHANT_NAME);
                for (AndroidElement name : nameList) {
                    if (!name.getText().equalsIgnoreCase(nameList.get(0).getText())) {
                        mixMerchant = true;
                        break;
                    }
                }
            }
            if (!mixStatus) {
                List<AndroidElement> statusList = AndroidDriverInstance.androidDriver.findElements(VOUCHER_STATUS);
                for (AndroidElement status : statusList) {
                    if (!status.getText().equalsIgnoreCase(statusList.get(0).getText())) {
                        mixStatus = true;
                        break;
                    }
                }
            }

            scrollDown();
            waitABit(2000);
            counter++;
            if (counter >= 100) {
                return false;
            }
        } while (!mixStatus && !mixMerchant);
        return true;
    }

    public boolean checkKeywordVoucherPresence(String keyword) {
        int counter = 0;

        do {
            List<AndroidElement> nameList = AndroidDriverInstance.androidDriver.findElements(VOUCHER_MERCHANT_NAME);
            for (AndroidElement name : nameList) {
                if (!name.getText().equalsIgnoreCase(keyword)) {
                    return false;
                }
            }

        scrollDown();
        waitABit(2000);
        counter++;

        } while (counter <= 3);

        return true;
    }

    public boolean checkStatusVoucherPresence(String chosenStatus) {
        int counter = 0;

        do {
            List<AndroidElement> statusList = AndroidDriverInstance.androidDriver.findElements(VOUCHER_STATUS);
            for (AndroidElement status : statusList) {
                if (!status.getText().equalsIgnoreCase(chosenStatus)) {
                    return false;
                }
            }

            scrollDown();
            waitABit(2000);
            counter++;

        } while (counter <= 3);

        return true;
    }

    public static void scrollDown() {
        AndroidElement screen = getElement(RECYCLE_VIEW_VOUCHER);
        Point center =  screen.getCenter();
        int startX = 20;
        int startY = (int) (center.getY() * 1.5);
        int endX = 20;
        int endY = (int) (center.getY() * 0.5);
        @SuppressWarnings("rawtypes")
        TouchAction scroll = new TouchAction(androidDriver);
        scroll.press(PointOption.point(startX, startY))
                .moveTo(PointOption.point(endX, endY)).perform();
    }

}
