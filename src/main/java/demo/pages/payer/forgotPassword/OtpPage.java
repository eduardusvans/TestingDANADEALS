package demo.pages.payer.forgotPassword;
import static demo.locators.payer.forgotPassword.ForgotPasswordPageLocator.BUTTON_SEND_OTP;
import static demo.locators.payer.forgotPassword.OtpPageLocator.*;
import static demo.utils.ActionUtils.*;

public class OtpPage {
    public boolean isOnPage() {
        int count = 0;
        do {
            try{
                return waitElement(INPUT_OTP, 15).isDisplayed();
            } catch (Exception e) {
                if(getElement(BUTTON_SEND_OTP).isDisplayed()) {
                    tapElement(BUTTON_SEND_OTP);
                }
            }
            count++;
        } while (count < 3);
        return false;
    }

    public void inputOtp(String otp) {
        inputElement(INPUT_OTP, otp);
    }
}
