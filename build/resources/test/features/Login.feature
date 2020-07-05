@Android @Login
#noinspection NonAsciiCharacters
Feature: Login

  @Positive
  @Payer
  # LOG001  LOGN015
  Scenario: Login with registered account
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "83196747870" on phone number input field on login page
    And User input "P@sswordku1" on password input field on login page
    And User click Login button
    Then User see message
    Then User is on Home page

  @Admin
  # ALOG001  ALOGN002
  Scenario: Login with registered admin account
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "85811440575" on phone number input field on login page
    And User input "TeamDeal123!" on password input field on login page
    And User click Login button
    Then User see message
    Then User is on Home Admin page

  @Negative
  @Payer
  @1    # LOGN017
  Scenario Outline: Login with registered phone number and unregistered password
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see pop up notification
    Examples:
      | phoneNumber      | password   |
      # LOG002
      | 83196747870      | Passwordku1 |
      # LOG003
      | 83196747870      |              |

  @2     # LOGN013
  Scenario Outline: Login with empty phone number
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see warning text
    Examples:
      | phoneNumber        | password    |
      # LOG004
      |                    | P@sswordku1 |
      # LOG005
      |                    | Passwordku1 |
      # LOG006
      |                    |              |

  @3   # LOGN016
  Scenario Outline: Login with unregistered phone number
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see pop up notification
    Examples:
      | phoneNumber      | password    |
      # LOG007
      | 83196747871      | P@sswordku1 |
      # LOG008
      | 83196747871      | Passwordku1 |
      # LOG009
      | 83196747871      |               |

   @4   # LOGN013
  Scenario Outline: Login with alphabetic
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see warning text
    Examples:
      | phoneNumber | password    |
      # LOG010
      | abcdef      | P@sswordku1 |
      # LOG011
      | abcdef      | Passwordku1 |
      # LOG012
      | abcdef      |              |

  @5   # LOGN013
  Scenario Outline: Login with symbol
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see warning text
    Examples:
      | phoneNumber | password    |
      # LOG013
      | @@          | P@sswordku1 |
      # LOG014
      | @@          | Passwordku1 |
      # LOG015
      | @@          |              |

  @6   # LOGN013
  Scenario Outline: Login with emoji
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see warning text
    Examples:
      | phoneNumber | password    |
      # LOG016
      | 😎          | P@sswordku1 |
      # LOG017
      | 😎          | Passwordku1 |
      # LOG018
      | 😎          |              |

  @7   # LOGN013
  Scenario Outline: Login with combination of alphabet,symbol and emoji
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see warning text
    Examples:
      | phoneNumber | password    |
      # LOG019
      | a@😎          | P@sswordku1 |
      # LOG020
      | a@😎          | Passwordku1 |
      # LOG021
      | a@😎          |              |

  @8 # LOGN013
  Scenario Outline: Login with combination of alphabetic and symbol
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see warning text
    Examples:
      | phoneNumber | password    |
      # LOG022
      | a@          | P@sswordku1 |
      # LOG023
      | a@          | Passwordku1 |
      # LOG024
      | a@          |              |

  @9   # LOGN013
  Scenario Outline: Login with combination of alphabetic and emoji
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see warning text
    Examples:
      | phoneNumber | password    |
      # LOG025
      | a😎          | P@sswordku1 |
      # LOG026
      | a😎          | Passwordku1 |
     # LOG027
      | a😎          |              |

  @10   # LOGN013
  Scenario Outline: Login with combination of symbol and emoji
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see warning text
    Examples:
      | phoneNumber | password    |
      # LOG028
      | @😎          | P@sswordku1 |
      # LOG029
      | @😎          | Passwordku1 |
      # LOG030
      | @😎          |              |

  @11   # LOGN013
  Scenario Outline: Login with phone number not start from 8
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see warning text
    Examples:
      | phoneNumber     | password    |
      # LOG031
      | 6283196747870   | P@sswordku1 |
      # LOG032
      | 6283196747870   | Passwordku1 |
      # LOG033
      | 6283196747870   |              |

  @12   # LOGN013
  Scenario Outline: Login with phone number less than 8
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see warning text
    Examples:
      | phoneNumber     | password    |
      # LOG034
      | 8965966         | P@sswordku1 |
      # LOG035
      | 8965966         | Passwordku1 |
      # LOG036
      | 8965966         |              |

  @13   # LOGN013
  Scenario Outline: Login with phone number exceeds 12
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see warning text
    Examples:
      | phoneNumber          | password    |
      # LOG037
      | 896596651401111         | P@sswordku1 |
      # LOG038
      | 896596651401111         | Passwordku1 |
      # LOG039
      | 896596651401111         |              |

  @14  # LOGN013
  Scenario Outline: Login with phone number start with 84
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see warning text
    Examples:
      | phoneNumber          | password    |
      # LOG040
      | 84196747871          | P@sswordku1 |
      # LOG041
      | 84196747871          | Passwordku1 |
      # LOG042
      | 84196747871          |              |


  @NonFunctional
  @1
  # LOGN002
  Scenario: Verify element on Login Page
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    Then User see DANA DEALS textview
    Then User see not register yet? textview
    Then User see phone number input textfield
    Then User see password input textfield
    Then User see forgot password link
    Then User see register here link
    Then User see Login button

  @2
  # LOGN003
  Scenario: Go to "Forgot Password Page" by tap "Forgot Password" Link
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User click Forgot Password link
    Then User is on Forgot Password Page

  @NonFunctional
  @3
  # LOGN004
  Scenario: Go to "Register Page" by tap "Register here" Link
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User click Register Here link
    Then User is on Register Page


  @E2ELoginFeature
  @Payer
  # ETEL001
  Scenario Outline: Register - Login - Logout
    Given User is on Landing page
    When User tap the Create Account button on Landing page
    Then User is on Register page
    When User input "<phoneNumber>" on Phone Number input text field on Register page
    When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
    When User input "<email>" on E-Mail input text field on Register page
    When User input "<password>" on Password input text field on Register page
    When User input "<confirmPassword>" on Confirm Password input text field on Register page
    When User tap the Create Account button on Register page
    Then User see the success message on Login page
    Then User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    Then User see message
    Then User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap LogOut button
    Then User is on DANA Deals Login page
    Examples:
      | phoneNumber  | firstName | lastName | email  | password | confirmPassword |
      | 83180897870 | Ori      | Ani      | Random | P@ssw0rd | P@ssw0rd        |

  @Admin
  # ETEL002
  Scenario: Admin Login - Logout
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "85811440575" on phone number input field on login page
    And User input "TeamDeal123!" on password input field on login page
    And User click Login button
    Then User is on Home Admin page
    When User tap LogOut button on Home Admin page
    Then User is on DANA Deals Login page