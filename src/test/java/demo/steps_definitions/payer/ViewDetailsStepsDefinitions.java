package demo.steps_definitions.payer;

import demo.pages.payer.home.HomePayer;
import demo.pages.payer.home.VoucherCashierPage;
import demo.pages.payer.home.VoucherDetailPayerPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class ViewDetailsStepsDefinitions {

    HomePayer homePayer = new HomePayer();
    VoucherDetailPayerPage voucherDetailPayerPage = new VoucherDetailPayerPage();


    @When("User click {string} voucher on DANA Deals homepage")
    public void userClickVoucherOnDANADealsHomepage(String arg0) {
    }

    @Then("User see the T&C of voucher is displayed")
    public void userSeeTheTCOfVoucherIsDisplayed() {
        String text =voucherDetailPayerPage.checkContentOnTab();
        Assert.assertTrue(text.contains("Hanya bisa pada aplikasi DANA"));
    }

    @When("User click instruction tab on voucher view details page")
    public void userClickInstructionTabOnVoucherViewDetailsPage() {
        voucherDetailPayerPage.clickInstructionTab();
    }

    @Then("User see the instruction of voucher details is displayed")
    public void userSeeTheInstructionOfVoucherDetailsIsDisplayed() {
        String text =voucherDetailPayerPage.checkContentOnTab();
        Assert.assertTrue(text.contains("Lakukan pembelian via whatsapp pada merchant"));
    }

    @When("User click T&C tab on voucher view details page")
    public void userClickTCTabOnVoucherViewDetailsPage() {
        voucherDetailPayerPage.clickTnCTab();
    }

    @When("User see that all vouchers only based on {string} can be displayed")
    public void userSeeThatAllVouchersOnlyBasedOnCanBeDisplayed(String arg0) {
    }

    @When("User see the voucher details of {string} is displayed")
    public void userSeeTheVoucherDetailsOfIsDisplayed(String arg0) {
    }

    @When("User click back button on voucher details page")
    public void userClickBackButtonOnVoucherDetailsPage() {
        voucherDetailPayerPage.clickBack();
    }

    @Then("User back to DANA Deals homepage")
    public void userBackToDANADealsHomepage() {
    }
}