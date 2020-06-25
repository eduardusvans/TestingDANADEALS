@Android @SortVoucher
  Feature: Sort Voucher

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "phoneNumber" on phone number input field on login page
      And User input "password" on password input field on login page
      And User click Login button

    @Positive
    Scenario: Sort voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "saving rate" to sort the voucher
      Then User see all vouchers of the "sort by saving rate" are displayed

    @Positive
    Scenario: Reset sort voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher value" to sort the voucher
      When User see all vouchers of the "sort by voucher value" are displayed
      When User click reset button on DANA Deals homepage
      Then User see all vouchers are displayed

    @Negative
    Scenario: Sort voucher with invalid data
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "test data" to sort the voucher
      Then User see sort voucher by "test data" feature is not displayed

    @Negative
    Scenario: Sort voucher with out of stock voucher or invalid voucher
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "saving rate" to sort the voucher
      Then User see the "voucher name" is not displayed

    @EdgeCase
    Scenario: Sort voucher with out of stock voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "saving rate" to sort the voucher
      When User see all vouchers of the "sort by saving rate" are displayed
      When User click "voucher name" voucher on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click buy button on voucher details page
      When User see is on cashier page of "voucher name"
      When User click pay voucher button on cashier page
      When User see pop up notification that payment is success
      When User back to DANA Deals homepage and choose "saving rate" to sort the voucher
      Then User see the "voucher name" voucher is not displayed