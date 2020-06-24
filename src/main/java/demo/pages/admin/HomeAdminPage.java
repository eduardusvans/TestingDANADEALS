package demo.pages.admin;

import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.admin.HomeAdminPageLocator.*;
import static demo.utils.ActionUtils.waitElement;

public class HomeAdminPage {
    public boolean isOnPage() {
        return waitElement(BUTTON_LOGOUT, 20).isDisplayed();
    }

    public void clickVoucher(String statusVoucher) {
        androidDriver.findElement(VOUCHER).click();
        String xpath = "";
        List<AndroidElement> statuss = androidDriver.findElements(By.xpath(xpath));

        for (WebElement status : statuss) {
            if (status.getText().equalsIgnoreCase(statusVoucher)) {
                status.click();
                break;
            }
        }
    }

    public void clickCreateVou(){
        waitAbit(3000);
        androidDriver.findElement(CREATE_VOUCHER).click();
    }

    public void waitAbit(int millis){
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


}
