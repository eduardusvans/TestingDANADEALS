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
    public void userTypeAAtSearchFieldOnDANADealsHomepage(String Keyword) {
    }

    @Then("User see all vouchers that contains the {string} are displayed")
    public void userSeeAllVouchersThatContainsTheAreDisplayed(String Keyword) {
    }

    @Then("User see all vouchers of {string} that contains the {string} are displayed")
    public void userSeeAllVouchersOfThatContainsTheAreDisplayed(String Keyword1, String Keyword2) {
    }

    @When("User type {string} at search field on DANA Deals Homepage")
    public void userTypeAtSearchFieldOnDANADealsHomepage(String Keyword) {
    }

    @And("User see the voucher that {string} is displayed")
    public void userSeeTheVoucherThatIsDisplayed(String Keyword) {
    }

    @And("User delete the {string} on search field")
    public void userDeleteTheOnSearchField(String Keyword) {
    }

    @Then("User see all vouchers are displayed")
    public void userSeeAllVouchersAreDisplayed() {
    }


    @Then("User can't find any voucher and see error message")
    public void userCanTFindAnyVoucherAndSeeErrorMessage() {
    }
}
