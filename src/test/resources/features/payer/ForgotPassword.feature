@Android @ForgotPassword
#noinspection NonAsciiCharacters
Feature: Forgot Password

  Background:
    Given User is on DANA Deals Login page
    Given User tap the Forgot password link on Login page

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

  @Negative @1
  Scenario Outline: Reset password with invalid Phone Number input
    Given User is on Forgot Password page
    When User input "<phoneNumber>" on Phone Number input text field on Forgot Password page
    When User tap the Send OTP button on Forgot Password page
    When User is still on Forgot Password page
    Examples:
      | phoneNumber |
      # FGP005
      | 87722074    |
      # FGP007
      | 89695966514 |
      # FGP008
      | 6885559737  |

  @Negative @2
  Scenario Outline: Reset password with invalid OTP input
    Given User is on Forgot Password page
    When User input "<phoneNumber>" on Phone Number input text field on Forgot Password page
    When User tap the Send OTP button on Forgot Password page
    When User is on OTP page
    When User input "<otp>" on OTP input text field on OTP page
    When User is on Reset Password page
    Then User is still on OTP page
    Examples:
      | phoneNumber | otp  |
      | 87722074250 | 1111 |
      | 87722074250 | 000  |

  @Negative @3
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
    Then User is still on Reset Password page
    Examples:
      | phoneNumber | otp  | newPassword      | confirmNewPassword |
      | 87722074250 | 0000 | Abcdef3!😎       | Abcdef3!😎         |
      | 87722074250 | 0000 | abcde3!          | abcde3!            |
      | 87722074250 | 0000 | abcdefghijklmn3! | abcdefghijklmn3!   |
      | 87722074250 | 0000 | ABCDEFGHIJKLMN3! | ABCDEFGHIJKLMN3!   |
      | 87722074250 | 0000 | 1234567!         | 1234567!           |
      | 87722074250 | 0000 | Abcdefghijklmn!  | Abcdefghijklmn!    |
      | 87722074250 | 0000 | Abcdefghijklmn3  | Abcdefghijklmn3    |
      | 87722074250 | 0000 | Abcdef3!         | Abcdefghijklmn3!   |