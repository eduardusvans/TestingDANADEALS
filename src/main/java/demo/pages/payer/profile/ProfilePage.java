package demo.pages.payer.profile;

import static demo.locators.payer.profile.ProfilePageLocator.*;
import static demo.utils.ActionUtils.*;

public class ProfilePage {
    public void isOnPageProfile() {
        //return waitElement(assertProfilePage, 30).isDisplayed();
        waitABit(5000);
        waitElement(assertProfilePage,20).isDisplayed();
    }
    public void tapAccountInfoMenu(){ tapElement(Account_Info);}
    public void tapChangeUserDataMenu(){ tapElement(Change_User_Data);}
    public void tapLogoutButton(){
        waitABit(2000);
        tapElement(LOGOUT_BTN);
    }
}
