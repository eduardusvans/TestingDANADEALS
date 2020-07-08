@Android @VoucherDetail
Feature: VoucherDetail

  Background:
  Scenario: Login with registered admin account
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "phoneNumber" on phone number input field on login page
    And User input "password" on password input field on login page
    And User click Login button
    Then User is on Home Admin page

  @Functional
  # ACTIVE TO INACTIVE
  @1 #VOUD001
  Scenario: Update status Active to Inactive which date voucher not expired
    Given User click Voucher status "Active"
    Then User is on DANA Deals Voucher Detail page
    When User click status
    And User click Save button
    Then User see success notification


  # INACTIVE TO ACTIVE
  # Quota > 5
   @2 #VOUD002
   Scenario: Update status Inactive to Active, while quota > 5
     Given User click Voucher "A" status "Inactive" and quota "6"
     Then User is on DANA Deals Voucher Detail page
     Then User see quota "6" before update
     When User click status
     Then User check quota "6" after update
     And User click Save button
     Then User see success notification

  @3 #VOUD003
  Scenario: Update status Inactive to Active, while quota > 5 and increase quota
    Given User click Voucher "A" status "Inactive" and quota "6"
    Then User is on DANA Deals Voucher Detail page
    Then User see quota "6" before update
    When User click status
    Then User check quota "6" after update
    When User click Increase button
    And User click Save button
    Then User see success notification

  @4 #VOUD004
  Scenario: Update status Inactive to Active, while quota > 5 and decrease quota
    Given User click Voucher "A" status "Inactive" and quota "6"
    Then User is on DANA Deals Voucher Detail page
    Then User see quota "6" before update
    When User click status
    Then User check quota "6" after update
    When User click Decrease button
    And User click Save button
    Then User see success notification

  # Quota < 5
  @5 #VOUD005
 Scenario: Update status Inactive to Active, while quota < 5
    Given User click Voucher "B" status "Inactive" and quota "4"
    Then User is on DANA Deals Voucher Detail page
    Then User see quota "4" before update
    When User click status
    Then User check quota "5" after update
    And User click Save button
    Then User see success notification

  @6 #VOUD006
  Scenario: Update status Inactive to Active, while quota < 5 and increase quota
    Given User click Voucher "A" status "Inactive" and quota "4"
    Then User is on DANA Deals Voucher Detail page
    Then User see quota "4" before update
    When User click status
    Then User check quota "5" after update
    When User click Increase button
    And User click Save button
    Then User see success notification

  @7 #VOUD007
  Scenario: Update status Inactive to Active, while quota < 5 and decrease quota
    Given User click Voucher "A" status "Inactive" and quota "4"
    Then User is on DANA Deals Voucher Detail page
    Then User see quota "4" before update
    When User click status
    Then User check quota "5" after update
    # When User can't click Decrease button
    And User click Save button
    Then User see success notification

  @8
  Scenario: Update status Inactive to Active which date voucher is expired
    Given User click Voucher status "Inactive"
    Then User is on DANA Deals Voucher Detail page
    # When User can't click status
    # And User click Save button
    # Then User see success notification

  @9
  Scenario: Update stock with click increase button
    Given User click Voucher status "Active"
    Then User is on DANA Deals Voucher Detail page
    When User click Increase button
    And User click Save button
    Then User see success notification

  @10
  Scenario: Update stock with click decrease button
    Given User click Voucher status "Active"
    Then User is on DANA Deals Voucher Detail page
    When User click Decrease button
    And User click Save button
    Then User see success notification

  @NonFunctional
  @1 #VON001
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