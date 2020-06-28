package demo.pages.admin;

import demo.driver.AndroidDriverInstance;
import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;

import java.time.Duration;
import java.util.List;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.admin.HomeAdminPageLocator.*;
import static demo.utils.ActionUtils.*;

public class HomeAdminPage {
    public boolean isOnPage() {
        return waitElement(INPUT_SEARCH_VOUCHER, 30).isDisplayed();
    }
    public void tapAnyVoucher(){ tapElement(VOUCHER); }
    public void tapVoucher(String voucherName){

            String nameVouc = "";
            do {
                waitABit(5000);
                List<AndroidElement> voucherList = AndroidDriverInstance.androidDriver.findElements(VOUCHER_NAME);
                for (AndroidElement name : voucherList) {
//                    nameVouc = name.getText();
                    if (!name.getText().equalsIgnoreCase(voucherName)) {
                        nameVouc = name.getText();
                        System.out.println("Voucher Name = " + nameVouc);
                    }
                }
                scrollDown();
            } while (nameVouc.equals(voucherName));
            tapElement(VOUCHER_ITEM);

    }

    public void inputSearchVoucher(String keyword) {
        inputElement(INPUT_SEARCH_VOUCHER, keyword);
    }

//    public void clearInputSearchVoucher() {
//        getElement(INPUT_SEARCH_VOUCHER).clear();
//    }

    public void tapLogoutButton() { tapElement(BUTTON_LOGOUT); }
    public void tapResetButton() { tapElement(BUTTON_RESET); }

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

//    public boolean checkProgressBar() {
//        try {
//            boolean status = waitElement(PROGRESS_BAR, 5).isDisplayed();
//            int waitCounter = 0;
//            while (status && waitCounter < 10) {
//                waitABit(3000);
//                status = getElement(PROGRESS_BAR).isDisplayed();
//                if (!status) {
//                    return status;
//                }
//                waitCounter++;
//            }
//            return false;
//        } catch (Exception e) {
//            return false;
//        }
//    }

    public boolean checkVoucherListPresence() {
        return waitElement(VOUCHER_MERCHANT_NAME, 30).isDisplayed();
    }

    public boolean checkAllVouchersPresence() {
        boolean mixMerchant = false;
        boolean mixStatus = false;
        String nameParam = "";
        String statusParam = "";
        int counter = 0;

        do {
            if (!mixMerchant) {
                waitABit(5000);
                List<AndroidElement> nameList = AndroidDriverInstance.androidDriver.findElements(VOUCHER_MERCHANT_NAME);
                for (AndroidElement name : nameList) {
                    if (counter == 0) {
                nameParam = name.getText();
            } else if (!name.getText().equalsIgnoreCase(nameParam)) {
                System.out.println("MN OK!!!");
                System.out.println("Merchant Name Var = " + name.getText());
                System.out.println("Merchant Name param = " + nameParam);
                mixMerchant = true;
                break;
            }
        }
    }
            if (!mixStatus) {
                waitABit(3000);
                List<AndroidElement> statusList = AndroidDriverInstance.androidDriver.findElements(VOUCHER_STATUS);
                for (AndroidElement status : statusList) {
                    if (counter == 0) {
                        statusParam = status.getText();
                    } else if (!status.getText().equalsIgnoreCase(statusParam)) {
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
        } while (!mixStatus || !mixMerchant);
        return true;
    }

    public boolean checkKeywordVoucherPresence(String keyword) {

        int counter = 0;

        do {
            waitABit(5000);
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
            waitABit(5000);
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
        int endY = center.getY() - (height / 2);
        System.out.println("Xstart, Ystart = " + startX + " " + startY);
        System.out.println("Xend, Yend = " + endX + " " + endY);
        @SuppressWarnings("rawtypes")
        TouchAction scroll = new TouchAction(androidDriver);
        scroll.press(PointOption.point(startX, startY))
                .waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                .moveTo(PointOption.point(endX, endY)).release().perform();
    }

}
