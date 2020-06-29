package demo.pages.admin;
import com.github.javafaker.Faker;
import demo.driver.AndroidDriverInstance;
import demo.utils.RandomUtils;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;
import com.github.javafaker.Faker;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.locators.admin.CreateVoucherPageLocator.*;
import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.utils.ActionUtils.inputElement;
import static demo.utils.ActionUtils.waitElement;
import static demo.utils.ActionUtils.*;

public class CreateVoucherPage {

    private static final Faker faker = new Faker();

    public boolean isOnCreatePage() {
        return waitElement(CREATE_PAGE, 30).isDisplayed();
    }

    public void statusVoucher() {
        AndroidDriverInstance.androidDriver.findElement(STATUS_VOUCHER).click();
    }

    public void clickStatus(String statuss){
        waitAbit(2000);
        switch (statuss.toLowerCase()) {
            case "active":
                AndroidDriverInstance.androidDriver.findElement(ACTIVE_STATUS).click();
                break;
            case "inactive":
                AndroidDriverInstance.androidDriver.findElement(INACTIVE_STATUS).click();
                break;
        }
    }

    public void inputVoucherName(String voucherName){

        voucherName = voucherNameSetter(voucherName);

        AndroidDriverInstance.androidDriver.findElement(VOUCHER_NAME).sendKeys(voucherName);
    }

    public void inputMerchantId(String merchantId){
        AndroidDriverInstance.androidDriver.findElement(MERCHANT_ID).sendKeys(merchantId);
    }

    public void inputDiscount(String discount){
        AndroidDriverInstance.androidDriver.findElement(DISCOUNT).sendKeys(discount);
    }

    public void inputMaxDiscount(String maxDiscount){
        inputAndScroll(MAX_DISCOUNT, maxDiscount);
    }

    public void chooseExpiredDate(String expireDate){
        inputAndScroll(EXPIRED_DATE, expireDate);
    }

    public void quotaVoucher(String quotaVou){
        inputAndScroll(QUOTA, quotaVou);
    }

    public void inputVoucherPrice(String vouPrice){
        inputAndScroll(VOUCHER_PRICE, vouPrice);
    }

    public void clickCreateButton(){
        tapAndScroll(CREATE_BUTTON);
    }

    public void waitAbit(int millis){
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void scrollDown() {
        AndroidElement screen = androidDriver
                .findElement(By.xpath("//android.widget.ScrollView/android.widget.LinearLayout"));
        Point center =  screen.getCenter();
        int startX = 20;
        int startY = (int) (center.getY() * 1.5);
        int endX = 20;
        int endY = (int) (center.getY() * 0.5);
        @SuppressWarnings("rawtypes")
        TouchAction scroll = new TouchAction(androidDriver);
        scroll.press(PointOption.point(startX, startY))
                .moveTo(PointOption.point(endX, endY)).perform();
    }

    public static void inputAndScroll(By targetElement, String input) {
        boolean isFound = false;
        int counter = 0;

        do {
            try {
                inputElement(targetElement, input);
                isFound = true;
            } catch (Exception e) {
                scrollDown();
                counter++;
            }

        } while (!isFound && counter < 5);
    }

    public static void tapAndScroll(By targetElement) {
        boolean isFound = false;
        int counter = 0;

        do {
            try {
                tapElement(targetElement);
                isFound = true;
            } catch (Exception e) {
                scrollDown();
                counter++;
            }

        } while (!isFound && counter < 5);
    }

    public static String voucherNameSetter(String voucherName) {
        voucherName = nullChanger(voucherName);
        int randomPick = faker.number().numberBetween(4, 20);

        //Generate random voucherName for positive scenario
        if(voucherName.toLowerCase().contains("random")) {
            if(voucherName.toLowerCase().contains("min")) {
                return RandomUtils.generateVoucherName(3);
            }
            else if(voucherName.toLowerCase().contains("max")) {
                return RandomUtils.generateVoucherName(20);
            }
            else if(voucherName.toLowerCase().contains("invalid min")) {
                return RandomUtils.generateVoucherName(2);
            }
            else if(voucherName.toLowerCase().contains("invalid max")) {
                return RandomUtils.generateVoucherName(21);
            } else {
                return RandomUtils.generateVoucherName(randomPick);
            }
        } else {
            return voucherName;
        }
    }

    public String failedMessage(){
        return androidDriver.findElement(FAILED_TOAST_MESSAGE).getText();
    }

}
