package demo.pages.payer;

import demo.driver.AndroidDriverInstance;
import demo.utils.RandomUtils;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.payer.RegisterPageLocator.*;

public class RegisterPage {
    public boolean isOnPage() {
        try {
            return waitElement(INPUT_PHONE_NUMBER).isDisplayed();
        } catch (Exception e) {
            return waitElement(INPUT_CONFIRM_PASSWORD).isDisplayed();
        }
    }

    public void inputPhoneNumber(String phoneNumber) {
        // Optional random generator
        phoneNumber = phoneNumberChecker(phoneNumber);

        // Input text into element and scroll page
        inputAndScroll(INPUT_PHONE_NUMBER, phoneNumber);
    }

    public void inputFullName(String firstName, String lastName) {
        // Full Name null checker
        String fullName = fullNameNullChecker(firstName, lastName);

        // Input text into element and scroll page
        inputAndScroll(INPUT_FULL_NAME, fullName);
    }

    public void inputEmail(String email) {
        // Optional random generator
        email = emailChecker(email);

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

    public void waitABit(int millis){
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e)
        {
            e.printStackTrace();
        }
    }

    public static WebElement waitElement(By targetElement) {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        return wait.until(ExpectedConditions.presenceOfElementLocated(targetElement));
    }

    public static void scrollDown() {
        AndroidElement screen = AndroidDriverInstance
                .androidDriver
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

    public static String phoneNumberChecker(String phoneNumber) {
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

    public static String emailChecker(String email) {
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

    public static String fullNameNullChecker(String firstName, String lastName) {
        if (firstName == null) {
            if (lastName == null) {
                return "";
            } else {
                return lastName;
            }
        } else {
            return firstName.concat(" " + lastName);
        }
    }

}
