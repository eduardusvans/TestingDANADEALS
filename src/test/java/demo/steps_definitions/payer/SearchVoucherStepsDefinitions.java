package demo.steps_definitions.payer;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SearchVoucherStepsDefinitions {
    @Given("User is on DANA Deals Homepage")
    public void userIsOnDANADealsHomepage() {
    }

    @When("User type a {string} at search field on DANA Deals Homepage")
    public void userTypeAAtSearchFieldOnDANADealsHomepage(String arg0) {
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
