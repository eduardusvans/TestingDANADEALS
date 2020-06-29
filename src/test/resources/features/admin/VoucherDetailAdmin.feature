@Android @VoucherDetailAdmin
Feature: VoucherDetail

  Background:
  Scenario: Login with registered admin account
    Given User is on DANA Deals Login page
    When User input "phoneNumber" on phone number input field on login page
    And User input "password" on password input field on login page
    And User click Login button
    Then User is on Home Admin page

  @HappyFlow
  # ACTIVE TO INACTIVE
  @1
  Scenario: Update status Active to Inactive which date voucher is not expired
    Given User click Voucher status "Active"
    Then User is on DANA Deals Voucher Detail page
    When User click status
    And User click Save button
    Then User see success notification


  # INACTIVE TO ACTIVE
  # Quota > 5
  @2
  Scenario: Update status Inactive to Active, while quota > 5
    Given User click Voucher "A" status "Inactive" and quota "6"
    Then User is on DANA Deals Voucher Detail page
    Then User see quota "6" before update
    When User click status
    Then User check quota "6" after update
    And User click Save button
    Then User see success notification

  # Quota < 5
  @5
  Scenario Outline: Update status Inactive to Active, while quota < 5
    Given User click Voucher "B" status "Inactive" and quota "4"
    Then User is on DANA Deals Voucher Detail page
    Then User see quota "4" before update
    When User click status
    Then User check quota "5" after update
    And User click Save button
    Then User see success notification
    Then User check Voucher "A" status "Inactive" and quota "5" on Home Admin Page




  @6
  Scenario: Check element of Voucher Detail Page
    Given User click Voucher status "Active"
    Then User see status textview
    Then User see voucher name textview
    Then User see merchant id textview
    Then User see discount textview
    Then User see max discount textview
    Then User see voucher price textview
    Then User see expired textview
    Then User see quota input textfield
    Then User see increase button
    Then User see decrease button
    Then User see save button
