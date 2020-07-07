package demo.steps_definitions;

import demo.pages.admin.VoucherDetailAdminPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class VoucherDetailAdminStepsDefinitions {
    VoucherDetailAdminPage voucherDetailAdminPage = new VoucherDetailAdminPage();

    @Then("User is on DANA Deals Voucher Detail page")
    public void userIsOnDANADealsVoucherDetailPage() { voucherDetailAdminPage.isOnPage(); }

    @When("User click status")
    public void userClickStatus() {
    }

    @And("User click Save button")
    public void userClickSaveButton() {

    }

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

    @Then("User see decrease button")
    public void userSeeDecreaseButton() { }

    @Then("User see save button")
    public void userSeeSaveButton() { Assert.assertTrue(voucherDetailAdminPage.seeSave()); }

    @When("User click Increase button")
    public void userClickIncreaseButton() { }

    @When("User click Decrease button")
    public void userClickDecreaseButton() {}

}
