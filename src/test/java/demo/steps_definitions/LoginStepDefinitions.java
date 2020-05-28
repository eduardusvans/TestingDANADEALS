package demo.steps_definitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefinitions {
    @Given("User is on DANA Deals Login page")
    public void userIsOnDANADealsLoginPage() {
    }

    @When("User input {string} on email input field on login page")
    public void userInputOnEmailInputFieldOnLoginPage(String arg0) {
    }

    @And("User input {string} on password input field on login page")
    public void userInputOnPasswordInputFieldOnLoginPage(String arg0) {
    }

    @Then("User is on main page")
    public void userIsOnMainPage() {
    }
}
