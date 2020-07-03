package demo.pages.payer.history;

import static demo.utils.ActionUtils.waitABit;
import static demo.utils.ActionUtils.waitElement;
import static demo.locators.payer.history.HistoryPageLocator.*;
import static demo.utils.ActionUtils.*;

public class HistoryPage {
    public void isOnPageHistory() {
        //return waitElement(assertProfilePage, 30).isDisplayed();
        waitABit(5000);
        waitElement(In_Progress_Tab,20).isDisplayed();
    }
    public void tapInProgress(){
        waitABit(3000);
        tapElement(In_Progress_Tab);
    }
    public void isOnInProgress(){
        waitABit(3000);
        waitElement(In_Progress_Tab,20).isDisplayed();
    }
    public void tapCompleted(){
        waitABit(3000);
        tapElement(Completed_Tab);
    }
    public void isOnCompleted(){
        waitABit(5000);
        waitElement(Completed_Tab,20).isDisplayed();
    }
    public void tapVoucher(){
        waitABit(3000);
        tapElement(Voucher_LIST_COMPLETED);
    }
    public void tapFilter(){
        waitABit(3000);
        tapElement(Filter_Date);
    }
    public void isOnDatePicker(){
        waitABit(5000);
        waitElement(BTN_SAVE,20).isDisplayed();
    }
    public void startDate(){
        tapElement(START_DATE_Picker);
    }
    public void startOneDate(){
        tapElement(START_DATE_Picker_1);
    }
    public void startFiveDate(){
        tapElement(START_DATE_Picker_5);
    }
    public void startSevenDate(){
        tapElement(START_DATE_Picker_7);
    }
    public void endDate(){
        tapElement(END_DATE_Picker);
    }

    public void tapSaveBtn(){
        waitABit(3000);
        tapElement(BTN_SAVE);
    }
    public void tapCancelBtn(){
        waitABit(3000);
        tapElement(BTN_CANCEL);
    }
    public void isOnCompletedTransaction(){
        waitABit(3000);
        waitElement(Voucher_LIST_COMPLETED,20).isDisplayed();
    }
    public void isOnInProgressTransaction(){
        waitABit(3000);
        waitElement(Voucher_LIST_INPROGRESS,20).isDisplayed();
    }
    public void statusSuccess(){
        waitABit(3000);
        tapElement(Status_Success);
    }
    public void statusFailed(){
        waitABit(3000);
        tapElement(Status_Failed);
    }
    public void statusRefund(){
        waitABit(3000);
        tapElement(Status_Refund);
    }

    public void tapInProgressVoucher(){
        waitABit(3000);
        tapElement(Voucher_LIST_INPROGRESS);
    }
}
