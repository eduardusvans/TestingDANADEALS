package demo.pages.payer.home;
import demo.driver.AndroidDriverInstance;
import io.appium.java_client.MobileBy;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;

import java.time.Duration;

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

    public boolean seeVoucher(){
        return waitElement(VOUCHER_SCROLL, 30).isDisplayed();
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

    public String checkMerchantCategory(){
        waitABit(2000);
        String xpath = "//android.widget.TextView[contains(@resource-id, 'com.team.danadeals:id/tv_merchant_name')]";
        return androidDriver.findElement(By.xpath(xpath)).getText();
    }

    public static void scrollDown() {
            AndroidElement screen = androidDriver.findElement(VOUCHER_SCROLL);
            Point center =  screen.getCenter();
            int width = screen.getSize().width;
            int height = screen.getSize().height;
            int startX = center.getX() - (width / 2) + 20;
            int startY = center.getY() + (height / 2);
            int endX = center.getX() - (width / 2) + 20;
            int endY = center.getY() - (height / 2);
            System.out.println("Xstart, Ystart = " + startX + " " + startY);
            System.out.println("Xend, Yend = " + endX + " " + endY);
            @SuppressWarnings("rawtypes")
            TouchAction scroll = new TouchAction(androidDriver);
        scroll.press(PointOption.point(startX, startY))
                .waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                .moveTo(PointOption.point(endX, endY)).release().perform();

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

        } while (!isFound && counter < 5);
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



