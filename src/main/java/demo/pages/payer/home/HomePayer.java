package demo.pages.payer.home;

import demo.driver.AndroidDriverInstance;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.locators.payer.home.TopUpPageLocator.NOMINAL_BALANCE;
import static demo.utils.ActionUtils.*;
import static demo.locators.payer.home.HomePayerPageLocator.*;
import static demo.driver.AndroidDriverInstance.androidDriver;

public class HomePayer {

    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement userLabel = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.id("tv_hello")));
        return userLabel.isDisplayed();
    }

    public void topupIcon(){
        waitABit(2000);
        androidDriver.findElement(TOPUP_ICON).click();
    }

    public String getUserBalance(){
        waitABit(2000);
        AndroidElement userBalance = AndroidDriverInstance.androidDriver.findElement(USER_BALANCE);
        return userBalance.getText();
    }
}
