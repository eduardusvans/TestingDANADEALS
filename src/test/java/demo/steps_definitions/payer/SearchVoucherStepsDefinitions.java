package demo.steps_definitions.payer;

import demo.pages.payer.home.HomePayer;
import demo.pages.payer.home.VoucherCashierPage;
import demo.pages.payer.home.VoucherDetailPayerPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.checkerframework.checker.units.qual.K;
import org.junit.Assert;

public class SearchVoucherStepsDefinitions {

    HomePayer homePayer = new HomePayer();
    VoucherDetailPayerPage voucherDetailPayerPage = new VoucherDetailPayerPage();
    VoucherCashierPage voucherCashierPage = new VoucherCashierPage();

    @Given("User is on DANA Deals Homepage")
    public void userIsOnDANADealsHomepage() {
        homePayer.isOnPage();
        homePayer.seeVoucher();
        homePayer.seeTopUp();
    }

    @When("User type a {string} at search field on DANA Deals Homepage")
    public void userTypeAAtSearchFieldOnDANADealsHomepage(String Keyword) {
        homePayer.inputSearch(Keyword);
    }

    @Then("User can't find any voucher and see error message")
    public void userCanTFindAnyVoucherAndSeeErrorMessage() {
        String text = voucherCashierPage.checkToastMessage();
        Assert.assertTrue(text.contains("not found"));
    }

    @When("User click pay voucher button on cashier page")
    public void userClickPayVoucherButtonOnCashierPage() {
    }

    @When("User back to DANA Deals homepage and type a {string} at search field")
    public void userBackToDANADealsHomepageAndTypeAAtSearchField(String Keyword) {
    }

    @Then("User see all vouchers of {string} are displayed")
    public void userSeeAllVouchersOfAreDisplayed(String Keyword) {
        String Merchant = homePayer.checkMerchantCategory();
        Assert.assertTrue(Merchant.contains(Keyword));
    }
}
