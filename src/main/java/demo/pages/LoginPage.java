package demo.pages;

import io.appium.java_client.android.AndroidDriver;
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
                .until(ExpectedConditions.presenceOfElementLocated(By.id("")));
        return AppNameLabel.isDisplayed();
    }

    public void inputPhoneNumber(String phoneNumber){ androidDriver.findElement(EDIT_TEXT_PHONE).sendKeys(phoneNumber); }

    public void inputPassword(String password){
        androidDriver.findElement(EDIT_TEXT_PASSWORD).sendKeys(password);
    }

    public void clickLogin(){ androidDriver.findElement(BUTTON_LOGIN).click(); }


    public boolean seeNotRegister() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement notRegisterLabel = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("tv_not_yet_registered")));
        return notRegisterLabel.isDisplayed();
    }

    public boolean seePhoneNumberET() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement phoneET = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("et_phone")));
        return phoneET.isDisplayed();
    }

    public boolean seePasswordET() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement passET = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("et_password")));
        return passET.isDisplayed();
    }

    public boolean seeForgotLink() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement forgotLink = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("tv_forgot")));
        return forgotLink.isDisplayed();
    }

    public boolean seeRegisterLink() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement notRegisterLink = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("tv_register_here")));
        return notRegisterLink.isDisplayed();
    }

    public boolean seeLoginButton() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement logButton = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("btn_login")));
        return logButton.isDisplayed();
    }

    public void clickForgot(){ androidDriver.findElement(LINK_FORGOT).click(); }
    public void clickRegister(){ androidDriver.findElement(LINK_REGISTER).click(); }

    public boolean seeWarningTextPhoneNumber(){
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement warningPhoneNumber = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("")));
        return warningPhoneNumber.isDisplayed(); }

    public boolean seeSuccessPopUpNotif(){
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement successPopUp = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("")));
        return successPopUp.isDisplayed(); }


    public boolean seePopUpNotifInvalidPhoneNumber(){
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement popUpInvalidPhoneNumber = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("")));
        return popUpInvalidPhoneNumber.isDisplayed(); }

    public boolean seePopUpNotifInvalidPassword(){
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement popUpInvalidPassword = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("")));
        return popUpInvalidPassword.isDisplayed(); }

    public boolean seePopUpNotifConnectionProblem(){
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement popUpConnectionProb = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("")));
        return popUpConnectionProb.isDisplayed(); }

}
