package demo.steps_definitions.payer;

import demo.pages.payer.home.HomePayer;
import demo.pages.payer.home.VoucherCashierPage;
import demo.pages.payer.home.VoucherDetailPayerPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FilterVoucherStepsDefinitions {

    HomePayer homePayer = new HomePayer();

    @When("User click filter dropdown menu button on DANA Deals homepage")
    public void userClickFilterDropdownMenuButtonOnDANADealsHomepage() {
        homePayer.clickFilterButton();
    }

    @When("User choose {string} to filter the voucher")
    public void userChooseToFilterTheVoucher(String Keyword) {
        homePayer.chooseFilter(Keyword);
    }

}
