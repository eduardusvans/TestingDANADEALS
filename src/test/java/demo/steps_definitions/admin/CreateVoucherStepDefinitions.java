package demo.steps_definitions.admin;

import demo.pages.admin.CreateVoucherPage;
import demo.pages.admin.HomeAdminPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class CreateVoucherStepDefinitions {

    CreateVoucherPage createVoucherPage = new CreateVoucherPage();
    HomeAdminPage homeAdmin = new HomeAdminPage();

    @When("User click create voucher button on Home Page")
    public void userClickCreateVoucherButtonOnHomePage() {
        homeAdmin.clickCreateVou();
    }

    @And("User is on Create Voucher Page")
    public void userIsOnCreateVoucherPage() {
        boolean status = createVoucherPage.isOnCreatePage();
        Assert.assertTrue(status);
    }

    @And("User click status dropdown for changing the status in Create Voucher Page")
    public void userClickStatusDropdownForChangingTheStatusInCreateVoucherPage() {
        createVoucherPage.statusVoucher();
    }

    @And("User choose {string} for status of voucher in Create Voucher Page")
    public void userChooseForStatusOfVoucherInCreateVoucherPage(String status) {
        createVoucherPage.clickStatus(status);
    }

    @And("User input {string} in Voucher Name text field on Create Voucher Page")
    public void userInputInVoucherNameTextFieldOnCreateVoucherPage(String vouName) {
        createVoucherPage.inputVoucherName(vouName);
    }

    @And("User input {string} in Merchant ID text field on Create Voucher Page")
    public void userInputInMerchantIDTextFieldOnCreateVoucherPage(String merchantID) {
        createVoucherPage.inputMerchantId(merchantID);
    }

    @And("User input {string} in Discount text field on Create Voucher Page")
    public void userInputInDiscountTextFieldOnCreateVoucherPage(String discountValue) {
        createVoucherPage.inputDiscount(discountValue);
    }

    @And("User input {string} in Max Discount text field on Create Voucher Page")
    public void userInputInMaxDiscountTextFieldOnCreateVoucherPage(String maxDisc) {
        createVoucherPage.inputMaxDiscount(maxDisc);
    }

    @And("User choose {string} in Expired Date text field on Create Voucher Page")
    public void userChooseInExpiredDateTextFieldOnCreateVoucherPage(String expireDate) {
        createVoucherPage.chooseExpiredDate(expireDate);
    }

    @And("User input {string} in Quota text field on Create Voucher Page")
    public void userInputInQuotaTextFieldOnCreateVoucherPage(String quotaValue) {
        createVoucherPage.quotaVoucher(quotaValue);
    }

    @And("User input {string} in Voucher Price text field on Create Voucher Page")
    public void userInputInVoucherPriceTextFieldOnCreateVoucherPage(String vouPrice) {
        createVoucherPage.inputVoucherPrice(vouPrice);
    }

    @And("User click create button on Create Voucher Page")
    public void userClickCreateButtonOnCreateVoucherPage() {
        createVoucherPage.clickCreateButton();
    }

    @Then("User will redirect into Home Page")
    public void userWillRedirectIntoHomePage() {
        homeAdmin.isOnPage();
    }

    @And("User will see {string} message in Home Page")
    public void userWillSeeMessageInHomePage(String success) {
        String actual = homeAdmin.successMessage();
        Assert.assertEquals(success,actual);
    }

    @Then("User will see error {string} message in Create Voucher Page")
    public void userWillSeeErrorMessageInCreateVoucherPage(String failed) {
        String actual = createVoucherPage.failedMessage();
        Assert.assertEquals(failed,actual);
    }

    @And("User will find button is disabled on Create Voucher Page")
    public void userWillFindButtonIsDisabledOnCreateVoucherPage() {
        createVoucherPage.clickCreateButton();
        boolean status = createVoucherPage.createDisabledButton();
        Assert.assertFalse(status);
    }
}
