package demo.pages.payer;

import demo.driver.AndroidDriverInstance;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.payer.RegisterPageLocator.*;
import static demo.utils.ActionUtils.waitElement;

public class RegisterPage {
    public boolean isOnPage() {
        try {
            return waitElement(INPUT_PHONE_NUMBER, 15).isDisplayed();
        } catch (Exception e) {
            return waitElement(INPUT_CONFIRM_PASSWORD, 15).isDisplayed();
        }
    }

}
