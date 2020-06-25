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
     return getElement(VOUCHER_NAME);
    }

    public String checkVoucherPrice(){
        return getElement(VOUCHER_PRICE);
    }

    public void clickPay(){
       tapElement(PAY_BUTTON);
    }

    public String checkToastMessage() {
        WebElement toastView = AndroidDriverInstance.androidDriver.findElement(By.xpath("//android.widget.Toast[1]"));
        return toastView.getAttribute("name");
    }

}
