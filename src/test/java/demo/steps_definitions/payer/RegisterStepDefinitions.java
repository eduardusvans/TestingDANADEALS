package demo.steps_definitions.payer;

import demo.pages.payer.RegisterPage;
import demo.utils.ActionUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class RegisterStepDefinitions {

    LoginPage loginPage = new LoginPage();
    RegisterPage registerPage = new RegisterPage();

    @Given("User tap the Register here link on Login page")
    public void userTapTheRegisterHereLinkOnLoginPage() {
        loginPage.tapRegisterHereLink();
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

    @Then("User see the success message on Login page")
    public void userSeeTheSuccessMessageOnLoginPage() {
    }

    @Then("User is still on Register page")
    public void userIsStillOnRegisterPage() {
        ActionUtils.waitABit(3000);
        boolean status = registerPage.isOnPage();
        Assert.assertTrue(status);
    }
}
