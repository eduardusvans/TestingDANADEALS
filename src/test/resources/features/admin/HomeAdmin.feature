@Android @HomeAdmin
#noinspection NonAsciiCharacters
Feature: Home

  Background:
    Given User is on Landing page
    Given User click Login to Account button
    Given User is on DANA Deals Login page
    Given User input "87800000000" on phone number input field on login page
    Given User input "P@ssw0rd" on password input field on login page
    Given User click Login button
    Given User is on Home Admin page

  @Search @Positive @Basic
  Scenario Outline: Search voucher with the valid condition
    Given User wait for the voucher list to be loaded
    Given User input "<keyword>" on Search Merchant input text field on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    Then User see the voucher in the voucher list that has "<keyword>" on its merchant name on Home Admin page
    Examples:
      | keyword |
      #HSA001
      | t       |
      #HSA002
      | tel     |
      #HSA003
      | kfc     |
      #HSA004
      | TELKOM  |

  @Reset @Search @Positive @1-1
  #HSA005
  Scenario: Search voucher and followed by clearing the input
    Given User wait for the voucher list to be loaded
    Given User input "kfc" on Search Merchant input text field on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    When User see the voucher in the voucher list that has "kfc" on its merchant name on Home Admin page
    When User clear the Search Merchant input text field on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    Then User see all of the existing vouchers on Home Admin page

  @Reset @Search @Positive @1-2
  #HSA006
  Scenario: Search voucher and followed by resetting with Reset button
    Given User wait for the voucher list to be loaded
    Given User input "kfc" on Search Merchant input text field on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    When User see the voucher in the voucher list that has "kfc" on its merchant name on Home Admin page
    When User tap Reset button on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    Then User see all of the existing vouchers on Home Admin page

  @Search @Negative
  Scenario Outline: Search voucher with the invalid condition
    Given User wait for the voucher list to be loaded
    When User input "<keyword>" on Search Merchant input text field on Home Admin page
    Then User see the warning notification that says the voucher cannot be found
    Then User cannot see any voucher on Home Admin page
    Examples:
      | keyword         |
      #HSA007
      | m               |
      #HSA008
      | elko            |
      #HSA009
      | 10%             |
      #HSA010
      | kfc 10%        |

  @Filter @Positive @1-1
  Scenario Outline: Filter the voucher by its status
    Given User wait for the voucher list to be loaded
    Given User tap "<status>" button on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    Then User see the voucher in the voucher list that has "<status>" on its status on Home Admin page
    Examples:
      | status   |
      #HFA001
      | Active   |
      #HFA002
      | Inactive |

  @Filter @Positive @1-2
  Scenario Outline: Change from one filter status to the other
    Given User wait for the voucher list to be loaded
    Given User tap "<firstStatus>" button on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    When User see the voucher in the voucher list that has "<firstStatus>" on its status on Home Admin page
    When User tap Reset button on Home Admin page
    When User tap "<secondStatus>" button on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    Then User see the voucher in the voucher list that has "<secondStatus>" on its status on Home Admin page
    Examples:
      | firstStatus | secondStatus |
      #HFA003
      | Active      | Inactive     |
      #HFA004
      | Inactive    | Active       |

  @Reset @Filter @Positive
  Scenario Outline: Filter voucher and followed by resetting with Reset button
    Given User wait for the voucher list to be loaded
    Given User tap "<status>" button on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    Then User see the voucher in the voucher list that has "<status>" on its status on Home Admin page
    When User tap Reset button on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    Then User see all of the existing vouchers on Home Admin page
    Examples:
      | status   |
      #HFA005
      | Active   |
      #HFA006
      | Inactive |

  @Search @Filter @Positive @1-1
  Scenario Outline: Filter voucher and followed by search voucher
    Given User wait for the voucher list to be loaded
    Given User tap "<status>" button on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    When User see the voucher in the voucher list that has "<status>" on its status on Home Admin page
    When User input "<keyword>" on Search Merchant input text field on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    Then User see the voucher in the voucher list that has "<keyword>" on its merchant name on Home Admin page
    Then User tap Logout button on Home Admin page
    Examples:
      | status   | keyword |
      #HSA017
      | Active   | telkom  |
      #HSA018
      | Inactive | telkom  |

  @Search @Filter @Positive @1-2
  Scenario Outline: Search voucher and followed by filter voucher
    Given User wait for the voucher list to be loaded
    Given User input "<keyword>" on Search Merchant input text field on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    When User see the voucher in the voucher list that has "<keyword>" on its merchant name on Home Admin page
    When User tap "<status>" button on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    Then User see the voucher in the voucher list that has "<status>" on its status on Home Admin page
    Examples:
      | keyword | status   |
      #HFA007
      | telkom  | Active   |
      #HSA008
      | telkom  | Inactive |

  @E2E
  Scenario Outline: Search voucher and followed by filter voucher and then followed by logout
    Given User wait for the voucher list to be loaded
    Given User input "<keyword>" on Search Merchant input text field on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    When User see the voucher in the voucher list that has "<keyword>" on its merchant name on Home Admin page
    When User tap "<status>" button on Home Admin page
    When User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    When User see the voucher in the voucher list that has "<status>" on its status on Home Admin page
    When User see the voucher list on Home Admin page
    When User tap Logout button on Home Admin page
    When User see the loading screen
    Then User is on DANA Deals Login page
    Examples:
      | keyword | status |
      #HFA007
      | telkom  | Active |

  @Logout @Positive
  Scenario: Log out the the account
    Given User wait for the voucher list to be loaded
    When User see the voucher list on Home Admin page
    When User tap Logout button on Home Admin page
    When User see the loading screen
    Then User is on DANA Deals Login page



