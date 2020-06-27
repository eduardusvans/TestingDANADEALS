package demo.pages.payer.forgotPassword;
import static demo.locators.payer.forgotPassword.ForgotPasswordPageLocator.*;
import static demo.utils.ActionUtils.*;

public class ForgotPasswordPage {
    public boolean isOnPage() {
        return waitElement(BUTTON_SEND_OTP, 15).isDisplayed();
    }

    public void inputPhoneNumber(String phoneNumber) {
        inputElement(INPUT_PHONE_NUMBER, phoneNumber);
    }

    public void tapSendOtpButton() {
        tapElement(BUTTON_SEND_OTP);
    }

    public boolean sendOtpButtonStatus() {
        return getElement(BUTTON_SEND_OTP).isEnabled();
    }

}
