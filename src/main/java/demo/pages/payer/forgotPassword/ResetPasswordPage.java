package demo.pages.payer.forgotPassword;
import static demo.locators.payer.forgotPassword.ForgotPasswordPageLocator.BUTTON_SEND_OTP;
import static demo.locators.payer.forgotPassword.ResetPasswordPageLocator.*;
import static demo.utils.ActionUtils.*;

public class ResetPasswordPage {
    public boolean isOnPage() {
        return waitElement(INPUT_NEW_PASSWORD, 15).isDisplayed();
    }

    public void inputNewPassword(String newPassword) {
        inputElement(INPUT_NEW_PASSWORD, newPassword);
    }

    public void inputConfirmNewPassword(String confirmNewPassword) {
        inputElement(INPUT_CONFIRM_NEW_PASSWORD, confirmNewPassword);
    }

    public void tapChangeButton() {
        tapElement(BUTTON_CHANGE);
    }

    public boolean changeButtonStatus() {
        return getElement(BUTTON_CHANGE).isEnabled();
    }

}
