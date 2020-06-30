package demo.steps_definitions.payer;

import demo.pages.payer.home.HomePayer;
import demo.pages.payer.home.VoucherCashierPage;
import demo.pages.payer.home.VoucherDetailPayerPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SortVoucherStepsDefinitions {

    HomePayer homePayer = new HomePayer();
    VoucherDetailPayerPage voucherDetailPayerPage = new VoucherDetailPayerPage();
    VoucherCashierPage voucherCashierPage = new VoucherCashierPage();

    @When("User click sort dropdown menu button on DANA Deals homepage")
    public void userClickSortDropdownMenuButtonOnDANADealsHomepage() {
        homePayer.clickSortButton();
    }

    @When("User choose {string} to sort the voucher")
    public void userChooseToSortTheVoucher(String Keyword) {
        homePayer.chooseSort(Keyword);
    }

    @Then("User see sort voucher by {string} feature is not displayed")
    public void userSeeSortVoucherByFeatureIsNotDisplayed(String Keyword) {
    }

    @When("User see pop up notification that payment is success")
    public void userSeePopUpNotificationThatPaymentIsSuccess() {
    }

    @When("User back to DANA Deals homepage and choose {string} to sort the voucher")
    public void userBackToDANADealsHomepageAndChooseToSortTheVoucher(String arg0) {
    }

    @Then("User see the {string} voucher is not displayed")
    public void userSeeTheVoucherIsNotDisplayed(String arg0) {
    }
}