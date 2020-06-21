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

    @Given("User click Voucher status {string}")
    public void userClickVoucherStatus(String statusVoucher) { homeAdminPage.clickVoucher(statusVoucher); }


    @Given("User click Voucher {string} status {string} and quota {string}")
    public void userClickVoucherStatusAndQuota(String name,String statusVoucher, String quota) { homeAdminPage.clickVoucher3Param(name,statusVoucher,quota); }

    @Then("User is on DANA Deals Voucher Detail page")
    public void userIsOnDANADealsVoucherDetailPage() { voucherDetailAdminPage.isOnPage(); }

    @When("User click status")
    public void userClickStatus() {
       voucherDetailAdminPage.selectStatus();
    }

    @And("User click Save button")
    public void userClickSaveButton() { voucherDetailAdminPage.clickSave(); }

    @Then("User see success notification")
    public void userSeeSuccessNotification() { }

    @Then("User see quota {string} before update")
    public void userSeeQuotaBeforeUpdate(String quota) {
        String actual = voucherDetailAdminPage.getQuota();
        Assert.assertEquals(quota,actual);
    }

    @Then("User check quota {string} after update")
    public void userCheckQuotaAfterUpdate(String quota) {
        String actual = voucherDetailAdminPage.getQuota();
        Assert.assertEquals(quota,actual);
    }

    @Then("User check Voucher {string} status {string} and quota {string} on Home Admin Page")
    public void userCheckVoucherStatusAndQuotaOnHomeAdminPage(String name, String statusVoucher, String quota) {
        String actual = homeAdminPage.getVoucherUpdate();
        Assert.assertEquals(name,statusVoucher,quota,actual);
    }

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
    public void userSeeSaveButton() { Assert.assertTrue(voucherDetailAdminPage.seeSave()); }

    @When("User click Increase button")
    public void userClickIncreaseButton() { voucherDetailAdminPage.clickIncrease();}

    @When("User click Decrease button")
    public void userClickDecreaseButton() { voucherDetailAdminPage.clickDecrease();}

}
