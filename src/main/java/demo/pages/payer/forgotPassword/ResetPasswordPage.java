package demo.pages.payer.forgotPassword;
import static demo.locators.payer.forgotPassword.ResetPasswordPageLocator.*;
import static demo.utils.ActionUtils.*;

public class ResetPasswordPage {
    public boolean isOnPage() {
        return waitElement(INPUT_NEW_PASSWORD, 15).isDisplayed();
    }

    public void inputNewPassword(String newPassword) {
        // Null changer
        newPassword = nullChanger(newPassword);

        inputElement(INPUT_NEW_PASSWORD, newPassword);
    }

    public void inputConfirmNewPassword(String confirmNewPassword) {
        // Null changer
        confirmNewPassword = nullChanger(confirmNewPassword);

        inputElement(INPUT_CONFIRM_NEW_PASSWORD, confirmNewPassword);
    }

    public void tapChangeButton() {
        tapElement(BUTTON_CHANGE);
    }

}
