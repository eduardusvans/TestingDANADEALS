package demo.pages.payer;

import static demo.locators.payer.NavBarPayerPageLocator.*;
import static demo.utils.ActionUtils.tapElement;
import static demo.utils.ActionUtils.waitABit;

public class NavBarPayer {
    public void tapProfileIcon(){
        tapElement(profile_icon);
    }
    public void tapHistoryIcon(){
        waitABit(5000);
    tapElement(history_icon);
    }
    public void tapHomeIcon(){
        tapElement(home_icon);
    }

}
