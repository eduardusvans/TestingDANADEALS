package demo.pages.payer.forgotPassword;
import static demo.locators.payer.forgotPassword.OtpPageLocator.*;
import static demo.utils.ActionUtils.*;

public class OtpPage {
    public boolean isOnPage() {

        return waitElement(INPUT_OTP, 20).isDisplayed();
    }

    public void inputOtp(String otp) {
        inputElement(INPUT_OTP, otp);
    }
}
