package demo.pages.payer.home;
import demo.driver.AndroidDriverInstance;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static demo.locators.payer.home.VoucherDetailPayerPageLocator.*;
import static demo.utils.ActionUtils.*;

public class VoucherDetailPayerPage {

    public boolean isOnPage(){
    return waitElement(VOUCHER_NAME, 30).isDisplayed();
    }

    public void clickInstructionTab(){
        tapElement(INSTRUCTION_TAB);
    }

    public void clickTnCTab(){
        tapElement(TNC_TAB);
    }

    public void checkVoucherName(){
        getElement(VOUCHER_NAME);
    }

    public void checkContentOnTab(){
        getElement(DETAIL_CONTENT);
    }

    public void clickBuy(){
        tapElement(BUY_BUTTON_VIEW_DETAILS);
    }
}