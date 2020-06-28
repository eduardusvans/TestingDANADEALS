@Android @SearchVoucher
  Feature: Search Voucher

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "87811223344" on phone number input field on login page
      And User input "P@ssw0rd" on password input field on login page
      And User click Login button

      @Positive
    Scenario: Search voucher with a character
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      Then User see all vouchers of "merchant name" that contains the "character" are displayed

      @Negative
    Scenario: Search voucher with invalid condition
      Given User is on DANA Deals Homepage
      When User type "test data" at search field on DANA Deals Homepage
      Then User can't find any voucher and see error message


      @EdgeCase
    Scenario: Search voucher using out of stock voucher
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      When User see all vouchers of "merchant name" that contains the "character" are displayed
      When User click "voucher name" voucher on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click buy button on voucher details page
      When User is on voucher details page of "voucher name"
      When User click pay voucher button on cashier page
      When User see pop up notification that payment is success
      When User back to DANA Deals homepage and type a "character" at search field
      Then User see the "voucher name" is not displayed