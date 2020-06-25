package demo.steps_definitions.payer;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import demo.pages.payer.home.*;
import org.junit.Assert;

public class BuyVoucherStepsDefinitions {

    HomePayer homePayer = new HomePayer();
    VoucherDetailPayerPage voucherDetailPayerPage = new VoucherDetailPayerPage();
    VoucherCashierPage voucherCashierPage = new VoucherCashierPage();
    
    @When("User click buy button of {string} on DANA Deals homepage")
    public void userClickBuyButtonOfOnDANADealsHomepage(String Keyword) {
    }

    @Then("User see is on cashier page of {string}")
    public void userSeeIsOnCashierPageOf(String Keyword) {
    }

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

    @When("User click buy button on {string}")
    public void userClickBuyButtonOn(String arg0) {
    }

    @When("User click {string} to see voucher details")
    public void userClickToSeeVoucherDetails(String Keyword) {
        homePayer.clickVoucher(Keyword);
    }

    @When("User see all vouchers are sorted from high to low of voucher value start from {string}")
    public void userSeeAllVouchersAreSortedFromHighToLowOfVoucherValueStartFrom(String arg0) {
    }

    @When("User search {string} to buy voucher on DANA Deals homepage")
    public void userSearchToBuyVoucherOnDANADealsHomepage(String arg0) {
    }

    @Then("User see {string} is not displayed")
    public void userSeeIsNotDisplayed(String arg0) {
    }

    @When("Admin open DANA Deals app")
    public void adminOpenDANADealsApp() {
    }

    @When("Admin do login for admin side on login page")
    public void adminDoLoginForAdminSideOnLoginPage() {
    }

    @When("Admin click {string} on DANA Deals admin homepage")
    public void adminClickOnDANADealsAdminHomepage(String arg0) {
    }

    @When("Admin edit {string} voucher status become inactive on admin voucher details page")
    public void adminEditVoucherStatusBecomeInactiveOnAdminVoucherDetailsPage(String arg0) {
    }

    @Then("User see pop up notification that voucher not available")
    public void userSeePopUpNotificationThatVoucherNotAvailable() {
        String text = voucherCashierPage.checkToastMessage();
        Assert.assertTrue(text.contains("not available"));

    }

    @When("Admin edit {string} voucher stock become out of stock on admin voucher details page")
    public void adminEditVoucherStockBecomeOutOfStockOnAdminVoucherDetailsPage(String arg0) {
    }

    @Then("User see pop up notification that voucher is out of stock")
    public void userSeePopUpNotificationThatVoucherIsOutOfStock() {
    }

    @When("User{int} click {string} on DANA Deals homepage")
    public void userClickOnDANADealsHomepage(int arg0, String arg1) {
    }

    @When("User{int} is on voucher details page of {string}")
    public void userIsOnVoucherDetailsPageOf(int arg0, String arg1) {
    }

    @When("User{int} click buy button on voucher details page")
    public void userClickBuyButtonOnVoucherDetailsPage(int arg0) {
    }

    @When("User{int} see is on cashier page of {string}")
    public void userSeeIsOnCashierPageOf(int arg0, String arg1) {
    }

    @Then("User{int} see pop up notification that voucher is out of stock")
    public void userSeePopUpNotificationThatVoucherIsOutOfStock(int Keyword) {

    }
}
