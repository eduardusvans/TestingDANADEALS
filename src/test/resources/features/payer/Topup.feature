@Android @Topup
Feature: Topup feature for DANA Deals

  Background:
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "81904108080" on phone number input field on login page
    And User input "P@ssw0rd" on password input field on login page
    And User click Login button
    And User is on Home page

  @Test
  Scenario Outline: Top up with All nominal using bank transfer payment method
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
      #TOP001 TOP005 TOP009 TOP013
      | 10k     | BNI          | 9030081904107070 |
      #TOP002 TOP006 TOP010 TOP014
      | 25k     | Mandiri      | 2372081904107070 |
      #TOP003 TOP007 TOP011 TOP015
      | 50k     | BCA          | 4354081904107070 |

  @Test2
  Scenario Outline: Top up using merchant payment method
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User see Balance on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Merchant as a payment method on Top up Page
    And User click Done Button on Top up Page
    Then User is on Home page
    And User total balance is added as "<ordered>" nominal top up

    Examples:
      | nominal | ordered |
      #TOP004 TOP008 TOP012 TOP016
      | 10k     | 10000   |
      #| 25k     | 25000   |
      #| 50k     | 50000   |

  @Test3
  Scenario Outline: Top up using bank transfer payment method is invalid when total balance exceeds maximum balance
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User see Balance on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Virtual account as a payment method on Top up Page
    And User choose "<bankTransfer>" to pay the top up on Top up Page
    And User click Next Button on Top up Page
    And User will redirect into Payment Page
    And User click Top up button on Top up Payment Page
    #Then User will see error message topup failed on Top up Payment page
    Then User will see error message "Top-up failed! You have reached your maximum balance." on Top up Payment Page

    Examples:
      | nominal | bankTransfer |
      #TOP017 TOP021
      | 10k     | BNI          |
      #TOP018 TOP022
      | 25k     | Mandiri      |
      #TOP019 TOP023
      | 50k     | BCA          |

  @Test4
  Scenario Outline: Top up using merchant payment method
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User see Balance on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Merchant as a payment method on Top up Page
    And User click Done Button on Top up Page
    Then User will see error message "Top-up failed! You have reached your maximum balance." on Top up Page

    Examples:
      | nominal |
      #TOP020 TOP024
      | 10k     |
      | 25k     |
      | 50k     |








