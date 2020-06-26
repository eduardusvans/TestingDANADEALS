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

    @And("User is on Top up Page")
    public void userIsOnTopUpPage() {
        topupPage.isOnTopupPage();
    }

    @And("User see Balance on Top up Page")
    public void userSeeBalanceOnTopUpPage() {
        topupPage.getBalance();
    }

    @And("User choose {string} as top up nominal on Top up Page")
    public void userChooseAsTopUpNominalOnTopUpPage(String nominal) {
        topupPage.chooseTopupNominal(nominal);

    }

    @And("User choose Virtual account as a payment method on Top up Page")
    public void userChooseVirtualAccountAsAPaymentMethodOnTopUpPage() {
        topupPage.chooseVirtualAccount();
    }

    @And("User choose Merchant as a payment method on Top up Page")
    public void userChooseMerchantAsAPaymentMethodOnTopUpPage() {
        topupPage.chooseMerchant();
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

    @And("User will get {string} as Virtual Account Number on Payment Page")
    public void userWillGetAsVirtualAccountNumberOnPaymentPage(String vaCode) {
        String code = topUpCashierPage.getVirtualAccNumber();
        Assert.assertEquals(vaCode, code);
    }

    @And("User click Top up button on Top up Payment Page")
    public void userClickTopUpButtonOnTopUpPaymentPage() {
        topUpCashierPage.clickTopupButton();
    }

    @Then("User will see total balance is increase in Home page")
    public void userWillSeeTotalBalanceIsIncreaseInHomePage() {
        String replaceBalance = topupPage.getBalance().replace("Rp","")
                .replace(".","");
        String replaceNominal = topupPage.getBalance().replace("Rp","")
                .replace(".","");
        String replaceSaldo = topupPage.getBalance().replace("Rp","")
                .replace(".","");

        int balance = Integer.parseInt(replaceBalance);
        int nominal = Integer.parseInt(replaceNominal);
        int topup = balance + nominal;
        int actual = Integer.parseInt(replaceSaldo);
        Assert.assertEquals(topup,actual);
    }


    @And("User get info of Nominal top up ordered on Payment Page")
    public void userGetInfoOfNominalTopUpOrderedOnPaymentPage() {

    }

}
