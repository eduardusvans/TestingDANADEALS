package demo.pages.payer.forgotPassword;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.payer.forgotPassword.ForgotPasswordPageLocator.*;

public class ForgotPasswordPage {
    public boolean isOnPage() {

        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement userLabel = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("btn_send_otp")));
        return userLabel.isDisplayed();
    }
}
