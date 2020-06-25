@Android @PayVoucher
  Feature: Pay Voucher

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "phoneNumber" on phone number input field on login page
      And User input "password" on password input field on login page
      And User click Login button

    @Positive
    Scenario: Pay voucher from DANA Deals homepage
      Given User is on DANA Deals Homepage
      When User click buy button of "voucher name" on DANA Deals homepage
      When User see is on cashier page of "voucher name"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

    @Positive
    Scenario: Pay voucher from voucher details page
      Given User is on DANA Deals Homepage
      When User click "voucher name" on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click buy button on voucher details page
      When User see is on cashier page of "voucher name"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

    @Positive
    Scenario: Pay voucher from DANA Deals homepage using search merchant name
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      When User see all vouchers of "merchant name" that contains the "character" are displayed
      When User click buy button on "voucher name"
      When User see is on cashier page of "voucher name"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

    @Positive
    Scenario: Pay voucher from voucher details page using search merchant name
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      When User see all vouchers of "merchant name" that contains the "character" are displayed
      When User choose "voucher name" to see voucher details
      When User see the voucher details of "voucher name" is displayed
      When User click buy button on voucher details page
      When User see is on cashier page of "voucher name"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

    @Positive
    Scenario: Pay voucher from DANA Deals homepage using filter merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "merchant category" to filter the voucher
      When User see all vouchers of the "merchant category" are displayed
      When User see the voucher details of "voucher name" is displayed
      When User click buy button on voucher details page
      When User see is on cashier page of "voucher name"
      When User click pay button on cashier page
      Then User see pop up notification that pay success


    @Positive
    Scenario: Pay voucher from DANA Deals homepage using sort voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher value" to sort the voucher
      When User see all vouchers of the "sort by voucher value" are displayed
      When User click buy button on "voucher name"
      When User see is on cashier page of "voucher name"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

    @Negative
    Scenario: Pay voucher when invalid condition
      Given User is on DANA Deals Homepage
      When User search "voucher name" to buy voucher on DANA Deals homepage
      Then User see "voucher name" is not displayed

    @Negative
    Scenario: Pay voucher when balance not enough
      Given User is on DANA Deals Homepage
      When User click "voucher name" on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click buy button on voucher details page
      When User see is on voucher cashier page
      When User click pay button on voucher cashier page
      Then User see pop up notification that balance not enough

    @EdgeCase
    Scenario: Pay voucher when admin edit voucher status become inactive
      Given User is on DANA Deals Homepage
      When User click "voucher name" on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click buy button on voucher details page
      When User is on voucher cashier page
      When Admin open DANA Deals app
      When Admin do login for admin side on login page
      When Admin click "voucher name" on DANA Deals admin homepage
      When Admin edit "voucher name" voucher status become inactive on admin voucher details page
      When User click pay button on voucher cashier page
      Then User see pop up notification that voucher not available

    @EdgeCase
    Scenario: Pay voucher when voucher suddenly out of stock (admin edit)
      Given User is on DANA Deals Homepage
      When User click "voucher name" on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click buy button on voucher details page
      When User is on voucher cashier page
      When Admin open DANA Deals app
      When Admin do login for admin side on login page
      When Admin click "voucher name" on DANA Deals admin homepage
      When Admin edit "voucher name" voucher stock become out of stock on admin voucher details page
      When User click pay button on voucher cashier page
      Then User see pop up notification that voucher is out of stock

    @EdgeCase
    Scenario: Pay voucher when voucher suddenly out of stock (payer edit)
      Given User is on DANA Deals Homepage
      When User1 click "voucher name" on DANA Deals homepage
      When User1 is on voucher details page of "voucher name"
      When User1 click buy button on voucher details page
      When User1 is on voucher details page
      When User2 click "voucher name" on DANA Deals homepage
      When User2 is on voucher details page of "voucher name"
      When User2 click buy button on voucher details page
      When User2 see is on cashier page of "voucher name"
      When User2 click pay button on cashier page
      When User2 see pop up notification that payment success
      When User1 click pay button on cashier page
      Then User1 see pop up notification that voucher is out of stock
