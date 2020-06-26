package demo.steps_definitions.payer;

import demo.pages.payer.home.HomePayer;
import demo.pages.payer.home.VoucherCashierPage;
import demo.pages.payer.home.VoucherDetailPayerPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SearchVoucherStepsDefinitions {

    HomePayer homePayer = new HomePayer();
    VoucherDetailPayerPage voucherDetailPayerPage = new VoucherDetailPayerPage();
    VoucherCashierPage voucherCashierPage = new VoucherCashierPage();

    @Given("User is on DANA Deals Homepage")
    public void userIsOnDANADealsHomepage() {
    }

    @When("User type a {string} at search field on DANA Deals Homepage")
    public void userTypeAAtSearchFieldOnDANADealsHomepage(String Keyword) {
        homePayer.inputSearch(Keyword);
    }

    @Then("User see all vouchers of {string} that contains the {string} are displayed")
    public void userSeeAllVouchersOfThatContainsTheAreDisplayed(String arg0, String arg1) {
    }

    @When("User type {string} at search field on DANA Deals Homepage")
    public void userTypeAtSearchFieldOnDANADealsHomepage(String arg0) {
    }

    @Then("User can't find any voucher and see error message")
    public void userCanTFindAnyVoucherAndSeeErrorMessage() {
    }

    @When("User click pay voucher button on cashier page")
    public void userClickPayVoucherButtonOnCashierPage() {
    }

    @When("User back to DANA Deals homepage and type a {string} at search field")
    public void userBackToDANADealsHomepageAndTypeAAtSearchField(String arg0) {
    }
}
