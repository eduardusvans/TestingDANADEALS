package demo.pages.payer;

import demo.driver.AndroidDriverInstance;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.payer.RegisterPageLocator.*;

public class RegisterPage {
    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement btnRegister = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("btn_register")));
        return btnRegister.isDisplayed();
    }

}
