package demo.pages.payer.profile;
import static demo.locators.LoginPageLocator.BUTTON_LOGIN;
import static demo.locators.payer.profile.ProfilePageLocator.assertProfilePage;
import static demo.locators.payer.profile.ViewAccountInfoPageLocator.*;
import static demo.utils.ActionUtils.tapElement;
import static demo.utils.ActionUtils.waitElement;

public class ViewAccountInfoPage {
    public boolean isOnPageAccountInfo() {
        return waitElement(assertAccountInfo, 15).isDisplayed();
    }
    public void tapBackBtn(){ tapElement(Back_Btn_ViewAccountInfo); }
    public void tapDoneBtn(){
        tapElement(Btn_Done_ViewAccountInfo);
    }
}
