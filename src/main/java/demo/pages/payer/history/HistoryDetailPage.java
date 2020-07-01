package demo.pages.payer.history;

import static demo.locators.payer.history.HistoryDetailPageLocator.*;

import static demo.utils.ActionUtils.*;

public class HistoryDetailPage {
    public void isOnPageHistoryDetail() {
        //return waitElement(assertProfilePage, 30).isDisplayed();
        waitABit(5000);
        waitElement(assertHistoryDetail,20).isDisplayed();
    }
    public void tapBackBtn(){
        waitABit(2000);
        tapElement(BACK_BTN_HistoryDetail);
    }
}
