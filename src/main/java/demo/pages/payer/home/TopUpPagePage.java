package demo.pages.payer.home;
import demo.driver.AndroidDriverInstance;
import demo.driver.WebDriverInstance;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

import static demo.locators.payer.home.TopUpPageLocator.*;

public class TopUpPagePage {
    public boolean isOnTopupPage(){
        WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 30);
        WebElement topupPage = wait
                .until(ExpectedConditions.presenceOfElementLocated(TOPUP_PAGE));
        return topupPage.isDisplayed();
    }

    public void chooseTopupNominal(String nominalTopup){
        List<AndroidElement> topup = AndroidDriverInstance.androidDriver.findElements(NOMINAL_TOPUP);
        for (int i=0; i<topup.size(); i++){
            if(topup.get(i).getText().equalsIgnoreCase(nominalTopup)){
                topup.get(i).click();
                break;
            }
        }

    }

    public void chooseVirtualAccount(String virtualAccount){
        List<AndroidElement> virtualAcc = AndroidDriverInstance.androidDriver.findElements(VIRTUAL_ACCOUNT_BUTTON);
        for (int i=0; i<virtualAcc.size(); i++){
            if (virtualAcc.get(i).getText().equalsIgnoreCase(virtualAccount)){
                virtualAcc.get(i).click();
                break;
            }
        }
    }

    public void chooseBankPayment(String bankPayment){
        switch (bankPayment.toLowerCase()) {
            case "bni":
                AndroidDriverInstance.androidDriver.findElement(BANK_BNI_BUTTON).click();
                break;
            case "mandiri":
                AndroidDriverInstance.androidDriver.findElement(BANK_MANDIRI_BUTTON).click();
                break;
            case "bca":
                AndroidDriverInstance.androidDriver.findElement(BANK_BCA_BUTTON).click();
                break;

        }

        /*List<AndroidElement> bankPay = AndroidDriverInstance.androidDriver.findElements(BANK_BNI_BUTTON);
        for (int i=0; i<bankPay.size(); i++){
            if(bankPay.get(i).getText().equalsIgnoreCase(bankPayment)){
                bankPay.get(i).click();
                break;
            }
        }*/
    }

    public void clickNextButton(){
        AndroidDriverInstance.androidDriver.findElement(NEXT_BUTTON_TOPUP).click();
    }

}
