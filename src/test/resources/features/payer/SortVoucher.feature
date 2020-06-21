@Android @SortVoucher
  Feature: Sort Voucher

    Background:
      Given User is on DANA Deals Login page
      When User input "phoneNumber" on phone number input field on login page
      And User input "password" on password input field on login page
      And User click Login button

    @Positive
      Scenario: Sort voucher by voucher value
        Given User is on DANA Deals Homepage
        When User click sort dropdown menu button on DANA Deals homepage
        And User click sort voucher by voucher value
        Then User see all vouchers are sorted from high to low of voucher value start from "voucher value"

    @Positive
      Scenario: Reset sort voucher from sort by voucher value
        Given  User is on DANA Deals Homepage
        When User click sort dropdown menu button on DANA Deals homepage
        And User click sort voucher by voucher value
        And User see all vouchers are sorted from high to low of voucher value start from "voucher value"
        And User click sort dropdown menu button
        And User reset sorted voucher using click all vouchers on sort dropdown menu
        Then User see all vouchers are displayed based on alphabetical start from "voucher name"

    @Positive
    Scenario: Sort voucher by saving rate
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      And User click sort voucher by saving rate
      Then User see all vouchers are sorted from high to low of voucher value start from "saving rate"

    @Positive
    Scenario: Reset sort voucher from sort by saving rate
      Given  User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      And User click sort voucher by saving rate
      And User see all vouchers are sorted from high to low of saving rate value start from "saving rate"
      And User click sort dropdown menu button
      And User reset sorted voucher using click all vouchers on sort dropdown menu
      Then User see all vouchers are displayed based on alphabetical start from "voucher name"

    @Negative
      Scenario: Sort voucher using invalid condition
        Given User is on DANA Deals Homepage
        When User click sort dropdown menu button on DANA Deals homepage
        And User choose sort voucher by "test data"
        Then User see sort voucher by "test data" feature is not displayed

    @Negative
        Scenario: Sort voucher by saving rate of out stock voucher
          Given User is on DANA Deals Homepage
          When User click sort dropdown menu button on DANA Deals homepage
          And User choose saving rate to sort the voucher
          And User see all vouchers are sorted from high to low of saving rate start from "saving rate"
          And User click buy on "voucher name" voucher
          And User click pay on cashier page
          And User see pop up notification that payment is success
          And User back to DANA Deals homepage and click sort dropdown menu
          And User choose saving rate to sort the voucher
          Then User see the "voucher name" voucher is not displayed

    @Negative
        Scenario: Sort voucher by voucher value of out stock voucher
          Given User is on DANA Deals Homepage
          When User click sort dropdown menu button on DANA Deals homepage
          And User choose voucher value to sort the voucher
          And User see all vouchers are sorted from high to low of voucher value start from "voucher value"
          And User click buy on "voucher name" voucher
          And User click pay on cashier page
          And User see pop up notification that payment is success
          And User back to DANA Deals homepage and click sort dropdown menu
          And User choose voucher value to sort the voucher
          Then User see the "voucher name" voucher is not displayed
