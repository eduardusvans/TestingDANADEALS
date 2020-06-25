package demo.pages.payer.home;
import demo.driver.AndroidDriverInstance;
import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;
import static demo.locators.payer.home.HomePayerPageLocator.*;
import static demo.utils.ActionUtils.*;

public class HomePayer {

    public boolean isOnPage() {

      return waitElement(USER_NAME, 30).isDisplayed();
    }

    public boolean seeTopUp(){
        return waitElement(BALANCE_INFO, 30).isDisplayed();
    }

    public boolean seeSearchBar(){
        return waitElement(SEARCH_VOUCHER, 30).isDisplayed();
    }

    public void inputSearch(String Keyword){
        inputElement(SEARCH_VOUCHER, Keyword);
    }

    public void chooseFilter(String Keyword){
       switch (Keyword) {
           case "fnb": tapElement(USER_NAME);
           break;
           case "online": tapElement(USER_NAME);
           break;
       }
    }

    public void chooseSort(String Keyword){
        switch (Keyword) {
            case "price": tapElement(USER_NAME);
                break;
            case "discount": tapElement(USER_NAME);
                break;
        }
    }

    public void clickBuy(String Keyword){
        AndroidDriverInstance.androidDriver.findElement(MobileBy.xpath("/hierarchy/android.widget.FrameLayout/" +
                "android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/" +
                "android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[1]/" +
                "android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/" +
                "android.widget.LinearLayout[2]/androidx.cardview.widget.CardView/android.view.ViewGroup/" +
                "android.widget.Button")).click();
    }

    public void clickVoucher(String VoucherName){
            String xpath = "//android.widget.TextView[contains(@resource-id, 'tv_voucher_name') and @text = '%s']";
            AndroidDriverInstance.androidDriver.findElement(By.xpath(String.format(xpath, VoucherName))).click();

    }

    public String checkVoucherPrice() {
        return waitElement(VOUCHER_PRICE_CHECK, 20).getText();
    }

    public String checkVoucherDiscount(){
        return waitElement(VOUCHER_DISCOUNT_CHECK, 20).getText();
    }

    public void checkMerchantCategory(String VoucherName){
        waitABit(10);
        String xpath = "//android.widget.TextView[contains(@resource-id, 'tv_voucher_name') and @text = '%s']";
        AndroidDriverInstance.androidDriver.findElement(By.xpath(String.format(xpath, VoucherName))).getText();


    }

    }



