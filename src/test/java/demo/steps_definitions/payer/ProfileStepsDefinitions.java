package demo.steps_definitions.payer;

import demo.pages.payer.NavBarPayer;
import demo.pages.payer.profile.ChangePasswordPage;
import demo.pages.payer.profile.ChangeUserDataPage;
import demo.pages.payer.profile.ProfilePage;
import demo.pages.payer.profile.ViewAccountInfoPage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static demo.utils.ActionUtils.waitABit;

public class ProfileStepsDefinitions {

    ProfilePage profilePage = new ProfilePage();
    ViewAccountInfoPage viewAccountInfoPage = new ViewAccountInfoPage();
    ChangePasswordPage changePasswordPage = new ChangePasswordPage();
    ChangeUserDataPage changeUserDataPage = new ChangeUserDataPage();
    NavBarPayer navBarPayer = new NavBarPayer();

    @When("User tap profile icon")
    public void userTapProfileIcon() {
        waitABit(5000);
        navBarPayer.tapProfileIcon();
    }

    @Then("User is on Profile screen")
    public void userIsOnProfileScreen() {
        waitABit(3000);
        profilePage.isOnPageProfile();
    }

    @When("User tap Account Info menu")
    public void userTapAccountInfoMenu() {
        profilePage.tapAccountInfoMenu();
    }

    @Then("User is on Account Info screen")
    public void userIsOnAccountInfoScreen() {
        viewAccountInfoPage.isOnPageAccountInfo();
    }

    @When("User tap Change User Data menu")
    public void userTapChangeUserDataMenu() {
        profilePage.tapChangeUserDataMenu();
    }

    @Then("User is on Change User Data screen")
    public void userIsOnChangeUserDataScreen() {
        changeUserDataPage.isOnPageChangeUserDataPage();
    }

    @When("User tap Edit Password radio button on Change User Data screen")
    public void userTapEditPasswordRadioButtonOnChangeUserDataScreen() {
        changeUserDataPage.tapEditPasswordRB();
    }

    @Then("User is on Change Password screen")
    public void userIsOnChangePasswordScreen() {
        changePasswordPage.isOnPageChangePassword();
    }

    @When("User tap Back button on Account Info screen")
    public void userTapBackButtonOnAccountInfoScreen() {
        viewAccountInfoPage.tapBackBtn();
    }

    @When("User tap Back button on Change User Data screen")
    public void userTapBackButtonOnChangeUserDataScreen() {
        changeUserDataPage.tapBackBtn();
    }

    @When("User tap Back button on Change Password screen")
    public void userTapBackButtonOnChangePasswordScreen() {
        changePasswordPage.tapBackBtn();
    }

    @When("User tap Edit Full Name radio button on Change User Data screen")
    public void userTapEditFullNameRadioButtonOnChangeUserDataScreen() {
        changeUserDataPage.tapFullNameRB();
    }

    @When("User input {string} {string} on Full Name input text field on Change User Data screen")
    public void userInputOnFullNameInputTextFieldOnChangeUserDataScreen(String firstName, String lastName) {
        changeUserDataPage.inputFullName(firstName,lastName);
    }

    @When("User tap Update button on Change User Data screen")
    public void userTapUpdateButtonOnChangeUserDataScreen() {
        changeUserDataPage.tapBtnUpdate();
    }

    @Then("User tap Done button on Account Info screen")
    public void userTapDoneButtonOnAccountInfoScreen() {
        viewAccountInfoPage.tapDoneBtn();
    }

    @When("User tap Edit Mail Address radio button on Change User Data screen")
    public void userTapEditMailAddressRadioButtonOnChangeUserDataScreen() {
        changeUserDataPage.tapMailAddressRB();
    }

    @When("User input {string} on E-mail input text field on Change User Data screen")
    public void userInputOnEMailInputTextFieldOnChangeUserDataScreen(String editMail) {
        changeUserDataPage.inputMail(editMail);
    }

    @When("User input {string} on old password input text field on Change Password screen")
    public void userInputOnOldPasswordInputTextFieldOnChangePasswordScreen(String oldPassword) {
        changePasswordPage.inputOldPassword(oldPassword);
    }

    @When("User input {string} on new password input text field on Change Password screen")
    public void userInputOnNewPasswordInputTextFieldOnChangePasswordScreen(String newPassword) {
        changePasswordPage.inputNewPassword(newPassword);
    }

    @When("User input {string} on confirm new password input text field on Change Password screen")
    public void userInputOnConfirmNewPasswordInputTextFieldOnChangePasswordScreen(String confirmNewPassword) {
        changePasswordPage.inputConfirmNewPassword(confirmNewPassword);
    }

    @When("User tap LogOut button")
    public void userTapLogOutButton() {
        waitABit(2000);
        profilePage.tapLogoutButton();
    }

    @Then("User see warning text below oldPassword")
    public void userSeeWarningTextBelowOldPassword() {
        changePasswordPage.seeWarningText();
    }

    @Then("User see warning text below newPassword")
    public void userSeeWarningTextBelowNewPassword() {
        changePasswordPage.seeWarningText();
    }

    @Then("User see warning below oldPassword")
    public void userSeeWarningBelowOldPassword() {
        changePasswordPage.seeWarningText();
    }

    @Then("User see warning text below confirmNewPassword")
    public void userSeeWarningTextBelowConfirmNewPassword() {
        changePasswordPage.seeWarningText();
    }


    @When("User tap Change Password button on Change Password screen")
    public void userTapChangePasswordButtonOnChangePasswordScreen() {
        changePasswordPage.tapChangePasswordBtn();
    }
}
