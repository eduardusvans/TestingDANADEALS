@Android @VoucherDetail
Feature: VoucherDetail

  Background:
  Scenario: Login with registered admin account
    Given User is on DANA Deals Login page
    When User input "phoneNumber" on phone number input field on login page
    And User input "password" on password input field on login page
    And User click Login button
    Then User is on Home Admin page
    Then User see pop up notification

  @HappyFlow
  # ACTIVE TO INACTIVE
  @1
  Scenario: Update status Active to Inactive
    Given User click Voucher "Active"
    Then User is on DANA Deals Voucher Detail page
    When User select status "Inactive" on status voucher dropdown list
    And User click Save button
    Then User see success notification


  # INACTIVE TO ACTIVE
  # Quota > 5
  @2
  Scenario: Update status Inactive to Active, while quota > 5
    Given User click Voucher "Inactive"
    Then User is on DANA Deals Voucher Detail page
    Then User see quota before update
    When User select status "Active" on status voucher dropdown list
    Then User check quota after update
    And User click Save button
    Then User see success notification

  # Quota < 5
  @5
  Scenario Outline: Update status Inactive to Active, while quota < 5
    Given User click Voucher "Inactive"
    Then User is on DANA Deals Voucher Detail page
    Then User see quota "<qtylessthanfive>" before update
    When User select status "Active" on status voucher dropdown list
    Then User check quota "5" after update
    And User click Save button
    Then User see success notification
    Examples:
      |qtylessthanfive|
      |1|
      |2|
      |3|
      |4|
      |5|


