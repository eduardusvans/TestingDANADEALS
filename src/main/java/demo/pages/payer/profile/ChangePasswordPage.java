package demo.pages.payer.profile;

import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;

import static demo.locators.payer.profile.ChangePasswordPageLocator.*;
import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.utils.ActionUtils.*;

public class ChangePasswordPage {
    public boolean isOnPageChangePassword() {
        return waitElement(assertChangePasswordPage, 15).isDisplayed();
    }
    public void tapChangePasswordBtn(){
        tapElement(BTN_Change_Password);
    }
    public void tapBackBtn(){
        tapElement(Back_BTN_Change_Password);
    }
    public void inputOldPassword(String oldPassword){
        androidDriver.findElement(oldPasswordInput).sendKeys(oldPassword);
    }
    public void inputNewPassword(String newPassword){
        androidDriver.findElement(newPasswordInput).sendKeys(newPassword);
    }
    public void inputConfirmNewPassword(String confirmNewPassword){
        androidDriver.findElement(confirmNewPasswordInput).sendKeys(confirmNewPassword);
    }
    public boolean seeWarningText(){
        return waitElement(warningText,15).isDisplayed();
    }

    public static void scrollDown() {
        AndroidElement screen = androidDriver
                .findElement(By.id("action_bar_root"));
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

    public static void inputAndScroll(By targetElement, String input) {
        boolean isFound = false;
        int counter = 0;

        do {
            try {
                inputElement(targetElement, input);
                isFound = true;
            } catch (Exception e) {
                scrollDown();
                counter++;
            }

        } while (!isFound && counter < 5);
    }
}
