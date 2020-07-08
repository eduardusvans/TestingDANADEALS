package demo.pages.payer.profile;

import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.payer.profile.ProfilePageLocator.*;
import static demo.utils.ActionUtils.*;

public class ProfilePage {
    public void isOnPageProfile() {
        //return waitElement(assertProfilePage, 30).isDisplayed();
        waitABit(2000);
        waitElement(Account_Info,20).isDisplayed();
    }
    public void tapAccountInfoMenu(){ tapElement(Account_Info);}
    public void tapChangeUserDataMenu(){ tapElement(Change_User_Data);}
    public void tapLogoutButton(){
        waitABit(2000);
        tapElement(LOGOUT_BTN);
    }
    public static void scrollDown() {
        AndroidElement screen = androidDriver
                .findElement(By.id("action_bar_root"));
        Point center =  screen.getCenter();
        int startX = 480;
        int startY = (int) (center.getY() * 1.5);
        int endX = 623;
        int endY = (int) (center.getY() * 0.5);
        @SuppressWarnings("rawtypes")
        TouchAction scroll = new TouchAction(androidDriver);
        scroll.press(PointOption.point(startX, startY))
                .moveTo(PointOption.point(endX, endY)).perform();
    }
}
