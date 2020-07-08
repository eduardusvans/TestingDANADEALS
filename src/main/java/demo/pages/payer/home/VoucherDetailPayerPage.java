package demo.pages.payer.home;
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

    public String checkVoucherName(){
        return getElement(VOUCHER_NAME).getText();
    }

    public String checkContentOnTab(){
        getElement(DETAIL_CONTENT);
        return null;
    }

    public void clickBuy(){
        tapElement(BUY_BUTTON_VIEW_DETAILS);
        waitABit(5000);
    }

    public void clickBack(){
        tapElement(BACK_BUTTON);
        waitABit(2000);
    }
}