package demo.pages.payer.home;
import demo.driver.AndroidDriverInstance;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.locators.payer.home.TopUpCashierPageLocator.*;
import static demo.utils.ActionUtils.waitABit;
import static demo.utils.ActionUtils.waitElement;

public class TopUpCashierPage {
    public boolean isOnTopupPaymentPage(){
        WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 30);
        WebElement topupPaymentPage = wait
                .until(ExpectedConditions.presenceOfElementLocated(VIRTUAL_ACCOUNT_NUMBER));
        return topupPaymentPage.isDisplayed();
    }

    public String getVirtualAccNumber(){
        return waitElement(VIRTUAL_ACCOUNT_NUMBER,30).getText();
    }

    public void clickTopupButton(){
        waitABit(1000);
        AndroidDriverInstance.androidDriver.findElement(TOPUP_BUTTON).click();
    }

    public String getOrderNominal(){
        return waitElement(TOPUP_AMOUNT_ORDER,30).getText();
    }

    public String failedTopup(){
        return waitElement(TOAST_MESSAGE,30).getText();
    }
}
