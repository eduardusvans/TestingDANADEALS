@Android @Topup
Feature: Topup feature for DANA Deals

  #PositiveMinBank
  Scenario Outline: Top up with All nominal using bank transfer payment method
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    And User is on Home page
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
      | phoneNumber | password | nominal | bankTransfer | vaNumber         |
      #TOP001 TOP005
      | 81220304099 | P@ssw0rd | 10k     | BNI          | 9030081220304099 |
      #TOP002 TOP006
      | 81220304099 | P@ssw0rd | 25k     | Mandiri      | 2372081220304099 |
      #TOP003 TOP007
      | 81220304099 | P@ssw0rd | 50k     | BCA          | 4354081220304099 |

  #PositiveMinMerchant
  Scenario Outline: Top up using merchant payment method
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    And User is on Home page
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User see Balance on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Merchant as a payment method on Top up Page
    And User click Done Button on Top up Page
    Then User is on Home page
    And User total balance is added as "<ordered>" nominal top up

    Examples:
      | phoneNumber | password | nominal | ordered |
      #TOP004 TOP008
      | 81220304099 | P@ssw0rd | 10k     | 10000   |
      | 81220304099 | P@ssw0rd | 25k     | 25000   |
      | 81220304099 | P@ssw0rd | 50k     | 50000   |

  #PositiveMaxBank
  Scenario Outline:
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    And User is on Home page
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
      | phoneNumber | password | nominal | bankTransfer | vaNumber         |
      #TOP009 TOP013
      | 81220304055 | P@ssw0rd | 10k     | BNI          | 9030081220304055 |
      #TOP010 TOP014
      | 81220304066 | P@ssw0rd | 25k     | Mandiri      | 2372081220304066 |
      #TOP011 TOP015
      | 81220304077 | P@ssw0rd | 50k     | BCA          | 4354081220304077 |


  #PositiveMaxMerchant
  Scenario Outline: Top up using merchant payment method
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    And User is on Home page
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User see Balance on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Merchant as a payment method on Top up Page
    And User click Done Button on Top up Page
    Then User is on Home page
    And User total balance is added as "<ordered>" nominal top up

    Examples:
      | phoneNumber | password | nominal | ordered |
      #TOP012 TOP016
      | 81220304088 | P@ssw0rd | 50k     | 50000   |


  #NegativeExceedsBank
  Scenario Outline:
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    And User is on Home page
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User see Balance on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Virtual account as a payment method on Top up Page
    And User choose "<bankTransfer>" to pay the top up on Top up Page
    And User click Next Button on Top up Page
    Then User will redirect into Payment Page
    And User click Top up button on Top up Payment Page
    And User will see error message "Top-up failed! You have reached your maximum balance." on Top up Payment Page

    Examples:
      | phoneNumber | password | nominal | bankTransfer |
      #TOP017
      | 81220304000 | P@ssw0rd | 10k     | BNI          |
      #TOP018
      | 81220304000 | P@ssw0rd | 25k     | Mandiri      |
      #TOP019
      | 81220304000 | P@ssw0rd | 50k     | BCA          |

  #NegativeExceedsMerchant
  Scenario Outline: Top up using merchant payment method
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    And User is on Home page
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User see Balance on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Merchant as a payment method on Top up Page
    And User click Done Button on Top up Page
    Then User will see error message "Top-up failed! You have reached your maximum balance." on Top up Page

    Examples:
      | phoneNumber | password | nominal |
      #TOP020
      | 81220304000 | P@ssw0rd | 10k     |


  #NegativeLimitBank
  Scenario Outline:
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    And User is on Home page
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User see Balance on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Virtual account as a payment method on Top up Page
    And User choose "<bankTransfer>" to pay the top up on Top up Page
    And User click Next Button on Top up Page
    Then User will redirect into Payment Page
    And User click Top up button on Top up Payment Page
    And User will see error message "Top-up failed! You have reached your maximum balance." on Top up Payment Page

    Examples:
      | phoneNumber | password | nominal | bankTransfer |
      #TOP021
      | 81220304055 | P@ssw0rd | 10k     | BNI          |
      #TOP022
      | 81220304066 | P@ssw0rd | 25k     | Mandiri      |
      #TOP023
      | 81220304077 | P@ssw0rd | 50k     | BCA          |

  #NegativeLimitMerchant
  Scenario Outline: Top up using merchant payment method
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    And User is on Home page
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User see Balance on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Merchant as a payment method on Top up Page
    And User click Done Button on Top up Page
    Then User will see error message "Top-up failed! You have reached your maximum balance." on Top up Page

    Examples:
      | phoneNumber | password | nominal |
      #TOP024
      | 81220304088 | P@ssw0rd | 10k     |



  @Retest
  #RESERVEDTEST
  Scenario Outline: Top up with All nominal using bank transfer payment method
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    And User is on Home page
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
      | phoneNumber | password | nominal | bankTransfer | vaNumber         |
      #TOP001 TOP005
      | 81220304099 | P@ssw0rd | 10k     | BNI          | 9030081220304099 |


  @Retest
  #NegativeExceedsMerchant
  Scenario Outline: Top up using merchant payment method
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "<phoneNumber>" on phone number input field on login page
    And User input "<password>" on password input field on login page
    And User click Login button
    And User is on Home page
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User see Balance on Top up Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose Merchant as a payment method on Top up Page
    And User click Done Button on Top up Page
    Then User will see error message "Top-up failed! You have reached your maximum balance." on Top up Page

    Examples:
      | phoneNumber | password | nominal |
      #TOP020
      | 81220304000 | P@ssw0rd | 10k     |






