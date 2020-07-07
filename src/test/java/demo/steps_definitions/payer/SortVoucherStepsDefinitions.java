package demo.steps_definitions.payer;

import demo.pages.payer.home.HomePayer;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import static demo.utils.ActionUtils.waitABit;

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
        //Assert.assertEquals("99%", text);
    }

    @Then("User see all vouchers of the sort by voucher price are displayed")
    public void userSeeAllVouchersOfTheSortByVoucherPriceAreDisplayed() {
        String text = homePayer.checkVoucherPrice();
        //Assert.assertEquals("Rp1.000.000,00", text);


    }

    @Then("User see all vouchers are displayed being reseted")
    public void userSeeAllVouchersAreDisplayedBeingReseted() {
        String text = homePayer.getResetedVoucherName();
        //Assert.assertTrue(text.contains("Aaa"));
    }

    @When("User the option is not available")
    public void userTheOptionIsNotAvailable() {
        String text = homePayer.checkVoucherDiscount();
        //Assert.assertEquals("50%", text);
        String text2 = homePayer.checkVoucherPrice();
        //Assert.assertTrue(text2.contains("Rp20.000,00"));
    }
}