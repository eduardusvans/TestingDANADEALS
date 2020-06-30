package demo.steps_definitions;

import demo.pages.admin.HomeAdminPage;
import demo.utils.ActionUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class HomeAdminStepDefinitions {

    HomeAdminPage homeAdminPage = new HomeAdminPage();

    @Given("User wait for the voucher list to be loaded")
    public void userWaitForTheVoucherListToBeLoaded() {
        boolean status = homeAdminPage.checkProgressBar();
        Assert.assertFalse(status);
        ActionUtils.waitABit(1000);
    }

    @Given("User input {string} on Search Merchant input text field on Home Admin page")
    public void userInputOnSearchMerchantInputTextFieldOnHomeAdminPage(String keyword) {
        homeAdminPage.inputSearchVoucher(keyword);
    }

    @Then("User see the voucher in the voucher list that has {string} on its merchant name on Home Admin page")
    public void userSeeTheVoucherInTheVoucherListThatHasOnItsMerchantNameOnHomeAdminPage(String keyword) {
        boolean status = homeAdminPage.checkKeywordVoucherPresence(keyword);
        Assert.assertTrue(status);
    }

    @Then("User see the warning notification that says the voucher cannot be found")
    public void userSeeTheWarningNotificationThatSaysTheVoucherCannotBeFound() {
        ActionUtils.waitABit(5000);
    }

    @Then("User cannot see any voucher on Home Admin page")
    public void userCannotSeeAnyVoucherOnHomeAdminPage() {
        boolean status = homeAdminPage.checkVoucherListPresence(5);
        Assert.assertFalse(status);
    }

    @Given("User tap {string} button on Home Admin page")
    public void userTapButtonOnHomeAdminPage(String chosenStatus) {
        homeAdminPage.tapFilterButton(chosenStatus);
    }

    @Then("User see the voucher in the voucher list that has {string} on its status on Home Admin page")
    public void userSeeTheVoucherInTheVoucherListThatHasOnItsStatusOnHomeAdminPage(String chosenStatus) {
        boolean status = homeAdminPage.checkStatusVoucherPresence(chosenStatus);
        Assert.assertTrue(status);
    }

    @When("User tap Reset button on Home Admin page")
    public void userTapResetButtonOnHomeAdminPage() {
        homeAdminPage.tapResetButton();
    }

    @When("User clear the Search Merchant input text field on Home Admin page")
    public void userClearTheSearchMerchantInputTextFieldOnHomeAdminPage() {
        homeAdminPage.clearInputSearchVoucher();
    }

    @Then("User see all of the existing vouchers on Home Admin page")
    public void userSeeAllOfTheExistingVouchersOnHomeAdminPage() {
        boolean status = homeAdminPage.checkAllVouchersPresence();
        Assert.assertTrue(status);
    }

    @Given("User tap Logout button on Home Admin page")
    public void userTapLogoutButtonOnHomeAdminPage() {
        homeAdminPage.tapLogoutButton();
    }

    @When("User see the loading screen")
    public void userSeeTheLoadingScreen() {
    }

    @When("User see the voucher list on Home Admin page")
    public void userSeeTheVoucherListOnHomeAdminPage() {
        boolean status = homeAdminPage.checkVoucherListPresence(30);
        Assert.assertTrue(status);
    }
}
