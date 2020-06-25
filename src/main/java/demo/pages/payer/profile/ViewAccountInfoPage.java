package demo.pages.payer.profile;

import static demo.locators.payer.profile.ViewAccountInfoPageLocator.*;
import static demo.utils.ActionUtils.*;

public class ViewAccountInfoPage {
    public boolean isOnPageAccountInfo() {
        return waitElement(assertAccountInfo, 15).isDisplayed();
    }
    public void tapBackBtn(){ tapElement(Back_Btn_ViewAccountInfo); }
    public void tapDoneBtn(){
        tapElement(Btn_Done_ViewAccountInfo);
        waitABit(10);
    }
}
