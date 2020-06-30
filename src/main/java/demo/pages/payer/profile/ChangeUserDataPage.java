package demo.pages.payer.profile;

import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;

import static demo.locators.payer.profile.ChangeUserDataPageLocator.*;
import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.utils.ActionUtils.*;

public class ChangeUserDataPage {
    public void isOnPageChangeUserDataPage() {
        //return waitElement(assertChangeUserDataPage, 30).isDisplayed();
        waitABit(2000);
        waitElement(assertChangeUserDataPage,30).isDisplayed();
    }
    public void tapEditPasswordRB(){
        tapElement(passwordRB);
    }
    public void tapBackBtn(){
        waitABit(2000);
        tapElement(BACK_BTN_ChangeUserData);
    }
    public void tapFullNameRB(){
        tapElement(fullNameRB);
    }
    public void tapMailAddressRB(){
        tapElement(mailAddressRB);
    }
    public void tapBtnUpdate(){
        waitABit(1000);
        tapElement(BTN_UPDATE);
    }
    public void inputFullName(String firstName, String lastName){
        String fullName = fullNameSetter(firstName, lastName);
        androidDriver.findElement(fullNameInput).sendKeys(fullName);
        waitABit(1000);
    }
    public void inputMail(String editMail){
        androidDriver.findElement(mailInput).sendKeys(editMail);
        waitABit(1000);
    }
    public boolean seeWarningText(){
        return waitElement(warningText,30).isDisplayed();
    }
    public static String fullNameSetter(String firstName, String lastName) {
        // Null changer
        firstName = nullChanger(firstName);
        lastName = nullChanger(lastName);

        // Set full name
        if (firstName.equals("")) {
            if (lastName.equals("")) {
                return "";
            } else {
                return lastName;
            }
        } else if (lastName.equals("")) {
            return firstName;
        } else {
            return firstName.concat(" " + lastName);
        }
    }
}
