@Android @History
Feature: History

  Background:
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "81290137272" on phone number input field on login page
    And User input "Van1234!" on password input field on login page
    And User click Login button
    Then User is on Home page

  @HistoryPositive
  #H001
  Scenario: Go to History screen
    Given User is on Home page
    When User tap history icon
    Then User is on History screen

  @HistoryPositive
  #H002
  Scenario: Go to In Progress tab
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap in progress tab
    Then User is on In Progress tab screen

  @HistoryPositive
  #H003
  Scenario: Go to Completed tab
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    Then User is on Completed tab screen

  @HistoryPositive
  #H004
  Scenario: Go to History Detail screen with transaction status success on completed tab
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    And User is on Completed tab screen
    And User tap a voucher with transaction status success
    And User is on history detail

  @HistoryPositive
  #H005
  Scenario: Go to History Detail screen with transaction status refund on completed tab
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    And User is on Completed tab screen
    And User tap a voucher with transaction status refund
    And User is on history detail

  @HistoryPositive
  #H006
  Scenario: Go to History Detail screen with transaction status failed on completed tab
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    And User is on Completed tab screen
    And User tap a voucher with transaction status failed
    And User is on history detail

  @HistoryPositive
  #H007
  Scenario: Back to Completed tab from History Detail with transaction status success
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    And User is on Completed tab screen
    And User tap a voucher with transaction status success
    And User is on history detail
    Then User tap Back button on history detail
    Then User is on Completed tab screen

  @HistoryPositive
  #H008
  Scenario: Back to Completed tab from History Detail with transaction status refund
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    And User is on Completed tab screen
    And User tap a voucher with transaction status refund
    And User is on history detail
    Then User tap Back button on history detail
    Then User is on Completed tab screen

  @HistoryPositive
  #H009
  Scenario: Back to Completed tab from History Detail with transaction status failed
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    And User is on Completed tab screen
    And User tap a voucher with transaction status failed
    And User is on history detail
    Then User tap Back button on history detail
    Then User is on Completed tab screen

  @HistoryPositive
  #H017
  Scenario: Check voucher transaction status success
    Given User is on DANA Deals Homepage
    When User click "aasseekk pocer" on DANA Deals homepage
    When User is on voucher details page of "aasseekk pocer"
    When User click buy button on voucher details page
    When User see is on cashier page of "aasseekk pocer"
    When User click pay button on cashier page
    When User see pop up notification that pay success
    When User tap history icon
    When User is on History screen
    When User tap completed tab
    When User is on Completed tab screen
    Then User tap a voucher which user bought

  @HistoryPositive
  #H018
  Scenario: Check voucher transaction status refund
    Given User is on DANA Deals Homepage
    When User type a "Telkom" at search field on DANA Deals Homepage
    When User click "Bayar Indiehome A" on DANA Deals homepage
    When User is on voucher details page of "Bayar Indiehome A"
    When User click buy button on voucher details page
    When User is on voucher cashier page of "Bayar Indiehome A"
    When User click pay button on cashier page
    Then User see pop up notification that pay success
    When User tap history icon
    When User is on History screen
    When User tap completed tab
    When User is on Completed tab screen
    Then User tap a voucher which user bought

  @HistoryPositive
  #H019
  Scenario: Check voucher transaction status failed
    Given User is on DANA Deals Homepage
    When User type a "kfc" at search field on DANA Deals Homepage
    When User click "Crazy Deals" on DANA Deals homepage
    When User is on voucher details page of "Crazy Deals"
    Then User see pop up notification that pay failed
    When User tap history icon
    When User is on History screen
    When User tap completed tab
    When User is on Completed tab screen
    Then User tap a voucher which user bought

  @HistoryPositive
  #H020
  Scenario: Check voucher transaction status in progress
    Given User is on DANA Deals Homepage
    When User click "aasseekk pocer" on DANA Deals homepage
    When User is on voucher details page of "aasseekk pocer"
    When User click buy button on voucher details page
    When User see is on cashier page of "aasseekk pocer"
    When User click back button on cashier page
    When User click back button on voucher details page
    Then User is on DANA Deals Homepage
    When User tap history icon
    When User is on History screen
    When User tap in progress tab
    When User is on In Progress tab screen
    Then User see transaction on In Progress tab

  @HistoryPositive
  #H021
  Scenario: Check Top Up transaction success using bank transfer payment method
    Given User is on DANA Deals Homepage
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User see Balance on Top up Page
    And User choose "50k" as top up nominal on Top up Page
    And User choose Virtual account as a payment method on Top up Page
    And User choose "BCA" to pay the top up on Top up Page
    And User click Next Button on Top up Page
    Then User will redirect into Payment Page
    And User will get "4354081290137272" as Virtual Account Number on Payment Page
    And User get info of Nominal top up ordered on Payment Page
    And User click Top up button on Top up Payment Page
    And User will see total balance is increase in Home page
    When User is on DANA Deals Homepage
    When User tap history icon
    When User is on History screen
    When User tap completed tab
    When User is on Completed tab screen
    Then User tap a top up which user bought

  @HistoryPositive
    #H022
  Scenario: Check Top Up transaction success using merchant payment method
    Given User is on DANA Deals Homepage
    When User click top up icon button on Home Page
    And User is on Top up Page
    And User see Balance on Top up Page
    And User choose "50k" as top up nominal on Top up Page
    And User choose Merchant as a payment method on Top up Page
    And User click Done Button on Top up Page
    Then User is on Home page
    And User total balance is added as "50000" nominal top up
    When User is on DANA Deals Homepage
    When User tap history icon
    When User is on History screen
    When User tap completed tab
    When User is on Completed tab screen
    Then User tap a top up which user bought

  @HistoryPositive
  #H023
  Scenario: Filter transaction based on today date on Completed tab
    Given User is on Home page
    When User tap history icon
    When User is on History screen
    When User tap completed tab
    When User is on Completed tab screen
    When User tap Filter on Completed tab screen
    When User is on date picker on Completed tab screen
    When User tap today date as start date on date picker
    When User tap today date as end date on date picker
    When User tap save button on date picker
    Then User is on Completed tab screen
    Then User see transaction based on filter date

  @HistoryPositive
  #H024
  Scenario: Filter transaction 1 day before the date of today on Completed tab
    Given User is on Home page
    When User tap history icon
    When User is on History screen
    When User tap completed tab
    When User is on Completed tab screen
    When User tap Filter on Completed tab screen
    When User is on date picker on Completed tab screen
    When User tap one day before on date picker
    When User tap today date as end date on date picker
    When User tap save button on date picker
    Then User is on Completed tab screen
    Then User see transaction based on filter date

  @HistoryPositive
  #H025
  Scenario: Filter transaction 5 day before the date of today on Completed tab
    Given User is on Home page
    When User tap history icon
    When User is on History screen
    When User tap completed tab
    When User is on Completed tab screen
    When User tap Filter on Completed tab screen
    When User is on date picker on Completed tab screen
    When User tap five day before on date picker
    When User tap today date as end date on date picker
    When User tap save button on date picker
    Then User is on Completed tab screen
    Then User see transaction based on filter date

  @HistoryPositive
  #H026
  Scenario: Filter transaction 5 day before the date of today on Completed tab
    Given User is on Home page
    When User tap history icon
    When User is on History screen
    When User tap completed tab
    When User is on Completed tab screen
    When User tap Filter on Completed tab screen
    When User is on date picker on Completed tab screen
    When User tap seven day before on date picker
    When User tap today date as end date on date picker
    When User tap save button on date picker
    Then User is on Completed tab screen
    Then User see transaction based on filter date
    




