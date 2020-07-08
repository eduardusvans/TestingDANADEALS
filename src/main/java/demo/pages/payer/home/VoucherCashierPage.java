package demo.pages.payer.home;

import demo.driver.AndroidDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static demo.locators.payer.home.VoucherCashierPageLocator.*;
import static demo.utils.ActionUtils.*;

public class VoucherCashierPage {

    public boolean isOnPage() {
        return waitElement(CASHIER_PAGE_TEXT, 30).isDisplayed();
    }

    public String checkVoucherName(){
     return getElement(VOUCHER_NAME).getText();
    }

    public void clickPay(){
       tapElement(PAY_BUTTON);
        waitABit(2000);
    }

    public void clickBack(){
        tapElement(BACK_BUTTON);
        waitABit(2000);
    }

    public String checkToastMessage() {
        WebElement toastView = AndroidDriverInstance.androidDriver.findElement(By.xpath("//android.widget.Toast[1]"));
        return toastView.getAttribute("name");
    }

}
