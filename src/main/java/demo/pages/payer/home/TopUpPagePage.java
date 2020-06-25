package demo.pages.payer.home;
import demo.driver.AndroidDriverInstance;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

import static demo.locators.payer.home.TopUpPageLocator.*;

public class TopUpPagePage {
    public boolean isOnTopupPage(){
        WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 30);
        WebElement userLabel = wait
                .until(ExpectedConditions.presenceOfElementLocated(TOPUP_PAGE));
        return userLabel.isDisplayed();
    }

    public void chooseTopupNominal(String nominalTopup){

        switch (nominalTopup.toLowerCase()){
            case "10k":
                AndroidDriverInstance.androidDriver.findElement(BUTTON_10K).click();
                break;
            case "25k":
                AndroidDriverInstance.androidDriver.findElement(BUTTON_25K).click();
                break;
            case "50k":
                AndroidDriverInstance.androidDriver.findElement(BUTTON_50K).click();
                break;
        }

    }

    public void chooseVirtualAccount() {
        AndroidDriverInstance.androidDriver.findElement(VIRTUAL_ACCOUNT_BUTTON).click();
    }

    public void chooseMerchant() {
        AndroidDriverInstance.androidDriver.findElement(MERCHANT_BUTTON).click();
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
    }

    public void clickNextButton(){
        AndroidDriverInstance.androidDriver.findElement(NEXT_BUTTON_TOPUP).click();
    }

}
