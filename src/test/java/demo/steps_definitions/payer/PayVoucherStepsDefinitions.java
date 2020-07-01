package demo.steps_definitions.payer;

import demo.pages.payer.home.HomePayer;
import demo.pages.payer.home.VoucherCashierPage;
import demo.pages.payer.home.VoucherDetailPayerPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class PayVoucherStepsDefinitions {

    HomePayer homePayer = new HomePayer();
    VoucherDetailPayerPage voucherDetailPayerPage = new VoucherDetailPayerPage();
    VoucherCashierPage voucherCashierPage = new VoucherCashierPage();

    @Then("User see pop up notification that pay success")
    public void userSeePopUpNotificationThatPaySuccess() {
        String text = voucherCashierPage.checkToastMessage();
        Assert.assertTrue(text.contains("done"));
    }


    @Then("User see pop up notification that balance not enough")
    public void userSeePopUpNotificationThatBalanceNotEnough() {
        String text = voucherCashierPage.checkToastMessage();
        Assert.assertTrue(text.contains("not enough"));
    }

    @When("User click pay button on cashier page")
    public void userClickPayButtonOnCashierPage() {
        voucherCashierPage.clickPay();
    }

    @When("User is on voucher cashier page of {string}")
    public void userIsOnVoucherCashierPageOf(String Keyword) {
        voucherCashierPage.isOnPage();
        String getText = voucherCashierPage.checkVoucherName();
        Assert.assertEquals(getText, Keyword);
    }

    @When("User click back button on cashier page")
    public void userClickBackButtonOnCashierPage() {
        voucherCashierPage.clickBack();
    }

    @Then("User see pop up notification that pay failed")
    public void userSeePopUpNotificationThatPayFailed() {
        
    }


    @When("User click pay voucher button on cashier page")
    public void userClickPayVoucherButtonOnCashierPage() {
    }

    @When("User see pop up notification that payment is success")
    public void userSeePopUpNotificationThatPaymentIsSuccess() {
        String text = voucherCashierPage.checkToastMessage();
        Assert.assertTrue(text.contains("done"));
    }
}