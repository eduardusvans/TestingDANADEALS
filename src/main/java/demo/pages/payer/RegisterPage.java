package demo.pages.payer;

import demo.driver.AndroidDriverInstance;
import demo.utils.RandomUtils;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static demo.driver.AndroidDriverInstance.androidDriver;
import static demo.locators.LoginPageLocator.LINK_REGISTER_HERE;
import static demo.locators.payer.RegisterPageLocator.*;

public class RegisterPage {
    public boolean isOnPage() {
        WebDriverWait wait = new WebDriverWait(androidDriver, 15);
        WebElement phoneNumberInput = wait
                .until(ExpectedConditions.presenceOfElementLocated(INPUT_PHONE_NUMBER));
        return phoneNumberInput.isDisplayed();
    }

    public void inputPhoneNumber(String phoneNumber) {
        // Optional random generator
        if (phoneNumber.toLowerCase().contains("random")) {
            if (phoneNumber.toLowerCase().contains("min")) {
                phoneNumber = RandomUtils.generateRandomPhoneNumber(9);
            } else if(phoneNumber.toLowerCase().contains("max")) {
                phoneNumber = RandomUtils.generateRandomPhoneNumber(12);
            } else {
                phoneNumber = RandomUtils.generateRandomPhoneNumber(0);
            }
        }

        AndroidElement inputField = androidDriver.findElement(INPUT_PHONE_NUMBER);
        inputField.sendKeys(phoneNumber);
    }

    public void inputFullName(String firstName, String lastName) {
        // Null checker
        String fullName;
        if (firstName == null) {
            if (lastName == null) {
                fullName = "";
            } else {
                fullName = lastName;
            }
        } else {
            fullName = firstName.concat(" " + lastName);
        }

        AndroidElement inputField = androidDriver.findElement(INPUT_FULL_NAME);
        inputField.sendKeys(fullName);
    }

    public void inputEmail(String email) {
        // Optional random generator
        if (email.toLowerCase().contains("random")) {
            if (email.toLowerCase().contains("min")) {
                email = RandomUtils.generateRandomEmail(6);
            } else if(email.toLowerCase().contains("max")) {
                email = RandomUtils.generateRandomEmail(74);
            } else {
                email = RandomUtils.generateRandomEmail(0);
            }
        }

        AndroidElement inputField = androidDriver.findElement(INPUT_EMAIL);
        inputField.sendKeys(email);
    }

    public void inputPassword(String password) {
        AndroidElement inputField = androidDriver.findElement(INPUT_PASSWORD);
        inputField.sendKeys(password);
    }

    public void inputConfirmPassword(String confirmPassword) {
        AndroidElement inputField = androidDriver.findElement(INPUT_CONFIRM_PASSWORD);
        inputField.sendKeys(confirmPassword);
    }

    public void tapCreateAccountButton() {
        AndroidElement button = androidDriver.findElement(BUTTON_CREATE_ACCOUNT);
        button.click();
    }
}
