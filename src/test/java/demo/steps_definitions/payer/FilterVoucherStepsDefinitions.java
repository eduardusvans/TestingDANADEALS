package demo.steps_definitions.payer;

import demo.pages.payer.home.HomePayer;
import demo.pages.payer.home.VoucherCashierPage;
import demo.pages.payer.home.VoucherDetailPayerPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FilterVoucherStepsDefinitions {

    HomePayer homePayer = new HomePayer();
    VoucherDetailPayerPage voucherDetailPayerPage = new VoucherDetailPayerPage();
    VoucherCashierPage voucherCashierPage = new VoucherCashierPage();

    @When("User click filter dropdown menu button on DANA Deals homepage")
    public void userClickFilterDropdownMenuButtonOnDANADealsHomepage() {
        homePayer.clickFilterButton();
    }

    @When("User choose {string} to filter the voucher")
    public void userChooseToFilterTheVoucher(String Keyword) {
        homePayer.chooseFilter(Keyword);
    }

    @Then("User see all vouchers of the {string} are displayed")
    public void userSeeAllVouchersOfTheAreDisplayed(String arg0) {
    }

    @When("User choose all of the {string} filter feature to filter the voucher.")
    public void userChooseAllOfTheFilterFeatureToFilterTheVoucher(String arg0) {
    }

    @When("User see all vouchers of the all {string} are displayed")
    public void userSeeAllVouchersOfTheAllAreDisplayed(String arg0) {
    }

    @When("User click reset button on DANA Deals homepage")
    public void userClickResetButtonOnDANADealsHomepage() {
    }

    @Then("User see all vouchers are displayed")
    public void userSeeAllVouchersAreDisplayed() {
    }

    @When("User choose {string} value to filter the voucher")
    public void userChooseValueToFilterTheVoucher(String arg0) {
    }

    @Then("User can't find any {string} value on the filter menu")
    public void userCanTFindAnyValueOnTheFilterMenu(String arg0) {
    }

    @When("user is on voucher details page of {string}")
    public void userIsOnVoucherDetailsPageOf(String arg0) {
    }

    @When("User back to DANA Deals homepage and choose {string} to filter the voucher")
    public void userBackToDANADealsHomepageAndChooseToFilterTheVoucher(String arg0) {
    }

    @Then("User see the {string} is not displayed")
    public void userSeeTheIsNotDisplayed(String arg0) {
    }
}
