package demo.steps_definitions.payer;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import demo.pages.payer.home.*;
import org.junit.Assert;
import static demo.utils.ActionUtils.waitABit;

public class BuyVoucherStepsDefinitions {

    HomePayer homePayer = new HomePayer();
    VoucherDetailPayerPage voucherDetailPayerPage = new VoucherDetailPayerPage();
    VoucherCashierPage voucherCashierPage = new VoucherCashierPage();


    @When("User click {string} on DANA Deals homepage")
    public void userClickOnDANADealsHomepage(String Keyword) {
        homePayer.clickVoucher(Keyword);
    }

    @When("User is on voucher details page of {string}")
    public void userIsOnVoucherDetailsPageOf(String Keyword) {
        voucherDetailPayerPage.isOnPage();
        String getText = voucherDetailPayerPage.checkVoucherName();
        Assert.assertEquals(Keyword, getText);
    }

    @When("User click buy button on voucher details page")
    public void userClickBuyButtonOnVoucherDetailsPage() {
        voucherDetailPayerPage.clickBuy();
    }


    @When("User click {string} to see voucher details")
    public void userClickToSeeVoucherDetails(String Keyword) {
        homePayer.clickVoucher(Keyword);
    }


    @Then("User see pop up notification that voucher not available")
    public void userSeePopUpNotificationThatVoucherNotAvailable() {
        String text = voucherCashierPage.checkToastMessage();
       Assert.assertTrue(text.contains("not available"));

    }

    @When("User click buy button of {string} on DANA Deals homepage")
    public void userClickBuyButtonOfOnDANADealsHomepage(String Keyword) {
    }
}
