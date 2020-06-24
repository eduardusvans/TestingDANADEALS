package demo.pages.payer.profile;

import static demo.locators.payer.profile.ProfilePageLocator.*;
import static demo.utils.ActionUtils.tapElement;
import static demo.utils.ActionUtils.waitElement;

public class ProfilePage {
    public boolean isOnPageProfile() {
        return waitElement(assertProfilePage, 15).isDisplayed();
    }
    public void tapAccountInfoMenu(){ tapElement(Account_Info);}
    public void tapChangeUserDataMenu(){ tapElement(Change_User_Data);}
    public void tapLogoutButton(){
        tapElement(LOGOUT_BTN);
    }
}
