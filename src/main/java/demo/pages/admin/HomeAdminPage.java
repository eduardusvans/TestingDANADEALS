package demo.pages.admin;
import demo.driver.AndroidDriverInstance;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.Point;
import org.openqa.selenium.interactions.Actions;

import java.time.Duration;
import java.util.List;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.admin.HomeAdminPageLocator.*;
import static demo.locators.admin.VoucherDetailAdminPageLocator.INPUT_QUOTA;
import static demo.locators.admin.VoucherDetailAdminPageLocator.TXT_STATUS;
import static demo.utils.ActionUtils.*;

public class HomeAdminPage {
    int keywordLength = 0;

    public boolean isOnPage() {
        return waitElement(INPUT_SEARCH_VOUCHER, 30).isDisplayed();
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
        keywordLength = keyword.length();
        tapElement(INPUT_SEARCH_VOUCHER);
        Actions action = new Actions(androidDriver);
        action.sendKeys(keyword).perform();
        hideKeyboard();
        waitABit(6500);
    }

    public void clearInputSearchVoucher() {
        tapElement(INPUT_SEARCH_VOUCHER);
        Actions action = new Actions(androidDriver);
        for (int i = 0; i < keywordLength; i++) {
            action.sendKeys(Keys.BACK_SPACE).perform();
        }
        hideKeyboard();
        waitABit(6500);
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

    public void tapVoucher(String wantedVoucher) {
        boolean isFound = false;
        int counter = 0;

        do {
            waitABit(5000);
            List<AndroidElement> vNameList = AndroidDriverInstance.androidDriver.findElements(VOUCHER_NAME);
            for (AndroidElement vName : vNameList) {
                if (vName.getText().trim().equalsIgnoreCase(wantedVoucher.trim())) {
                    vName.click();
                    isFound = true;
                    break;
                }
            }

            if (!isFound) {
                scrollDown();
                counter++;
            }

        } while (!isFound && counter <= 100);
    }

    public boolean checkProgressBar() {
        if (androidDriver.isKeyboardShown()) {
            androidDriver.hideKeyboard();
        }
        try {
            boolean status = waitElement(PROGRESS_BAR, 5).isDisplayed();
            int waitCounter = 0;
            while (status && waitCounter < 10) {
                waitABit(1000);
                status = getElement(PROGRESS_BAR).isDisplayed();
                if (!status) {
                    return false;
                }
                waitCounter++;
            }
            return false;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean checkVoucherListPresence(int timeOut) {
        try {
            return waitElement(VOUCHER_MERCHANT_NAME, timeOut).isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }

    public boolean checkAllVouchersPresence() {
        boolean mixMerchant = false;
        boolean mixStatus = false;
        String nameParam = "";
        String statusParam = "";
        int counter = 0;

        do {
            if (!mixMerchant) {
                waitABit(2500);
                List<AndroidElement> nameList = AndroidDriverInstance.androidDriver.findElements(VOUCHER_MERCHANT_NAME);
                if (counter == 0) {
                    nameParam = nameList.get(0).getText();
                    System.out.println("Set Merchant Name param = " + nameParam);
                }
                for (AndroidElement name : nameList) {
                    if (!name.getText().equalsIgnoreCase(nameParam)) {
                        System.out.println("MN OK!!!");
                        System.out.println("Merchant Name Var = " + name.getText());
                        System.out.println("Merchant Name param = " + nameParam);
                        mixMerchant = true;
                        break;
                    }
                }
            }
            if (!mixStatus) {
                waitABit(2500);
                List<AndroidElement> statusList = AndroidDriverInstance.androidDriver.findElements(VOUCHER_STATUS);
                if (counter == 0) {
                    statusParam = statusList.get(0).getText();
                    System.out.println("Set Merchant Status param = " + statusParam);
                }
                for (AndroidElement status : statusList) {
                    if (!status.getText().equalsIgnoreCase(statusParam)) {
                        System.out.println("MN OK!!!");
                        System.out.println("Merchant Status Var = " + status.getText());
                        System.out.println("Merchant Status param = " + statusParam);
                        mixStatus = true;
                        break;
                    }
                }
            }

            scrollDown();
            counter++;
            if (counter >= 100) {
                return false;
            }
        } while (!(mixStatus && mixMerchant));
        return true;
    }

    public boolean checkKeywordVoucherPresence(String keyword) {
        int counter = 0;

        do {
            waitABit(2500);
            List<AndroidElement> nameList = AndroidDriverInstance.androidDriver.findElements(VOUCHER_MERCHANT_NAME);
            for (AndroidElement name : nameList) {
                if (!name.getText().toLowerCase().startsWith(keyword.toLowerCase())) {
                    System.out.println("IT IS DIFFERENT!!!");
                    System.out.println("name = " + name.getText() + "!!!");
                    System.out.println("keyword = " + keyword + "!!!");
                    return false;
                }
            }

            scrollDown();
            System.out.println("SCROLL!!!");
            counter++;

        } while (counter <= 3);

        return true;
    }

    public boolean checkStatusVoucherPresence(String chosenStatus) {
        int counter = 0;
        do {
            waitABit(2500);
            List<AndroidElement> statusList = AndroidDriverInstance.androidDriver.findElements(VOUCHER_STATUS);
            for (AndroidElement status : statusList) {
                if (!status.getText().equalsIgnoreCase(chosenStatus)) {
                    return false;
                }
            }

            scrollDown();
            counter++;

        } while (counter <= 3);

        return true;
    }

    public static void scrollDown() {
        AndroidElement screen = androidDriver
                .findElement(By.id("rv_admin"));
        Point center =  screen.getCenter();
        int width = screen.getSize().width;
        int height = screen.getSize().height;
        int startX = center.getX() - (width / 2) + 20;
        int startY = center.getY() + (height / 3);
        int endX = center.getX() - (width / 2) + 20;
        int endY = center.getY() - (height / 3);
        System.out.println("Xstart, Ystart = " + startX + " " + startY);
        System.out.println("Xend, Yend = " + endX + " " + endY);
        @SuppressWarnings("rawtypes")
        TouchAction scroll = new TouchAction(androidDriver);
        scroll.press(PointOption.point(startX, startY))
                .waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                .moveTo(PointOption.point(endX, endY)).release().perform();
    }

}
