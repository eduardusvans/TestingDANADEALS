package demo.pages.payer.home;

import static demo.locators.payer.home.HomePayerPageLocator.GREETING;
import static demo.utils.ActionUtils.hideKeyboard;
import static demo.utils.ActionUtils.waitElement;

public class HomePayer {
    public boolean isOnPage() { hideKeyboard();return waitElement(GREETING, 150).isDisplayed(); }
}
