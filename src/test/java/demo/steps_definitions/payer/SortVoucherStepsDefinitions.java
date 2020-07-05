package demo.steps_definitions.payer;

import demo.pages.payer.home.HomePayer;
import demo.pages.payer.home.VoucherCashierPage;
import demo.pages.payer.home.VoucherDetailPayerPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class SortVoucherStepsDefinitions {

    HomePayer homePayer = new HomePayer();

    @When("User click sort dropdown menu button on DANA Deals homepage")
    public void userClickSortDropdownMenuButtonOnDANADealsHomepage() {
        homePayer.clickSortButton();
    }

    @When("User choose {string} to sort the voucher")
    public void userChooseToSortTheVoucher(String Keyword) {
        homePayer.chooseSort(Keyword);
    }
    

    @Then("User see all vouchers of the sort by discount are displayed")
    public void userSeeAllVouchersOfTheSortByDiscountAreDisplayed() {
        String text = homePayer.checkVoucherDiscount();
        Assert.assertEquals("101%", text);
    }

    @Then("User see all vouchers of the sort by voucher price are displayed")
    public void userSeeAllVouchersOfTheSortByVoucherPriceAreDisplayed() {
        String text = homePayer.checkVoucherPrice();
        Assert.assertTrue(text.contains("Rp1.000.000,00"));


    }

    @Then("User see all vouchers are displayed being reseted")
    public void userSeeAllVouchersAreDisplayedBeingReseted() {
        String text = homePayer.getResetedVoucherName();
        Assert.assertTrue(text.contains("Aaa"));
    }
}