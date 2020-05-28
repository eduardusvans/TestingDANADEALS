package demo.pages;

import demo.driver.AndroidDriverInstance;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.driver.AndroidDriverInstance.androidDriver;

public class RegisterPage {
    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement passwordInput = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("password_textbox")));
        return passwordInput.isDisplayed();
    }

    public void inputPhoneNumber(String phoneNumberInput) {
        AndroidElement input = AndroidDriverInstance
                .androidDriver
                .findElement(By.id("phonenumber_textbox"));

        input.sendKeys(phoneNumberInput);
    }
}
