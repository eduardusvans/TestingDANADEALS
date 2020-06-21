@Android @BuyFeature
  Feature: Buy Feature

    Background:
      Given User is on DANA Deals Login page
      When User input "phoneNumber" on phone number input field on login page
      And User input "password" on password input field on login page
      And User click Login button

    @Positive
    Scenario: Buy voucher from DANA Deals homepage
      Given User is on DANA Deals Homepage
      When User click buy button of "voucher name" on DANA Deals homepage
      Then User see is on cashier page of "voucher name"

    @Positive
      Scenario: Buy voucher from voucher details page
        Given User is on DANA Deals Homepage
        When User click "voucher name" on DANA Deals homepage
        And User is on voucher details page of "voucher name"
        And User click buy button on voucher details page
        Then User see is on cashier page of "voucher name"

    @Positive
    Scenario: Buy voucher from DANA Deals homepage using search merchant name
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      And User see all vouchers of "merchant name" that contains the "character" are displayed
      And User click buy button on "voucher name"
      Then User see is on cashier page of "voucher name"

    @Positive
    Scenario: Buy voucher from DANA Deals homepage using filter merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      And User choose "merchant category" to filter the voucher
      And User see all vouchers of the "merchant category" are displayed
      And User click buy button on "voucher name"
      Then User see is on cashier page of "voucher name"

    @Positive
      Scenario: Buy voucher from voucher details page using filter merchant category
        Given User is on DANA Deals Homepage
        When User click filter dropdown menu button on DANA Deals homepage
        And User choose "merchant category" to filter the voucher
        And User see all vouchers of the "merchant category" are displayed
        And User click "voucher name" to see voucher details
        And User is on voucher details page of "voucher name"
        And User click buy button on voucher details page
        Then User see is on cashier page of "voucher name"

    @Positive
    Scenario: Buy voucher from DANA Deals homepage using sort voucher value
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      And User click sort voucher by voucher value
      And User see all vouchers are sorted from high to low of voucher value
      And User click buy button on "voucher name"
      And User see is on cashier page of "voucher name"

    @Positive
    Scenario: Buy voucher from voucher details page using sort voucher value
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      And User click sort voucher by voucher value
      And User see all vouchers are sorted from high to low of voucher value start from "voucher value"
      And User choose "voucher name" to see voucher details
      And User see the voucher details of "voucher name" is displayed
      And User click buy button on voucher details page
      Then User see is on cashier page of "voucher name"

    @Positive
    Scenario: Buy voucher from DANA Deals homepage using sort saving rate
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      And User click sort voucher by voucher value
      And User see all vouchers are sorted from high to low of voucher value
      And User click buy button on "voucher name"
      And User see is on cashier page of "voucher name"

    @Positive
    Scenario: Buy voucher from voucher details page using sort saving rate
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      And User click sort voucher by saving rate
      And User see all vouchers are sorted from high to low of saving rate start from "saving rate"
      And User choose "voucher name" to see voucher details
      And User see the voucher details of "voucher name" is displayed
      And User click buy button on voucher details page
      Then User see is on cashier page of "voucher name"

      @Negative
      Scenario: Buy voucher with invalid condition
        Given User is on DANA Deals Homepage
        When User search "voucher name" to buy voucher on DANA Deals homepage
        Then User see "voucher name" is not displayed

        @EdgeCase
        Scenario: Buy voucher when admin edit voucher status become inactive
          Given User is on DANA Deals Homepage
          When User click "voucher name" on DANA Deals homepage
          And User is on voucher details page of "voucher name"
          And Admin open DANA Deals app
          And Admin do login for admin side on login page
          And Admin click "voucher name" on DANA Deals admin homepage
          And Admin edit "voucher name" voucher status become inactive on admin voucher details page
          And User click buy button on voucher details page
          Then User see pop up notification that voucher not available

        @EdgeCase
        Scenario: Buy voucher when voucher suddenly out of stock (admin edit)
        Given User is on DANA Deals Homepage
        When User click "voucher name" on DANA Deals homepage
        And User is on voucher details page of "voucher name"
        And Admin open DANA Deals app
        And Admin do login for admin side on login page
        And Admin click "voucher name" on DANA Deals admin homepage
        And Admin edit "voucher name" voucher stock become out of stock on admin voucher details page
        And User click buy button on voucher details page
        And User see pop up notification that voucher is out of stock

        @EdgeCase
        Scenario: Buy voucher when voucher suddenly out of stock (payer edit)
        Given User is on DANA Deals Homepage
        When User1 click "voucher name" on DANA Deals homepage
        And User1 is on voucher details page of "voucher name"
        And User2 click "voucher name" on DANA Deals homepage
        And User2 is on voucher details page of "voucher name"
        And User2 click buy button on voucher details page
        And User2 see is on cashier page of "voucher name"
        And User1 click buy button on voucher details page
        Then User1 see pop up notification that voucher is out of stock
