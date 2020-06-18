package demo.pages;

import io.appium.java_client.android.AndroidDriver;
import io.cucumber.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.LoginPageLocator.*;

public class LoginPage {

    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement AppNameLabel = wait
                .until(ExpectedConditions.presenceOfElementLocated(BUTTON_LOGIN));
        return AppNameLabel.isDisplayed();
    }

    public void inputPhoneNumber(String phoneNumber){ androidDriver.findElement(INPUT_PHONE).sendKeys(phoneNumber); }

    public void inputPassword(String password){
        androidDriver.findElement(INPUT_PASSWORD).sendKeys(password);
    }

    public void clickLogin(){ androidDriver.findElement(BUTTON_LOGIN).click(); }


    public boolean seeNotRegister() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement notRegisterLabel = wait
                .until(ExpectedConditions.presenceOfElementLocated(TXT_NOT_REGISTER));
        return notRegisterLabel.isDisplayed();
    }

    public boolean seePhoneNumberET() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement phoneET = wait
                .until(ExpectedConditions.presenceOfElementLocated(INPUT_PHONE));
        return phoneET.isDisplayed();
    }

    public boolean seePasswordET() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement passET = wait
                .until(ExpectedConditions.presenceOfElementLocated(INPUT_PASSWORD));
        return passET.isDisplayed();
    }

    public boolean seeForgotLink() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement forgotLink = wait
                .until(ExpectedConditions.presenceOfElementLocated(LINK_FORGOT));
        return forgotLink.isDisplayed();
    }

    public boolean seeRegisterLink() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement notRegisterLink = wait
                .until(ExpectedConditions.presenceOfElementLocated(LINK_REGISTER_HERE));
        return notRegisterLink.isDisplayed();
    }

    public boolean seeLoginButton() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement logButton = wait
                .until(ExpectedConditions.presenceOfElementLocated(BUTTON_LOGIN));
        return logButton.isDisplayed();
    }

    public void clickForgot(){ androidDriver.findElement(LINK_FORGOT).click(); }
    public void clickRegister(){ androidDriver.findElement(LINK_REGISTER_HERE).click(); }


    public boolean seeWarningText(){
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement warningText = wait
                .until(ExpectedConditions.presenceOfElementLocated(WARNING_TEXT));
        return warningText.isDisplayed(); }

    public boolean seePopUpNotification(){
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement popUp = wait
                .until(ExpectedConditions.presenceOfElementLocated(POP_UP_NOTIFICATION));
        return popUp.isDisplayed(); }


}
