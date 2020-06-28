package demo.steps_definitions;

import demo.pages.admin.HomeAdminPage;
import demo.pages.admin.VoucherDetailAdminPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class VoucherDetailAdminStepsDefinitions {
    HomeAdminPage homeAdminPage = new HomeAdminPage();
    VoucherDetailAdminPage voucherDetailAdminPage = new VoucherDetailAdminPage();

    String itemStatus;

    @Given("User click Voucher {string}")
    public void userClickVoucher(String statusVoucher) { homeAdminPage.clickVoucher(statusVoucher); }

    @Then("User is on DANA Deals Voucher Detail page")
    public void userIsOnDANADealsVoucherDetailPage() { voucherDetailAdminPage.isOnPage(); }

    @When("User select status {string} on status voucher dropdown list")
    public void userSelectStatusOnStatusVoucherDropdownList(String statusVoucher) {
        itemStatus = statusVoucher;
        VoucherDetailAdminPage.selectStatus(itemStatus);
    }

    @And("User click Save button")
    public void userClickSaveButton() { voucherDetailAdminPage.clickSave(); }

    @Then("User see success notification")
    public void userSeeSuccessNotification() { }

    @Then("User see quota before update")
    public void userSeeQuotaBeforeUpdate() { }

    @Then("User check quota after update")
    public void userCheckQuotaAfterUpdate() { }

    @Then("User see quota {string} before update")
    public void userSeeQuotaBeforeUpdate(String arg0) { }

    @Then("User check quota {string} after update")
    public void userCheckQuotaAfterUpdate(String arg0) { }


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
    public void userSeeDecreaseButton() { Assert.assertTrue(voucherDetailAdminPage.seeDecrease());}

    @Then("User see save button")
    public void userSeeSaveButton() { Assert.assertTrue(voucherDetailAdminPage.seeSave());
    }
}
