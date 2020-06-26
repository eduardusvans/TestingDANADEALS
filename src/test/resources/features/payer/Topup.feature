@Android @Topup
Feature: Topup feature for DANA Deals

  Background:
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "81904107070" on phone number input field on login page
    And User input "P@ssw0rd" on password input field on login page
    And User click Login button
    And User is on Home page

  Scenario Outline: Top up with All nominal using bank transfer payment method as a new user
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Virtual account as a payment method on Top up Page
    And User choose "<bankTransfer>" to pay the top up on Top up Page
    And User click Next Button on Top up Page
    Then User will redirect into Payment Page
    Examples:
      | nominal    | bankTransfer |
      #TOP001
      | RP. 10.000 | BNI          |
      | RP. 25.000 | BNI          |
      | RP. 50.000 | BNI          |
      #TOP002
      | RP. 10.000 | Mandiri      |
      | RP. 25.000 | Mandiri      |
      | RP. 50.000 | Mandiri      |
      #TOP003
      | RP. 10.000 | BCA          |
      | RP. 25.000 | BCA          |
      | RP. 50.000 | BCA          |

  Scenario Outline: Top up with All nominal using Agent payment method as a new user
    When User click top up icon button on Home Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Merchant as a payment method on Top up Page
    And User click Next Button on Top up Page
    Then User will redirect into Payment Page

    Examples:
      | nominal    |
      #TOP004
      | RP. 10.000 |
      | RP. 25.000 |
      | RP. 50.000 |

  Scenario Outline: Verify balance is increase when top up using bank transfer as a new user
    When User is on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Virtual account as a payment method on Top up Page
    And User choose "<bankTransfer>" to pay the top up on Top up Page
    And User click Next Button on Top up Page
    And User click Top up button on Top up Payment Page
    Then User will see total balance is increase in Home page
    Examples:
      | nominal    | bankTransfer |
      #TOP005
      | RP. 10.000 | BNI          |
      | RP. 25.000 | BNI          |
      | RP. 50.000 | BNI          |
      #TOP006
      | RP. 10.000 | Mandiri      |
      | RP. 25.000 | Mandiri      |
      | RP. 50.000 | Mandiri      |
      #TOP007
      | RP. 10.000 | BCA          |
      | RP. 25.000 | BCA          |
      | RP. 50.000 | BCA          |

  Scenario Outline: Verify balance is increase when top up using Merchant as a new user
    When User is on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Merchant as a payment method on Top up Page
    And User click Next Button on Top up Page
    And User click Top up button on Top up Payment Page
    Then User will see total balance is increase in Home page
    Examples:
      | nominal    |
      #TOP008
      | RP. 10.000 |
      | RP. 25.000 |
      | RP. 50.000 |

  # RESERVED
  Scenario Outline: Top up with All nominal using bank transfer payment method as a new user
    When User click top up icon button on Home Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Virtual account as a payment method on Top up Page
    And User choose "<bankTransfer>" to pay the top up on Top up Page
    And User click Next Button on Top up Page
    Then User will redirect into Payment Page
    And User will get "<vaNumber>" as Virtual Account Number on Payment Page
    And User click Top up button on Top up Payment Page

    Examples:
      | nominal    | bankTransfer | vaNumber |
      | RP. 10.000 | BNI          | 0247     |
      | 25000      | BNI          | 0247     |
      | 50000      | BNI          | 0247     |
      | 10000      | Mandiri      | 0247     |
      | 25000      | Mandiri      | 0247     |
      | 50000      | Mandiri      | 0247     |
      | 10000      | BCA          | 0247     |
      | 25000      | BCA          | 0247     |
      | 50000      | BCA          | 0247     |

  Scenario Outline: Top up with All nominal using bank transfer payment method as a new user
    Given User is on DANA Deals Login page
    And User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User is on Home page
    And User click top up icon button on Home Page
    When User is on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Virtual account as a payment method on Top up Page
    And User choose "<bankTransfer>" to pay the top up on Top up Page
    And User click Next Button on Top up Page
    Then User will redirect into Payment Page
    Examples:
      | phoneNumber | password | nominal    | bankTransfer |
      #TOP001
      | 81904106060 | P@ssw0rd | RP. 10.000 | BNI          |
      | 81904106060 | P@ssw0rd | RP. 25.000 | BNI          |
      | 81904106060 | P@ssw0rd | RP. 50.000 | BNI          |
      #TOP002
      | 81904106060 | P@ssw0rd | RP. 10.000 | Mandiri      |
      | 81904106060 | P@ssw0rd | RP. 25.000 | Mandiri      |
      | 81904106060 | P@ssw0rd | RP. 50.000 | Mandiri      |
      #TOP003
      | 81904106060 | P@ssw0rd | RP. 10.000 | BCA          |
      | 81904106060 | P@ssw0rd | RP. 25.000 | BCA          |
      | 81904106060 | P@ssw0rd | RP. 50.000 | BCA          |

  @Test
  Scenario Outline: Top up with All nominal using bank transfer payment method as a new user
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Virtual account as a payment method on Top up Page
    And User choose "<bankTransfer>" to pay the top up on Top up Page
    And User click Next Button on Top up Page
    Then User will redirect into Payment Page
    And User will get "<vaNumber>" as Virtual Account Number on Payment Page

    Examples:
      | nominal | bankTransfer | vaNumber         |
      #TOP001
      | 10k     | BNI          | 9030081904107070 |
      | 25k     | Mandiri      | 2372081904107070 |
      | 50k     | BCA          | 4354081904107070 |

  @Test2
  Scenario Outline: Top up with All nominal using bank transfer payment method as a new user
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User see Balance on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Virtual account as a payment method on Top up Page
    And User choose "<bankTransfer>" to pay the top up on Top up Page
    And User click Next Button on Top up Page
    Then User will redirect into Payment Page
    And User will get "<vaNumber>" as Virtual Account Number on Payment Page
    And User get info of Nominal top up ordered on Payment Page
    And User click Top up button on Top up Payment Page
    And User will see total balance is increase in Home page

    Examples:
      | nominal | bankTransfer | vaNumber         |
      #TOP001
      | 10k     | BNI          | 9030081904107070 |
      | 25k     | Mandiri      | 2372081904107070 |
      | 50k     | BCA          | 4354081904107070 |









