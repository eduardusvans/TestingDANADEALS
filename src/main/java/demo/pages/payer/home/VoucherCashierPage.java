package demo.pages.payer.home;

import static demo.locators.payer.home.VoucherCashierPageLocator.*;
import static demo.utils.ActionUtils.*;

public class VoucherCashierPage {

    public boolean isOnPage() {
        return waitElement(CASHIER_PAGE_TEXT, 30).isDisplayed();
    }

    public void checkVoucherName(){
     getElement(VOUCHER_NAME);
    }

    public void checkVoucherPrice(){
        getElement(VOUCHER_PRICE);
    }

    public void clickPay(){
       tapElement(PAY_BUTTON);
    }

}
