package demo.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.driver.AndroidDriverInstance.androidDriver;

public class LoginPage {
    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement passwordInput = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("password_textbox")));
        return passwordInput.isDisplayed();
    }
}
