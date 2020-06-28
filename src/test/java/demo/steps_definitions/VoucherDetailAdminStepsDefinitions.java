package demo.steps_definitions;

import demo.pages.admin.HomeAdminPage;
import demo.pages.admin.VoucherDetailAdminPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import static demo.locators.admin.HomeAdminPageLocator.VOUCHER;
import static demo.utils.ActionUtils.tapElement;

public class VoucherDetailAdminStepsDefinitions {
    HomeAdminPage homeAdminPage = new HomeAdminPage();
    VoucherDetailAdminPage voucherDetailAdminPage = new VoucherDetailAdminPage();



    @Then("User is on Voucher Detail page")
    public void userIsOnVoucherDetailPage() { voucherDetailAdminPage.isOnPage(); }

    @Given("User tap any voucher")
    public void userTapAnyVoucher() { homeAdminPage.tapAnyVoucher();}

    @When("User tap Status")
    public void userTapStatus() {
       voucherDetailAdminPage.tapStatus();
    }

    @And("User tap Save")
    public void userTapSave() { voucherDetailAdminPage.tapSave(); }

    @Then("User see success notification")
    public void userSeeSuccessNotification() { }

    @Then("User see status textview")
    public void userSeeStatusTextview() { Assert.assertTrue(voucherDetailAdminPage.seeStatusVoucher()); }

    @Then("User see voucher name textview")
    public void userSeeVoucherNameTextview() { Assert.assertTrue(voucherDetailAdminPage.seeVoucherName()); }

    @Then("User see merchant id textview")
    public void userSeeMerchantIdTextview() { Assert.assertTrue(voucherDetailAdminPage.seeMerchantID()); }

    @Then("User see discount textview")
    public void userSeeDiscountTextview() { Assert.assertTrue(voucherDetailAdminPage.seeDiscount()); }

    @Then("User see max discount textview")
    public void userSeeMaxDiscountTextview() { Assert.assertTrue(voucherDetailAdminPage.seeMaxDiscount());}

    @Then("User see voucher price textview")
    public void userSeeVoucherPriceTextview() { Assert.assertTrue(voucherDetailAdminPage.seeVoucherPrice());}

    @Then("User see expired textview")
    public void userSeeExpiredTextview() { Assert.assertTrue(voucherDetailAdminPage.seeExpired()); }

    @Then("User see quota input textfield")
    public void userSeeQuotaInputTextfield() { Assert.assertTrue(voucherDetailAdminPage.seeQuota());}

    @Then("User see increase button")
    public void userSeeIncreaseButton() { Assert.assertTrue(voucherDetailAdminPage.seeIncrease()); }

    @Then("User see save button")
    public void userSeeSaveButton() { Assert.assertTrue(voucherDetailAdminPage.seeSave()); }

    @When("User tap Increase")
    public void userTapIncrease() { voucherDetailAdminPage.tapIncrease();}

    @When("User tap Voucher {string}")
    public void userTapVoucher(String voucherName) { homeAdminPage.tapVoucher(voucherName); }

    @When("User input quota {string}")
    public void userInputQuota(String quota) { voucherDetailAdminPage.inputQuota(quota); }
}
