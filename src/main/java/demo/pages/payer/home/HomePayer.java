package demo.pages.payer.home;
import demo.driver.AndroidDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static demo.locators.payer.home.HomePayerPageLocator.*;

public class HomePayer {
    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 30);
        return wait.until(ExpectedConditions.presenceOfElementLocated(USER_NAME)).isDisplayed();
    }

    public void inputSearch(String Keyword){
        AndroidDriverInstance.androidDriver.findElement(SEARCH_VOUCHER).sendKeys(Keyword);
    }

    public void chooseFilter(String Keyword){
        AndroidDriverInstance.androidDriver.findElement(FILTER_BUTTON).click();
    }

    public void chooseSort(String Keyword){
        AndroidDriverInstance.androidDriver.findElement(SORT_BUTTON).click();
    }

    public void clickBuy(String Keyword){
        AndroidDriverInstance.androidDriver.findElement(BUY_BUTTON_ON_VOUCHER).click();
    }

    public void clickVoucher(String Keyword){
        AndroidDriverInstance.androidDriver.findElement(VIEW_DETAILS_VOUCHER).click();
    }

    /*public boolean checkVoucher(String Keyword){
        return AndroidDriverInstance.androidDriver.findElement().getText();
    }*/
}
