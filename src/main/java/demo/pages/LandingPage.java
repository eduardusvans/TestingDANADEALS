package demo.pages;

import static demo.locators.LandingPageLocator.*;
import static demo.utils.ActionUtils.tapElement;
import static demo.utils.ActionUtils.waitElement;

public class LandingPage {
    public boolean isOnPage() {
        return waitElement(BUTTON_CREATE_ACCOUNT, 15).isDisplayed();
    }

    public void tapCreateAccountButton() {
        tapElement(BUTTON_CREATE_ACCOUNT);
    }

    public void tapLoginToAccountButton() {
        tapElement(BUTTON_LOGIN_TO_ACCOUNT);
    }
}
