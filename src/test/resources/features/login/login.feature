@Android @Login
Feature: Login

  @HappyFlow
  Scenario: Login with registered account
    Given User is on DANA Deals Login page
    When User input "phoneNumber" on phone number input field on login page
    And User input "password" on password input field on login page
    Then User is on Home page

  @BadFlow
  @1
  Scenario Outline: Login with registered phone number and unregistered password
    Given User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    Then User is on Home page
    Examples:
      | phoneNumber      | password   |
      | 83196747870      | Passwordku1 |
      | 83196747870      |             |

  @2
  Scenario Outline: Login with empty phone number
    Given User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    Then User is on Home page
    Examples:
      | phoneNumber      | password    |
      |                  | P@sswordku1 |
      |                  | Passwordku1 |
      |                  |             |

  @3
  Scenario Outline: Login with unregistered phone number
    Given User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    Then User is on Home page
    Examples:
      | phoneNumber      | password    |
      | 83196747871      | P@sswordku1 |
      | 83196747871      | Passwordku1 |
      | 83196747871      |             |

  @4
  Scenario Outline: Login with alphabetic
    Given User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    Then User is on Home page
    Examples:
      | phoneNumber | password    |
      | abcdef      | P@sswordku1 |
      | abcdef      | Passwordku1 |
      | abcdef      |             |

  @5
  Scenario Outline: Login with symbol
    Given User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    Then User is on Home page
    Examples:
      | phoneNumber | password    |
      | @@          | P@sswordku1 |
      | @@          | Passwordku1 |
      | @@          |             |

  @6
  Scenario Outline: Login with emoji
    Given User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    Then User is on Home page
    Examples:
      | phoneNumber | password    |
      | 😎          | P@sswordku1 |
      | 😎          | Passwordku1 |
      | 😎          |             |


  @7
  Scenario Outline: Login with combination of alphabet,symbol and emoji
    Given User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    Then User is on Home page
    Examples:
      | phoneNumber | password    |
      | a@😎          | P@sswordku1 |
      | a@😎          | Passwordku1 |
      | a@😎          |             |


  @8
  Scenario Outline: Login with combination of alphabetic and symbol
    Given User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    Then User is on Home page
    Examples:
      | phoneNumber | password    |
      | a@          | P@sswordku1 |
      | a@          | Passwordku1 |
      | a@          |             |

  @9
  Scenario Outline: Login with combination of alphabetic and emoji
    Given User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    Then User is on Home page
    Examples:
      | phoneNumber | password    |
      | a😎          | P@sswordku1 |
      | a😎          | Passwordku1 |
      | a😎          |             |

  @10
  Scenario Outline: Login with combination of symbol and emoji
    Given User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    Then User is on Home page
    Examples:
      | phoneNumber | password    |
      | @😎          | P@sswordku1 |
      | @😎          | Passwordku1 |
      | @😎          |             |

  @11
  Scenario Outline: Login with phone number not start from 8
    Given User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    Then User is on Home page
    Examples:
      | phoneNumber     | password    |
      | 6283196747870   | P@sswordku1 |
      | 6283196747870   | Passwordku1 |
      | 6283196747870   |             |

  @12
  Scenario Outline: Login with phone number less than 8
    Given User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    Then User is on Home page
    Examples:
      | phoneNumber     | password    |
      | 8965966         | P@sswordku1 |
      | 8965966         | Passwordku1 |
      | 8965966         |             |

  @13
  Scenario Outline: Login with phone number exceeds 12
    Given User is on DANA Deals Login page
    When User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    Then User is on Home page
    Examples:
      | phoneNumber          | password    |
      | 896596651401         | P@sswordku1 |
      | 896596651401         | Passwordku1 |
      | 896596651401         |             |

  @14
  Scenario: Login with new password
    Given User is on DANA Deals Login page
    When User input "83196747870" on phone number input field on login page
    And User input "P@sswordku2" on password input field on login page
    Then User is on Home page

  @15
  Scenario: Login with old password
    Given User is on DANA Deals Login page
    When User input "83196747870" on phone number input field on login page
    And User input "P@sswordku2" on password input field on login page
    Then User is on Home page