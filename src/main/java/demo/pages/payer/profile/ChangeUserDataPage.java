package demo.pages.payer.profile;

import static demo.locators.payer.profile.ChangeUserDataPageLocator.*;
import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.utils.ActionUtils.*;

public class ChangeUserDataPage {
    public boolean isOnPageChangeUserDataPage() {
        return waitElement(assertChangeUserDataPage, 20).isDisplayed();
    }
    public void tapEditPasswordRB(){
        tapElement(passwordRB);
    }
    public void tapBackBtn(){
        tapElement(BACK_BTN_ChangeUserData);
    }
    public void tapFullNameRB(){
        tapElement(fullNameRB);
    }
    public void tapMailAddressRB(){
        tapElement(mailAddressRB);
    }
    public void tapBtnUpdate(){
        tapElement(BTN_UPDATE);
        waitABit(15);
    }
    public void inputFullName(String firstName, String lastName){
        String fullName = fullNameSetter(firstName, lastName);
        androidDriver.findElement(fullNameInput).sendKeys(fullName);
        waitABit(10);
    }
    public void inputMail(String editMail){
        androidDriver.findElement(mailInput).sendKeys(editMail);
        waitABit(10);
    }
    public boolean seeWarningText(){
        return waitElement(warningText,15).isDisplayed();
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
