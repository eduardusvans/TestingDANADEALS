package demo.pages.payer;

import demo.utils.RandomUtils;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;

import java.time.Duration;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.payer.RegisterPageLocator.*;
import static demo.utils.ActionUtils.*;

public class RegisterPage {
    public boolean isOnPage() {
        try {
            return waitElement(INPUT_PHONE_NUMBER, 15).isDisplayed();
        } catch (Exception e) {
            return waitElement(INPUT_CONFIRM_PASSWORD, 15).isDisplayed();
        }
    }

    public void inputPhoneNumber(String phoneNumber) {
        // Optional random phone number
        phoneNumber = phoneNumberSetter(phoneNumber);

        // Input text into element and scroll page
        inputAndScroll(INPUT_PHONE_NUMBER, phoneNumber);
    }

    public void inputFullName(String firstName, String lastName) {
        // Set the full name
        String fullName = fullNameSetter(firstName, lastName);
        // Input text into element and scroll page
        inputAndScroll(INPUT_FULL_NAME, fullName);
    }

    public void inputEmail(String email) {
        // Optional random email
        email = emailSetter(email);

        // Input text into element and scroll page
        inputAndScroll(INPUT_EMAIL, email);
    }

    public void inputPassword(String password) {
        // Input text into element and scroll page
        inputAndScroll(INPUT_PASSWORD, password);
    }

    public void inputConfirmPassword(String confirmPassword) {
        // Input text into element and scroll page
        inputAndScroll(INPUT_CONFIRM_PASSWORD, confirmPassword);
    }

    public void tapCreateAccountButton() {
        // Tap element and scroll page
        tapAndScroll(BUTTON_CREATE_ACCOUNT);
    }

    public boolean createAccountButtonStatus() {
        return getElement(BUTTON_CREATE_ACCOUNT).isEnabled();
    }

    public static void scrollDown() {
        AndroidElement screen = androidDriver
                .findElement(By.id("action_bar_root"));
        Point center =  screen.getCenter();
        int width = screen.getSize().width;
        int height = screen.getSize().height;
        int startX = center.getX() - (width / 2) + 20;
        int startY = center.getY() + (height / 3);
        int endX = center.getX() - (width / 2) + 20;
        int endY = center.getY() - (height / 2);
        @SuppressWarnings("rawtypes")
        TouchAction scroll = new TouchAction(androidDriver);
        scroll.press(PointOption.point(startX, startY))
                .waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                .moveTo(PointOption.point(endX, endY)).release().perform();
    }

    public static void inputAndScroll(By targetElement, String input) {
        boolean isFound = false;
        int counter = 0;

        do {
            try {
                inputElement(targetElement, input);
                isFound = true;
            } catch (Exception e) {
                scrollDown();
                counter++;
            }

        } while (!isFound && counter < 5);
    }

    public static void tapAndScroll(By targetElement) {
        boolean isFound = false;
        int counter = 0;

        do {
            try {
                tapElement(targetElement);
                isFound = true;
            } catch (Exception e) {
                scrollDown();
                counter++;
            }

        } while (!isFound && counter < 5);
    }

    public static String phoneNumberSetter(String phoneNumber) {
        // Null changer
        phoneNumber = nullChanger(phoneNumber);

        // Generate random phone number if needed
        if (phoneNumber.toLowerCase().contains("random")) {
            if (phoneNumber.toLowerCase().contains("min")) {
                return RandomUtils.generateRandomPhoneNumber(9);
            } else if(phoneNumber.toLowerCase().contains("max")) {
                return RandomUtils.generateRandomPhoneNumber(12);
            } else {
                return RandomUtils.generateRandomPhoneNumber(0);
            }
        } else {
            return phoneNumber;
        }
    }

    public static String emailSetter(String email) {
        // Null changer
        email = nullChanger(email);

        // Generate random email if needed
        if (email.toLowerCase().contains("random")) {
            if (email.toLowerCase().contains("alphabetic")) {
                return RandomUtils.generateRandomEmailAlphabetic();
            } else if (email.toLowerCase().contains("numeric")) {
                return RandomUtils.generateRandomEmailNumeric();
            } else if (email.toLowerCase().contains("min")) {
                return RandomUtils.generateRandomEmail(6);
            } else if (email.toLowerCase().contains("max")) {
                return RandomUtils.generateRandomEmail(74);
            } else {
                return RandomUtils.generateRandomEmail(0);
            }
        } else {
            return email;
        }
    }

    public static String fullNameSetter(String firstName, String lastName) {
        // Null changer
        firstName = nullChanger(firstName);
        lastName = nullChanger(lastName);

        // Set full name
        if (firstName.equals("")) {
            if (lastName.equals("")) {
                return "";
            } else {
                return lastName;
            }
        } else if (lastName.equals("")) {
            return firstName;
        } else {
            return firstName.concat(" " + lastName);
        }
    }

}
