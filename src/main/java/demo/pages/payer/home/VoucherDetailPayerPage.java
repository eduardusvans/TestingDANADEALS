package demo.pages.payer.home;
import demo.driver.AndroidDriverInstance;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static demo.locators.payer.home.VoucherDetailPayerPageLocator.*;

public class VoucherDetailPayerPage {

    public boolean isOnHomePayer() {
        WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 30);
        return wait.until(ExpectedConditions.presenceOfElementLocated(VOUCHER_CUSTOM_VIEW)).isDisplayed();
    }

    public void clickTncTab(){
        //AndroidDriverInstance.androidDriver.findElement().click();
    }

    public void clickInstructionTab(){
        //AndroidDriverInstance.androidDriver.findElement().click();
    }

    public void clickBuy(){
        AndroidDriverInstance.androidDriver.findElement(BUY_BUTTON_VIEW_DETAILS).click();
    }
}
