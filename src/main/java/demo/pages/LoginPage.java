package demo.pages;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.LoginPageLocator.*;

public class LoginPage {
    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement passwordInput = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("password_textbox")));
        return passwordInput.isDisplayed();
    }

    public void tapRegisterHereLink() {
        AndroidElement link = androidDriver.findElement(LINK_REGISTER_HERE);
        link.click();
    }

}
