package demo.steps_definitions.payer;

import demo.pages.payer.home.HomePayer;
import demo.pages.payer.home.TopUpCashierPage;
import demo.pages.payer.home.TopUpPagePage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class TopupStepDefinitions {
    TopUpPagePage topupPage = new TopUpPagePage();
    TopUpCashierPage topUpCashierPage = new TopUpCashierPage();
    HomePayer homePayer = new HomePayer();

    @When("User click top up icon button on Home Page")
    public void userClickTopUpIconButtonOnHomePage() {
        homePayer.topupIcon();
    }

    @And("User choose {string} as top up nominal on Top up Page")
    public void userChooseAsTopUpNominalOnTopUpPage(String nominal) {
        topupPage.chooseTopupNominal(nominal);

    }

    @And("User choose {string} as a payment method on Top up Page")
    public void userChooseAsAPaymentMethodOnTopUpPage(String virtualAcc) {
        topupPage.chooseVirtualAccount(virtualAcc);
    }

    @And("User choose {string} to pay the top up on Top up Page")
    public void userChooseToPayTheTopUpOnTopUpPage(String bankPayment) {
        topupPage.chooseBankPayment(bankPayment);
    }

    @And("User click Next Button on Top up Page")
    public void userClickNextButtonOnTopUpPage() {
        topupPage.clickNextButton();
    }

    @Then("User will redirect into Payment Page")
    public void userWillRedirectIntoPaymentPage() {
        topUpCashierPage.isOnTopupPaymentPage();


    }

    @And("User will get {string} as Virtual Account Number")
    public void userWillGetAsVirtualAccountNumber(String vaCode) {
        String code = topUpCashierPage.getVirtualAccNumber();
        Assert.assertEquals(vaCode, code);

    }

    @And("User click Top up button on Top up cashier Page")
    public void userClickTopUpButtonOnTopUpCashierPage() {
        topUpCashierPage.clickTopupButton();
    }

}
