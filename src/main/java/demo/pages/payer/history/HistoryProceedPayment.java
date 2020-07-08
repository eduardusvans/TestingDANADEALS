package demo.pages.payer.history;

import static demo.locators.payer.history.HistoryProceedPaymentLocator.*;
import static demo.utils.ActionUtils.*;

public class HistoryProceedPayment {
    public void isOnPageProceedPayment() {
        //return waitElement(assertProfilePage, 30).isDisplayed();
        waitABit(5000);
        waitElement(isOnPageProceedPayment,20).isDisplayed();
    }
    public void tapProceed(){
        waitABit(3000);
        tapElement(BTN_PROCEED);
    }
}
