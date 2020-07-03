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
    public void isOnPageChangePassword() {
        //return waitElement(assertChangePasswordPage, 30).isDisplayed();
        waitABit(2000);
        waitElement(oldPasswordInput,30).isDisplayed();
    }
    public void tapChangePasswordBtn(){
        waitABit(2000);
        tapElement(BTN_Change_Password);
    }
    public void tapBackBtn(){
        waitABit(2000);
        tapElement(Back_BTN_Change_Password);
    }
    public void inputOldPassword(String oldPassword){
        androidDriver.findElement(oldPasswordInput).sendKeys(oldPassword);
        scrollDown();
        //inputAndScroll(oldPasswordInput, oldPassword);
    }
    public void inputNewPassword(String newPassword){
        androidDriver.findElement(newPasswordInput).sendKeys(newPassword);
        scrollDown();
        //inputAndScroll(newPasswordInput, newPassword);
    }
    public void inputConfirmNewPassword(String confirmNewPassword){
        androidDriver.findElement(confirmNewPasswordInput).sendKeys(confirmNewPassword);
        scrollDown();
        //inputAndScroll(confirmNewPasswordInput,confirmNewPassword );
    }
    public boolean seeWarningText(){
        return waitElement(warningText,30).isDisplayed();
    }
    public static void scrollDown() {
        AndroidElement screen = androidDriver
                .findElement(By.id("action_bar_root"));
        Point center =  screen.getCenter();
        int startX = 352;
        int startY = (int) (center.getY() * 1.5);
        int endX = 546;
        int endY = (int) (center.getY() * 0.5);
        @SuppressWarnings("rawtypes")
        TouchAction scroll = new TouchAction(androidDriver);
        scroll.press(PointOption.point(startX, startY))
                .moveTo(PointOption.point(endX, endY)).perform();
    }
}
