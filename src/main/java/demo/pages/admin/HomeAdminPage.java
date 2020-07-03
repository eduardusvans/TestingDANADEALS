package demo.pages.admin;

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
import static demo.utils.ActionUtils.hideKeyboard;
import static demo.utils.ActionUtils.tapElement;
import static demo.utils.ActionUtils.*;

public class HomeAdminPage {

    public boolean isOnPage() { hideKeyboard(); return waitElement(INPUT_SEARCH_VOUCHER, 30).isDisplayed(); }

    public void waitAbit(int millis){
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void clickCreateVou(){ waitAbit(3000); androidDriver.findElement(CREATE_VOUCHER).click(); }
    public void tapLogoutButton() { tapElement(BUTTON_LOGOUT); }
    public void tapAnyVoucher(){ tapElement(VOUCHER); }


    public void tapVoucher(String voucherName) {
        boolean isFound = false;
        int counter = 0;

        do {
            String vouc ="";
            waitAbit(5000);
            List<AndroidElement> vNameList = androidDriver.findElements(VOUCHER_NAME);
            for (AndroidElement vName : vNameList) {
                vouc = vName.getText();
                if (vName.getText().trim().equalsIgnoreCase(voucherName.trim())) {
                    System.out.println("Your voucher is found: " + vouc);
                    vName.click();
                    isFound = true;
                    break;
                }
            }

            if (!isFound) {
                scrollDown();
                System.out.println("Passed Voucher: "+vouc);
                counter++;
            }

        } while (!isFound && counter <= 100);
    }


    public static void scrollDown() {
        AndroidElement screen = androidDriver
                .findElement(By.id("rv_admin"));
        Point center =  screen.getCenter();
        int width = screen.getSize().width;
        int height = screen.getSize().height;
        int startX = center.getX() - (width / 2) + 20;
        int startY = center.getY() + (height / 5);
        int endX = center.getX() - (width / 2) + 20;
        int endY = center.getY() - (height / 5);
        System.out.println("Xstart, Ystart = " + startX + " " + startY);
        System.out.println("Xend, Yend = " + endX + " " + endY);
        @SuppressWarnings("rawtypes")
        TouchAction scroll = new TouchAction(androidDriver);
        scroll.press(PointOption.point(startX, startY))
                .waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                .moveTo(PointOption.point(endX, endY)).release().perform();
    }


}
