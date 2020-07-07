package demo.steps_definitions.payer;

import demo.pages.payer.home.HomePayer;
import demo.pages.payer.home.VoucherCashierPage;
import demo.pages.payer.home.VoucherDetailPayerPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import static demo.utils.ActionUtils.waitABit;

public class PayVoucherStepsDefinitions {

    VoucherCashierPage voucherCashierPage = new VoucherCashierPage();
    HomePayer homePayer = new HomePayer();

    @Then("User see pop up notification that pay success")
    public void userSeePopUpNotificationThatPaySuccess() {
        String text = voucherCashierPage.checkToastMessage();
        Assert.assertTrue(text.contains("successful"));
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
        String text = voucherCashierPage.checkToastMessage();
        Assert.assertTrue(text.contains("failed"));
    }

    @When("User click pay voucher button on cashier page")
    public void userClickPayVoucherButtonOnCashierPage() {
        voucherCashierPage.clickPay();
    }
}