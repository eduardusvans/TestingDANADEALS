package demo.steps_definitions.payer;

import demo.pages.payer.home.HomePayer;
import demo.pages.payer.home.VoucherCashierPage;
import demo.pages.payer.home.VoucherDetailPayerPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import static demo.utils.ActionUtils.waitABit;

public class ViewDetailsStepsDefinitions {

    VoucherDetailPayerPage voucherDetailPayerPage = new VoucherDetailPayerPage();

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


    @When("User click back button on voucher details page")
    public void userClickBackButtonOnVoucherDetailsPage() {
        voucherDetailPayerPage.clickBack();
    }


    @When("User click back on voucher details page")
    public void userClickBackOnVoucherDetailsPage() {
        voucherDetailPayerPage.clickBack();
    }
}