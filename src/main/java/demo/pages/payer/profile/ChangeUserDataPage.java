package demo.pages.payer.profile;

import static demo.locators.payer.profile.ChangeUserDataPageLocator.*;
import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.utils.ActionUtils.tapElement;
import static demo.utils.ActionUtils.waitElement;

public class ChangeUserDataPage {
    public boolean isOnPageChangeUserDataPage() {
        return waitElement(assertChangeUserDataPage, 15).isDisplayed();
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
    }
    public void inputFullName(String firstName, String lastName){
        androidDriver.findElement(fullNameInput).sendKeys(firstName,lastName);
    }
    public void inputMail(String editMail){
        androidDriver.findElement(mailInput).sendKeys(editMail);
    }
    public boolean seeWarningText(){
        return waitElement(warningText,15).isDisplayed();
    }
}
