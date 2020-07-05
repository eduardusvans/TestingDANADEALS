@Android @ForgotPassword
#noinspection NonAsciiCharacters
Feature: Forgot Password

  Background:
    Given User is on Landing page
    Given User tap the Login to Account button on Landing page
    Given User is on DANA Deals Login page
    Given User tap the Forgot Password link on Login page

  @Positive
  Scenario Outline: Reset password with valid input
    Given User is on Forgot Password page
    When User input "<phoneNumber>" on Phone Number input text field on Forgot Password page
    When User tap the Send OTP button on Forgot Password page
    When User is on OTP page
    When User input "<otp>" on OTP input text field on OTP page
    When User is on Reset Password page
    When User input "<newPassword>" on New Password input text field on Reset Password page
    When User input "<confirmNewPassword>" on Confirm New Password input text field on Reset Password page
    When User tap the Change button on Reset Password page
    Then User see the success message on Login page
    Then User is on DANA Deals Login page
    Examples:
      | phoneNumber  | otp  | newPassword      | confirmNewPassword |
      # FGP001
      | 877220742    | 0000 | TestingFGP3!     | TestingFGP3!       |
      # FGP002
      | 877220742500 | 0000 | TestingFGP3!     | TestingFGP3!       |
      # FGP003
      | 87722074250  | 0000 | Abcdef3!         | Abcdef3!           |
      # FGP004
      | 87722074250  | 0000 | Abcdefghijklmn3! | Abcdefghijklmn3!   |

  @Negative @1-1
  Scenario Outline: Reset password with invalid Phone Number input
    Given User is on Forgot Password page
    When User input "<phoneNumber>" on Phone Number input text field on Forgot Password page
    When User cannot tap the Send OTP button on Forgot Password page
    When User is still on Forgot Password page
    Examples:
      | phoneNumber |
      # FGP005
      |             |
      # FGP006
      | 87722074    |
      #
      # FGP009
      | 6885559737  |
      # FGP010
      | 877220742N  |

  @Negative @1-2
  # FGP008
  Scenario: Reset password with unregistered Phone Number input
    Given User is on Forgot Password page
    When User input "89695916513" on Phone Number input text field on Forgot Password page
    When User tap the Send OTP button on Forgot Password page
    When User is still on Forgot Password page

  @Negative @2
  Scenario Outline: Reset password with invalid OTP input
    Given User is on Forgot Password page
    When User input "<phoneNumber>" on Phone Number input text field on Forgot Password page
    When User tap the Send OTP button on Forgot Password page
    When User is on OTP page
    When User input "<otp>" on OTP input text field on OTP page
    Then User is still on OTP page
    Examples:
      | phoneNumber | otp  |
      # FGP012
      | 87722074250 |      |
      # FGP013
      | 87722074250 | 1111 |
      # FGP014
      | 87722074250 | 000  |

  @Negative @3
  Scenario Outline: Reset password with invalid New Password or Confirm New Password input
    Given User is on Forgot Password page
    When User input "<phoneNumber>" on Phone Number input text field on Forgot Password page
    When User tap the Send OTP button on Forgot Password page
    When User is on OTP page
    When User input "<otp>" on OTP input text field on OTP page
    When User is on Reset Password page
    When User input "<newPassword>" on New Password input text field on Reset Password page
    When User input "<confirmNewPassword>" on Confirm New Password input text field on Reset Password page
    When User cannot tap the Change button on Reset Password page
    Then User is still on Reset Password page
    Examples:
      | phoneNumber | otp  | newPassword      | confirmNewPassword |
      # FGP019
      | 87722074250 | 0000 |                  | TestingFGP3!       |
      # FGP020
      | 87722074250 | 0000 | Abcdef3!😎       | Abcdef3!😎         |
      # FGP021
      | 87722074250 | 0000 | abcde3!          | abcde3!            |
      # FGP023
      | 87722074250 | 0000 | abcdefghijklmn3! | abcdefghijklmn3!   |
      # FGP024
      | 87722074250 | 0000 | ABCDEFGHIJKLMN3! | ABCDEFGHIJKLMN3!   |
      # FGP025
      | 87722074250 | 0000 | 1234567!         | 1234567!           |
      # FGP026
      | 87722074250 | 0000 | Abcdefghijklmn!  | Abcdefghijklmn!    |
      # FGP027
      | 87722074250 | 0000 | Abcdefghijklmn3  | Abcdefghijklmn3    |
      # FGP028
      | 87722074250 | 0000 | Abcdef3!         |                    |
      # FGP029
      | 87722074250 | 0000 | Abcdef3!         | Abcdefghijklmn3!   |


  @E2E
  Scenario Outline: Reset password with valid input and followed by try to login
    Given User is on Forgot Password page
    When User input "<phoneNumber>" on Phone Number input text field on Forgot Password page
    When User tap the Send OTP button on Forgot Password page
    When User is on OTP page
    When User input "<otp>" on OTP input text field on OTP page
    When User is on Reset Password page
    When User input "<newPassword>" on New Password input text field on Reset Password page
    When User input "<confirmNewPassword>" on Confirm New Password input text field on Reset Password page
    When User tap the Change button on Reset Password page
    When User see the success message on Login page
    When User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    When User input "<newPassword>" on password input field on login page
    When User click Login button
    When User is on Home page
    When User tap profile icon
    When User is on Profile screen
    When User tap LogOut button
    Then User is on DANA Deals Login page
    Examples:
      | phoneNumber | otp  | newPassword  | confirmNewPassword |
      | 877220742   | 0000 | TestingFGP3! | TestingFGP3!       |

  @EdgeCase @LoginAPI
  Scenario Outline: User is blocked to reset the password when the account is still logged in
    Given User login with "<phoneNumber>" as a phone number and "<password>" as a password on another device
    Given User is on Forgot Password page
    When User input "<phoneNumber>" on Phone Number input text field on Forgot Password page
    When User tap the Send OTP button on Forgot Password page
    When User is still on Forgot Password page
    Examples:
      | phoneNumber | password        |
      | 89695966514 | Bilalelbari123! |
