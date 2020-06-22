package demo.pages.payer.home;
import demo.driver.AndroidDriverInstance;

import static demo.locators.payer.home.HomePayerPageLocator.*;

public class HomePayer {

    public void topupIcon(){
        AndroidDriverInstance.androidDriver.findElement(TOPUP_ICON).click();
    }
}
