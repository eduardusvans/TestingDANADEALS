package demo.steps_definitions.payer;

import demo.pages.payer.NavBarPayer;
import demo.pages.payer.history.HistoryDetailPage;
import demo.pages.payer.history.HistoryPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HistoryStepsDefinition {

    HistoryPage historyPage = new HistoryPage();
    HistoryDetailPage historyDetailPage = new HistoryDetailPage();
    NavBarPayer navBarPayer = new NavBarPayer();

    @When("User tap history icon")
    public void userTapHistoryIcon() {
        navBarPayer.tapHistoryIcon();
    }

    @Then("User is on History screen")
    public void userIsOnHistoryScreen() {
        historyPage.isOnPageHistory();
    }

    @And("User tap in progress tab")
    public void userTapInProgressTab() {
        historyPage.tapInProgress();
    }

    @Then("User is on In Progress tab screen")
    public void userIsOnInProgressTabScreen() {
        historyPage.isOnInProgress();
    }

    @And("User tap completed tab")
    public void userTapCompletedTab() {
        historyPage.tapCompleted();
    }

    @Then("User is on Completed tab screen")
    public void userIsOnCompletedTabScreen() {
        historyPage.isOnCompleted();
    }

    @Then("User tap a voucher which user bought")
    public void userTapAVoucherWhichUserBought() {
        historyPage.tapVoucher();
    }

    @When("User tap Filter on Completed tab screen")
    public void userTapFilterOnCompletedTabScreen() {
        historyPage.tapFilter();
    }

    @When("User is on date picker on Completed tab screen")
    public void userIsOnDatePickerOnCompletedTabScreen() {
        historyPage.isOnDatePicker();
    }

    @When("User tap today date as start date on date picker")
    public void userTapTodayDateAsStartDateOnDatePicker() {
        historyPage.startDate();
    }

    @When("User tap today date as end date on date picker")
    public void userTapTodayDateAsEndDateOnDatePicker() {
        historyPage.endDate();
    }

    @When("User tap save button on date picker")
    public void userTapSaveButtonOnDatePicker() {
        historyPage.tapSaveBtn();
    }

    @Then("User see transaction based on filter date")
    public void userSeeTransactionBasedOnFilterDate() {
        historyPage.isOnCompletedTransaction();
    }

    @When("User tap one day before on date picker")
    public void userTapOneDayBeforeOnDatePicker() {
        historyPage.endOneDate();
    }

    @When("User tap five day before on date picker")
    public void userTapFiveDayBeforeOnDatePicker() {
        historyPage.endFiveDate();
    }

    @When("User tap seven day before on date picker")
    public void userTapSevenDayBeforeOnDatePicker() {
        historyPage.endSevenDate();
    }

    @Then("User see transaction on In Progress tab")
    public void userSeeTransactionOnInProgressTab() {
        historyPage.isOnInProgressTransaction();
    }

    @Then("User tap a top up which user bought")
    public void userTapATopUpWhichUserBought() {
        historyPage.tapVoucher();
    }

    @Then("User is on history detail")
    public void userIsOnHistoryDetail() {
        historyDetailPage.isOnPageHistoryDetail();
    }

    @Then("User tap Back button on history detail")
    public void userTapBackButtonOnHistoryDetail() {
        historyDetailPage.tapBackBtn();
    }

    @And("User tap a voucher with transaction status success")
    public void userTapAVoucherWithTransactionStatusSuccess() {
        historyPage.statusSuccess();
    }

    @And("User tap a voucher with transaction status refund")
    public void userTapAVoucherWithTransactionStatusRefund() {
        historyPage.statusRefund();
    }

    @And("User tap a voucher with transaction status failed")
    public void userTapAVoucherWithTransactionStatusFailed() {
        historyPage.statusFailed();
    }
}
