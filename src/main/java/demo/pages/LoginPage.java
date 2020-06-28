package demo.pages;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.LoginPageLocator.*;
import static demo.utils.ActionUtils.tapElement;
import static demo.utils.ActionUtils.waitElement;

public class LoginPage {

    public boolean isOnPage() { return waitElement(BUTTON_LOGIN, 15).isDisplayed(); }

    public void inputPhoneNumber(String phoneNumber){ androidDriver.findElement(INPUT_PHONE).sendKeys(phoneNumber); }
    public void inputPassword(String password){ androidDriver.findElement(INPUT_PASSWORD).sendKeys(password); }

    public void clickLogin(){ tapElement(BUTTON_LOGIN); }
    public void clickForgot(){ tapElement(LINK_FORGOT); }
    public void clickRegister(){ tapElement(LINK_REGISTER_HERE); }

    public boolean seeNotRegister() { return waitElement(TXT_NOT_REGISTER, 15).isDisplayed(); }
    public boolean seePhoneNumberET() { return waitElement(INPUT_PHONE, 15).isDisplayed(); }
    public boolean seePasswordET() { return waitElement(INPUT_PASSWORD, 15).isDisplayed(); }
    public boolean seeForgotLink() { return waitElement(LINK_FORGOT, 15).isDisplayed(); }
    public boolean seeRegisterLink() { return waitElement(LINK_REGISTER_HERE, 15).isDisplayed(); }
    public boolean seeLoginButton() { return waitElement(BUTTON_LOGIN, 15).isDisplayed(); }
    public boolean seeWarningText(){ return waitElement(WARNING_TEXT, 15).isDisplayed(); }
    public boolean seePopUpNotification(){return waitElement(POP_UP_NOTIFICATION, 15).isDisplayed(); }


}