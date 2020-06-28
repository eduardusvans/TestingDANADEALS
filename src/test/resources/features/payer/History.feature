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

  @Positive
  #H001
  Scenario: Go to History screen
    Given User is on Home page
    When User tap history icon
    Then User is on History screen

  #H002
  Scenario: Go to In Progress tav
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap in progress tab
    Then User is on In Progress tab screen

  #H003
  Scenario: Go to Completed tab
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    Then User is on Completed tab screen

  #H004
  Scenario: Go to Voucher Detail screen with transaction status success
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    And User is on Completed tab screen
    And User tap a voucher with transaction status success
    Then User is on voucher detail

  #H005
  Scenario: Go to Voucher Detail screen with transaction status refund
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    And User is on Completed tab screen
    And User tap a voucher with transaction status refund
    Then User is on voucher detail

  #H006
  Scenario: Go to Voucher Detail screen with transaction status failed
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    And User is on Completed tab screen
    And User tap a voucher with transaction status failed
    Then User is on voucher detail

  #H007 - H009
  Scenario: Back to Completed tab from Voucher Detail with transaction status success
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    And User is on Completed tab screen
    And User tap a voucher with transaction status success
    And User is on voucher detail
    Then User tap Back button on Voucher detail
    Then User is on Completed tab screen

  #H008
  Scenario: Back to Completed tab from Voucher Detail with transaction status refund
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    And User is on Completed tab screen
    And User tap a voucher with transaction status refund
    And User is on voucher detail
    Then User tap Back button on Voucher detail
    Then User is on Completed tab screen

  #H009
  Scenario: Back to Completed tab from Voucher Detail with transaction status failed
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    And User is on Completed tab screen
    And User tap a voucher with transaction status failed
    And User is on voucher detail
    Then User tap Back button on Voucher detail
    Then User is on Completed tab screen

  #H013
  Scenario: User see message when there is no transaction on In Progress tab
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap in progress tab
    And User is on In Progress tab screen
    Then User see message about there is no transaction

  #H014
  Scenario: User see message when there is no transaction on Completed tab
    Given User is on Home page
    When User tap history icon
    And User is on History screen
    And User tap completed tab
    And User is on Completed tab screen
    Then User see message about there is no transaction

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

  #H018
  Scenario: Check voucher transaction status refund
    Given User is on DANA Deals Homepage
    When User type a "kfc" at search field on DANA Deals Homepage
    When User click buy on crazy deals kfc
    When User see pop up notification that pay failed
    When User tap history icon
    When User is on History screen
    When User tap completed tab
    When User is on Completed tab screen
    Then User tap a voucher which user bought

  #H019
  @TestForHistoryFeature @PayRefund
  Scenario: Check voucher transaction status failed
    Given User is on DANA Deals Homepage
    When User type a "Telkom" at search field on DANA Deals Homepage
    When User click Bayar indiehome voucher on DANA Deals homepage
    When User is on voucher details page of "Bayar Indiehome 11"
    When User click buy button on voucher details page
    When User see pop up notification that pay failed
    When User tap history icon
    When User is on History screen
    When User tap completed tab
    When User is on Completed tab screen
    Then User tap a voucher which user bought

  #H020
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

  #H021
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

  #H022
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

  #H023
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
    




