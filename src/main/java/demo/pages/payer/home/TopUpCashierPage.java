package demo.pages.payer.home;
import demo.driver.AndroidDriverInstance;
import demo.driver.WebDriverInstance;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.locators.payer.home.TopUpCashierPageLocator.*;

public class TopUpCashierPage {
    public boolean isOnTopupPaymentPage(){
        WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 30);
        WebElement topupPaymentPage = wait
                .until(ExpectedConditions.presenceOfElementLocated(TOPUP_PAYMENT_PAGE));
        return topupPaymentPage.isDisplayed();
    }

    public String getVirtualAccNumber(){
        waitAbit(3000);
        AndroidElement vaNumber = AndroidDriverInstance.androidDriver.findElement(VIRTUAL_ACCOUNT_NUMBER);
        return vaNumber.getText();
    }

    public void waitAbit(int millis){
        try {
            Thread.sleep(millis);
        }
        catch (InterruptedException e){
            e.printStackTrace();
        }
    }

    public void clickTopupButton(){
        AndroidDriverInstance.androidDriver.findElement(TOPUP_BUTTON).click();
    }
}
