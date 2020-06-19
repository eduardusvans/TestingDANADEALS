package demo.pages.payer;

import demo.utils.RandomUtils;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.payer.RegisterPageLocator.*;
import static demo.utils.ActionUtils.nullChanger;
import static demo.utils.ActionUtils.waitElement;

public class RegisterPage {
    public boolean isOnPage() {
        try {
            return waitElement(INPUT_PHONE_NUMBER, 15).isDisplayed();
        } catch (Exception e) {
            return waitElement(INPUT_CONFIRM_PASSWORD, 15).isDisplayed();
        }
    }

    public void inputPhoneNumber(String phoneNumber) {
        // Null changer
        phoneNumber = nullChanger(phoneNumber);

        // Optional random phone number
        phoneNumber = phoneNumberSetter(phoneNumber);

        // Input text into element and scroll page
        inputAndScroll(INPUT_PHONE_NUMBER, phoneNumber);
    }

    public void inputFullName(String firstName, String lastName) {
        // Null changer
        firstName = nullChanger(firstName);
        lastName = nullChanger(lastName);

        // Set the full name
        String fullName = fullNameSetter(firstName, lastName);

        // Input text into element and scroll page
        inputAndScroll(INPUT_FULL_NAME, fullName);
    }

    public void inputEmail(String email) {
        // Null changer
        email = nullChanger(email);

        // Optional random email
        email = emailSetter(email);

        // Input text into element and scroll page
        inputAndScroll(INPUT_EMAIL, email);
    }

    public void inputPassword(String password) {
        // Null changer
        password = nullChanger(password);

        // Input text into element and scroll page
        inputAndScroll(INPUT_PASSWORD, password);
    }

    public void inputConfirmPassword(String confirmPassword) {
        // Null changer
        confirmPassword = nullChanger(confirmPassword);

        // Input text into element and scroll page
        inputAndScroll(INPUT_CONFIRM_PASSWORD, confirmPassword);
    }

    public void tapCreateAccountButton() {
        // Tap element and scroll page
        tapAndScroll(BUTTON_CREATE_ACCOUNT);
    }

    public static void scrollDown() {
        AndroidElement screen = androidDriver
                .findElement(By.xpath("//android.widget.ScrollView/android.view.ViewGroup"));
        Point center =  screen.getCenter();
        int startX = 20;
        int startY = center.getY() + 400;
        int endX = 20;
        int endY = center.getY() - 400;
        @SuppressWarnings("rawtypes")
        TouchAction scroll = new TouchAction(androidDriver);
        scroll.press(PointOption.point(startX, startY))
                .moveTo(PointOption.point(endX, endY)).perform();
    }

    public static void inputAndScroll(By targetElement, String input) {
        boolean isFound = false;
        int counter = 0;

        do {
            try {
                AndroidElement element = androidDriver.findElement(targetElement);
                element.sendKeys(input);
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
                AndroidElement element = androidDriver.findElement(targetElement);
                element.click();
                isFound = true;
            } catch (Exception e) {
                scrollDown();
                counter++;
            }

        } while (!isFound && counter < 5);
    }

    public static String phoneNumberSetter(String phoneNumber) {
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
        if (email.toLowerCase().contains("random")) {
            if (email.toLowerCase().contains("min")) {
                return RandomUtils.generateRandomEmail(6);
            } else if(email.toLowerCase().contains("max")) {
                return RandomUtils.generateRandomEmail(74);
            } else {
                return RandomUtils.generateRandomEmail(0);
            }
        } else {
            return email;
        }
    }

    public static String fullNameSetter(String firstName, String lastName) {
        if (firstName.equals("")) {
            if (lastName.equals("")) {
                return "";
            } else {
                return lastName;
            }
        } else {
            return firstName.concat(" " + lastName);
        }
    }

}
