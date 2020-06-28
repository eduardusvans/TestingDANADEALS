package demo.pages.payer.home;

import static demo.locators.payer.home.HomePayerPageLocator.GREETING;
import static demo.utils.ActionUtils.waitElement;

public class HomePayer {
    public boolean isOnPage() { return waitElement(GREETING, 50).isDisplayed(); }
}
