package demo.steps_definitions.payer;

import demo.pages.admin.HomeAdminPage;
import demo.pages.admin.VoucherDetailAdminPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

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


}
