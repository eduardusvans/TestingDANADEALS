package demo.pages.payer.profile;

import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.payer.profile.ViewAccountInfoPageLocator.*;
import static demo.utils.ActionUtils.*;

public class ViewAccountInfoPage {
    public void isOnPageAccountInfo() {
        //return waitElement(assertAccountInfo, 30).isDisplayed();
        waitABit(5000);
        waitElement(assertAccountInfo,30).isDisplayed();
    }
    public void tapBackBtn(){ tapElement(Back_Btn_ViewAccountInfo); }
    public void tapDoneBtn(){
        waitABit(2000);
        tapElement(Btn_Done_ViewAccountInfo);
    }
}
