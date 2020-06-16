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

    public void inputPhoneNumber(String phoneNumber){
        androidDriver.findElement(EDIT_TEXT_PHONE).sendKeys(phoneNumber);
    }

    public void inputPassword(String password){
        androidDriver.findElement(EDIT_TEXT_PASSWORD).sendKeys(password);
    }

    public void clickLogin(){ androidDriver.findElement(BUTTON_LOGIN).click(); }

}
