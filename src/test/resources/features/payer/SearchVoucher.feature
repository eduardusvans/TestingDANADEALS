@Android @SearchVoucher
  Feature: Search Voucher

    Background:
      Given User is on DANA Deals Login page
      When User input "phoneNumber" on phone number input field on login page
      And User input "password" on password input field on login page
      And User click Login button

      @Positive
      Scenario: Search voucher using a character
        Given User is on DANA Deals Homepage
        When User type a "character" at search field on DANA Deals Homepage
        Then User see all vouchers that contains the "character" are displayed

      @Positive
      Scenario: Search voucher using merchant name
        Given User is on DANA Deals Homepage
        When User type a "character" at search field on DANA Deals Homepage
        Then User see all vouchers of "merchant name" that contains the "character" are displayed

      @Positive
      Scenario: Reset search voucher
        Given User is on DANA Deals Homepage
        When User type "merchant name" at search field on DANA Deals Homepage
        And User see the voucher that "merchant name" is displayed
        And User delete the "merchant name" on search field
        Then User see all vouchers are displayed

      @Negative
      Scenario: Search voucher using another format except merchant name
        Given User is on DANA Deals Homepage
        When User type "test data" at search field on DANA Deals Homepage
        Then User can't find any voucher and see error message