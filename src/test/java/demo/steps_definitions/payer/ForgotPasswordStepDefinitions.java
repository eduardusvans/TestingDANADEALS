package demo.steps_definitions.payer;

import demo.pages.LandingPage;
import demo.pages.LoginPage;
import demo.pages.payer.forgotPassword.ForgotPasswordPage;
import demo.pages.payer.forgotPassword.OtpPage;
import demo.pages.payer.forgotPassword.ResetPasswordPage;
import demo.utils.ActionUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class ForgotPasswordStepDefinitions {

    LandingPage landingPage = new LandingPage();
    LoginPage loginPage = new LoginPage();
    ForgotPasswordPage forgotPasswordPage = new ForgotPasswordPage();
    OtpPage otpPage = new OtpPage();
    ResetPasswordPage resetPasswordPage = new ResetPasswordPage();

    @Given("User tap the Login to Account button on Landing page")
    public void userTapTheLoginToAccountButtonOnLandingPage() {
        landingPage.tapLoginToAccountButton();
    }

    @Given("User tap the Forgot Password link on Login page")
    public void userTapTheForgotPasswordLinkOnLoginPage() {
        loginPage.clickForgot();
    }

    @Given("User is on Forgot Password page")
    public void userIsOnForgotPasswordPage() {
        boolean status = forgotPasswordPage.isOnPage();
        Assert.assertTrue(status);
    }

    @When("User input {string} on Phone Number input text field on Forgot Password page")
    public void userInputOnPhoneNumberInputTextFieldOnForgotPasswordPage(String phoneNumber) {
        forgotPasswordPage.inputPhoneNumber(phoneNumber);
    }

    @When("User tap the Send OTP button on Forgot Password page")
    public void userTapTheSendOTPButtonOnForgotPasswordPage() {
        forgotPasswordPage.tapSendOtpButton();
    }

    @When("User is on OTP page")
    public void userIsOnOTPPage() {
        boolean status = otpPage.isOnPage();
        Assert.assertTrue(status);
    }

    @When("User input {string} on OTP input text field on OTP page")
    public void userInputOnOTPInputTextFieldOnOTPPage(String otp) {
        otpPage.inputOtp(otp);
    }

    @When("User is on Reset Password page")
    public void userIsOnResetPasswordPage() {
        boolean status = resetPasswordPage.isOnPage();
        Assert.assertTrue(status);
    }

    @When("User input {string} on New Password input text field on Reset Password page")
    public void userInputOnNewPasswordInputTextFieldOnResetPasswordPage(String newPassword) {
        resetPasswordPage.inputNewPassword(newPassword);
    }

    @When("User input {string} on Confirm New Password input text field on Reset Password page")
    public void userInputOnConfirmNewPasswordInputTextFieldOnResetPasswordPage(String confirmNewPassword) {
        resetPasswordPage.inputConfirmNewPassword(confirmNewPassword);
    }

    @When("User tap the Change button on Reset Password page")
    public void userTapTheChangeButtonOnResetPasswordPage() {
        resetPasswordPage.tapChangeButton();
    }

    @When("User is still on Forgot Password page")
    public void userIsStillOnForgotPasswordPage() {
        ActionUtils.waitABit(3000);
        boolean status = forgotPasswordPage.isOnPage();
        Assert.assertTrue(status);
    }

    @Then("User is still on OTP page")
    public void userIsStillOnOTPPage() {
        ActionUtils.waitABit(3000);
        boolean status = otpPage.isOnPage();
        Assert.assertTrue(status);
    }

    @Then("User is still on Reset Password page")
    public void userIsStillOnResetPasswordPage() {
        ActionUtils.waitABit(3000);
        boolean status = resetPasswordPage.isOnPage();
        Assert.assertTrue(status);
    }
}
