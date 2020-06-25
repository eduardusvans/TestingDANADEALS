package demo.steps_definitions.payer;

import demo.pages.LandingPage;
import demo.pages.LoginPage;
import demo.pages.payer.RegisterPage;
import demo.utils.ActionUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class RegisterStepDefinitions {

    LandingPage landingPage = new LandingPage();
    RegisterPage registerPage = new RegisterPage();

    @Given("User is on Landing page")
    public void userIsOnLandingPage() {
        boolean status = landingPage.isOnPage();
        Assert.assertTrue(status);
    }

    @Given("User tap the Create Account button on Landing page")
    public void userTapTheCreateAccountButtonOnLandingPage() {
        landingPage.tapCreateAccountButton();
    }

    @Given("User is on Register page")
    public void userIsOnRegisterPage() {
        boolean status = registerPage.isOnPage();
        Assert.assertTrue(status);
    }

    @When("User input {string} on Phone Number input text field on Register page")
    public void userInputOnPhoneNumberInputTextFieldOnRegisterPage(String phoneNumber) {
        registerPage.inputPhoneNumber(phoneNumber);
    }

    @When("User input {string} {string} on Full Name input text field on Register page")
    public void userInputOnFullNameInputTextFieldOnRegisterPage(String firstName, String lastName) {
        registerPage.inputFullName(firstName, lastName);
    }

    @When("User input {string} on E-Mail input text field on Register page")
    public void userInputOnEMailInputTextFieldOnRegisterPage(String email) {
        registerPage.inputEmail(email);
    }

    @When("User input {string} on Password input text field on Register page")
    public void userInputOnPasswordInputTextFieldOnRegisterPage(String password) {
        registerPage.inputPassword(password);
    }

    @When("User input {string} on Confirm Password input text field on Register page")
    public void userInputOnConfirmPasswordInputTextFieldOnRegisterPage(String confirmPassword) {
        registerPage.inputConfirmPassword(confirmPassword);
    }

    @When("User tap the Create Account button on Register page")
    public void userTapTheCreateAccountButtonOnRegisterPage() {
        registerPage.tapCreateAccountButton();
    }

    @When("User cannot tap the Create Account button on Register page")
    public void userCannotTapTheCreateAccountButtonOnRegisterPage() {
        registerPage.tapCreateAccountButton();
        boolean status = registerPage.createAccountButtonStatus();
        Assert.assertFalse(status);
    }

    @Then("User see the success message on Login page")
    public void userSeeTheSuccessMessageOnLoginPage() {
        ActionUtils.waitABit(5000);
    }

    @Then("User is still on Register page")
    public void userIsStillOnRegisterPage() {
        ActionUtils.waitABit(3000);
        boolean status = registerPage.isOnPage();
        Assert.assertTrue(status);
    }
}
