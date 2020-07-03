package demo.pages.admin;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.admin.HomeAdminPageLocator.BUTTON_LOGOUT;
import static demo.utils.ActionUtils.hideKeyboard;
import static demo.utils.ActionUtils.tapElement;

public class HomeAdminPage {
    public boolean isOnPage() {
        hideKeyboard();
        WebDriverWait wait = new WebDriverWait(androidDriver, 150);
        WebElement userLabel = wait
                .until(ExpectedConditions.presenceOfElementLocated(BUTTON_LOGOUT));
        return userLabel.isDisplayed();
    }

    public void tapLogoutButton(){tapElement(BUTTON_LOGOUT);}

}
