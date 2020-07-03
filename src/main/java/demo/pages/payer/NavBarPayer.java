package demo.pages.payer;

import static demo.locators.payer.NavBarPayerPageLocator.*;
import static demo.locators.payer.NavBarPayerPageLocator.home_icon;
import static demo.utils.ActionUtils.tapElement;

public class NavBarPayer {
    public void tapProfileIcon(){
        tapElement(profile_icon);
    }
    public void tapHistoryIcon(){
        tapElement(history_icon);
    }
    public void tapHomeIcon(){
        tapElement(home_icon);
    }

}
