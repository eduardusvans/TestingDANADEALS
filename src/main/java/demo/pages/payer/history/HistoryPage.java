package demo.pages.payer.history;

import static demo.utils.ActionUtils.waitABit;
import static demo.utils.ActionUtils.waitElement;
import static demo.locators.payer.history.HistoryPageLocator.*;

public class HistoryPage {
    public void isOnPageHistory() {
        //return waitElement(assertProfilePage, 30).isDisplayed();
        waitABit(2000);
        waitElement(In_Progress_Tab,20).isDisplayed();
    }


}
