package demo.steps_definitions.payer;

import demo.pages.payer.home.HomePayer;
import demo.pages.payer.home.VoucherCashierPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class SearchVoucherStepsDefinitions {

    HomePayer homePayer = new HomePayer();
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
        boolean status = homePayer.checkAllVouchers();
        Assert.assertFalse(status);
        String text = voucherCashierPage.checkToastMessage();
        Assert.assertTrue(text.contains("not found"));
    }

    @Then("User see all vouchers of {string} are displayed")
    public void userSeeAllVouchersOfAreDisplayed(String Keyword) {
        boolean Merchant = homePayer.checkMerchantCategory(Keyword);
        Assert.assertTrue(Merchant);
    }

    @When("User delete text on search field and type a {string} at search field on DANA Deals Homepage")
    public void userDeleteTextOnSearchFieldAndTypeAAtSearchFieldOnDANADealsHomepage(String Keyword) {
        homePayer.clearSearch();
        homePayer.inputSearch(Keyword);
    }

    @Then("User see all vouchers are displayed")
    public void userSeeAllVouchersAreDisplayed() {
       boolean status = homePayer.checkAllVouchers();
       Assert.assertTrue(status);
    }

    @When("User click reset button on DANA Deals homepage")
    public void userClickResetButtonOnDANADealsHomepage() {
        homePayer.tapReset();
    }

    @Then("User see the {string} is displayed")
    public void userSeeTheIsDisplayed(String Keyword) {
        homePayer.checkVoucherName(Keyword);

    }

    @When("User delete text on search field")
    public void userDeleteTextOnSearchField() {
        homePayer.clearSearch();
    }
}
