package demo.pages.payer.home;
import com.github.javafaker.Bool;
import demo.driver.AndroidDriverInstance;
import io.appium.java_client.MobileBy;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;

import java.security.Key;
import java.time.Duration;
import java.util.List;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.admin.HomeAdminPageLocator.VOUCHER_MERCHANT_NAME;
import static demo.locators.payer.home.HomePayerPageLocator.*;
import static demo.utils.ActionUtils.*;
import static io.appium.java_client.touch.WaitOptions.waitOptions;
import static io.appium.java_client.touch.offset.PointOption.point;
import static java.time.Duration.between;
import static java.time.Duration.ofSeconds;


public class HomePayer {

    public boolean isOnPage() {
      return waitElement(USER_NAME, 150).isDisplayed();
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

    public void pressByCoordinates (int x, int y, long seconds) {
        new TouchAction(androidDriver).press(point(x,y)).waitAction(waitOptions(ofSeconds(seconds)))
                .release()
                .perform();
    }

    public void clickFilterButton(){
        tapElement(FILTER_BUTTON);
    }
    public void clickSortButton(){
        tapElement(SORT_BUTTON);
    }

    public void chooseFilter(String Keyword){
       switch (Keyword) {
           case "fnb": pressByCoordinates(620, 677, 1);
           break;
           case "online": pressByCoordinates(772, 802, 1);
           break;
       }
    }

    public void chooseSort(String Keyword){
       switch (Keyword){
           case "voucher price" :
           pressByCoordinates(256,672,1);
            break;
           case "discount" :
           pressByCoordinates(208,811,1);
           break;
       }
    }


    public void clickVoucher(String VoucherName) {
            tapAndScroll(VoucherName);
        }



    public void topupIcon(){
        waitABit(2000);
        androidDriver.findElement(TOPUP_ICON).click();
    }

    public String getUserBalance(){
        return waitElement(USER_BALANCE,30).getText();
    }

    public String checkVoucherPrice() {
        return waitElement(VOUCHER_PRICE_CHECK, 20).getText();
    }

    public String checkVoucherDiscount(){
        return waitElement(VOUCHER_DISCOUNT_CHECK, 20).getText();
    }

    public Boolean checkMerchantCategory(String keyword){
        int counter = 0;

        do {
            waitABit(10000);
            List<AndroidElement> nameList = AndroidDriverInstance.androidDriver.findElements(VOUCHER_MERCHANT_NAME);
            for (AndroidElement name : nameList) {
                if (!name.getText().toLowerCase().startsWith(keyword.toLowerCase())) {
                    System.out.println("name = " + name.getText());
                    System.out.println("keyword = " + keyword);
                    return false;
                }
            }

            scrollDown();
            System.out.println("scrolling!!!");
            counter++;

        } while (counter <= 50);

        return true;
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
        scroll.press(point(startX, startY))
                .waitAction(waitOptions(ofSeconds(1)))
                .moveTo(point(endX, endY)).release().perform();

         }

    public static void tapAndScroll(String Keyword) {
        boolean isFound = false;
        int counter = 0;

        do {
            String voucher ="";
            waitABit(5000);
            List<AndroidElement> vNameList = androidDriver.findElements(VOUCHERS_NAME);
            for (AndroidElement vName : vNameList) {
                voucher = vName.getText();
                if (vName.getText().trim().equalsIgnoreCase(Keyword.trim())) {
                    System.out.println("Your voucher is found: "+voucher);
                    vName.click();
                    isFound = true;
                    break;
                }
            }

            if (!isFound) {
                scrollDown();
                System.out.println("Passed of Voucher: "+voucher);
                counter++;
            }

        } while (!isFound && counter <= 100);
    }


}



