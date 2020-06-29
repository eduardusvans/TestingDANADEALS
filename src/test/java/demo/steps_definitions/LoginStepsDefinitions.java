package demo.steps_definitions;

import demo.pages.LandingPage;
import demo.pages.LoginPage;
import demo.pages.admin.HomeAdminPage;
import demo.pages.payer.RegisterPage;
import demo.pages.payer.forgotPassword.ForgotPasswordPage;
import demo.pages.payer.home.HomePayer;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import static demo.utils.ActionUtils.waitABit;

public class LoginStepsDefinitions {

    LandingPage landingPage = new LandingPage();
    LoginPage loginPage = new LoginPage();
    HomePayer homePayer = new HomePayer();
    HomeAdminPage homeAdminPage = new HomeAdminPage();
    ForgotPasswordPage forgotPasswordPage = new ForgotPasswordPage();
    RegisterPage registerPage = new RegisterPage();

    private static String id;
    private static String token;
    public static String getId() { return id; }
    public static String getToken() { return token; }


    @Given("User is on Landing page")
    public void userIsOnLandingPage() { landingPage.isOnPage(); }

    @When("User click Login to Account button")
    public void userClickLoginToAccountButton() { landingPage.tapLoginToAccountButton(); }

    @Then("User is on DANA Deals Login page")
    public void userIsOnDANADealsLoginPage() {
        loginPage.isOnPage();
        waitABit(10);
    }

    @When("User input {string} on phone number input field on login page")
    public void userInputOnPhoneNumberInputFieldOnLoginPage(String phoneNumber) { loginPage.inputPhoneNumber(phoneNumber); }

    @And("User input {string} on password input field on login page")
    public void userInputOnPasswordInputFieldOnLoginPage(String password) { loginPage.inputPassword(password); }

    @And("User click Login button")
    public void userClickLoginButton() { loginPage.clickLogin(); }

    @Then("User is on Home page")
    public void userIsOnHomePage() {
        Assert.assertTrue(homePayer.isOnPage());
    }

    @Then("User is on Home Admin page")
    public void userIsOnHomeAdminPage() { Assert.assertTrue(homeAdminPage.isOnPage()); }

    @Then("User see DANA DEALS textview")
    public void userSeeDANADEALSTextview() { Assert.assertTrue(loginPage.isOnPage()); }

    @Then("User see not register yet? textview")
    public void userSeeNotRegisterYetTextview() { Assert.assertTrue(loginPage.seeNotRegister()); }

    @Then("User see phone number input textfield")
    public void userSeePhoneNumberInputTextfield() { Assert.assertTrue(loginPage.seePhoneNumberET()); }

    @Then("User see password input textfield")
    public void userSeePasswordInputTextfield() { Assert.assertTrue(loginPage.seePasswordET()); }

    @Then("User see forgot password link")
    public void userSeeForgotPasswordLink() { Assert.assertTrue(loginPage.seeForgotLink()); }

    @Then("User see register here link")
    public void userSeeRegisterHereLink() { Assert.assertTrue(loginPage.seeRegisterLink()); }

    @Then("User see Login button")
    public void userSeeLoginButton() { Assert.assertTrue(loginPage.seeLoginButton()); }

    @When("User click Forgot Password link")
    public void userClickForgotPasswordLink() { loginPage.clickForgot();  }

    @Then("User is on Forgot Password Page")
    public void userIsOnForgotPasswordPage() { Assert.assertTrue( forgotPasswordPage.isOnPage()); }

    @When("User click Register Here link")
    public void userClickRegisterHereLink() { loginPage.clickRegister(); }

    @Then("User is on Register Page")
    public void userIsOnRegisterPage() { Assert.assertTrue( registerPage.isOnPage()); }

    @Then("User see warning text")
    public void userSeeWarningText() { Assert.assertTrue( loginPage.seeWarningText()); }

    @Then("User see pop up notification")
    public void userSeePopUpNotification() { Assert.assertTrue( loginPage.seePopUpNotification()); }

    @Then("User see message")
    public void UserSeeMessage() { loginPage.seeMessage(); }

    @When("User tap LogOut button on Home Admin page")
    public void userTapLogOutButtonOnHomeAdminPage() { homeAdminPage.tapLogoutButton(); }
}
