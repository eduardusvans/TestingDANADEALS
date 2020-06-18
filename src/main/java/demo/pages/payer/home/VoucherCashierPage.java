package demo.pages.payer.home;

import demo.driver.AndroidDriverInstance;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static demo.locators.payer.home.VoucherCashierPageLocator.*;

public class VoucherCashierPage {

    public boolean isOnHomePayer() {
        WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 30);
        return wait.until(ExpectedConditions.presenceOfElementLocated(CONFIRM_PAYMENT_TEXT)).isDisplayed();
    }

    public void clickPay(){
        AndroidDriverInstance.androidDriver.findElement(PAY_BUTTON).click();
    }
}
