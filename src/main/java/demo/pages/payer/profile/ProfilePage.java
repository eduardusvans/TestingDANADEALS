package demo.pages.payer.profile;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.payer.profile.ProfilePageLocator.*;

public class ProfilePage {
    public boolean isOnPageHistory() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement profile_icon = wait
                .until(ExpectedConditions.presenceOfElementLocated(Profile_Icon));
        return profile_icon.isDisplayed();
    }
}
