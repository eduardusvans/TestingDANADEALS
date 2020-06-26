package demo.pages.payer.home;
import demo.driver.AndroidDriverInstance;
import io.appium.java_client.MobileBy;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;

import static demo.driver.AndroidDriverInstance.androidDriver;
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
        androidDriver.findElement(MobileBy.xpath("/hierarchy/android.widget.FrameLayout/" +
                "android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/" +
                "android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[1]/" +
                "android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/" +
                "android.widget.LinearLayout[2]/androidx.cardview.widget.CardView/android.view.ViewGroup/" +
                "android.widget.Button")).click();
    }

    public void clickVoucher(String VoucherName) {
        if (VoucherName == "aasseekk pocer" || VoucherName == "aaa asiiik voucher" || VoucherName == "AAAA Deals Z") {
            String xpath = "//android.widget.TextView[contains(@resource-id, 'com.team.danadeals:id/tv_voucher_name') and @text = '%s']";
            androidDriver.findElement(By.xpath(String.format(xpath, VoucherName))).click();
        } else {
            tapAndScroll(VoucherName);
        }
    }

        public String checkVoucherPrice() {
        return waitElement(VOUCHER_PRICE_CHECK, 20).getText();
    }

    public String checkVoucherDiscount(){
        return waitElement(VOUCHER_DISCOUNT_CHECK, 20).getText();
    }

    public void checkMerchantCategory(String VoucherName){
        waitABit(2000);
        String xpath = "//android.widget.TextView[contains(@resource-id, 'tv_voucher_name') and @text = '%s']";
        androidDriver.findElement(By.xpath(String.format(xpath, VoucherName))).getText();


    }

    public static void scrollDown() {
        AndroidElement screen = androidDriver.findElement(By.id("rv_voucher"));
        Point center =  screen.getCenter();
        int startX = 112;
        int startY = (int) (center.getY() * 1.5);
        int endX = 112;
        int endY = (int) (center.getY() * 0.5);
        @SuppressWarnings("rawtypes")
        TouchAction scroll = new TouchAction(androidDriver);
        scroll.press(PointOption.point(startX, startY))
                .moveTo(PointOption.point(endX, endY)).perform();
    }

    public static void tapAndScroll(String Keyword) {
        boolean isFound = false;
        int counter = 0;

        do {
            try {
                String xpath = "//android.widget.TextView[contains(@resource-id, 'com.team.danadeals:id/tv_voucher_name') and @text = '%s']";
                androidDriver.findElement(By.xpath(String.format(xpath, Keyword))).click();
                isFound = true;
            } catch (Exception e) {
                scrollDown();
                counter++;
            }

        } while (!isFound && counter < 3);
    }

    public void clickVoucherRefund(){
        waitABit(5000);
        tapElement(VOUCHER_REFUND);
    }

    public void clickVoucherFailed(){
        waitABit(5000);
        tapElement(VOUCHER_FAILED);
    }



}



