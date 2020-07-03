@Android @PayVoucher
  Feature: Pay Voucher

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "87811223344" on phone number input field on login page
      And User input "P@ssw0rd" on password input field on login page
      And User click Login button

    @Positive
    Scenario: Pay voucher from DANA Deals homepage
      Given User is on DANA Deals Homepage
      When User click buy button of "voucher name" on DANA Deals homepage
      When User is on voucher cashier page of "voucher name"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

    @Test
    Scenario: Pay voucher from voucher details page
      Given User is on DANA Deals Homepage
      When User click "Bengawan Solo" on DANA Deals homepage
      When User is on voucher details page of "Bengawan Solo"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "Bengawan Solo"
      When User click pay button on cashier page
      Then User see pop up notification that pay success


    @Positive
    Scenario: Pay voucher from voucher details page using search merchant name
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      When User see all vouchers of "merchant name" are displayed
      When User click "voucher name" on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "voucher name"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

    @Negative
    Scenario: Pay voucher when balance not enough
      Given User is on DANA Deals Homepage
      When User click "Baskin Robbins" on DANA Deals homepage
      When User is on voucher details page of "Baskin Robbins"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "Baskin Robbins"
      When User click pay button on cashier page
      Then User see pop up notification that balance not enough

    @TestForHistoryFeature @PaySuccess
    Scenario: Pay voucher success
      Given User is on DANA Deals Homepage
      When User click "aasseekk pocer" on DANA Deals homepage
      When User is on voucher details page of "aasseekk pocer"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "aasseekk pocer"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

    @TestForHistoryFeature @PayFailed
    Scenario: Pay voucher from voucher details page
      Given User is on DANA Deals Homepage
      When User type a "kfc" at search field on DANA Deals Homepage
      When User click "Crazy Deals" on DANA Deals homepage
      When User is on voucher details page of "Crazy Deals"
      Then User see pop up notification that pay failed

    @TestForHistoryFeature @PayInprogress
    Scenario: Pay voucher for inprogress
      Given User is on DANA Deals Homepage
      When User click "aasseekk pocer" on DANA Deals homepage
      When User is on voucher details page of "aasseekk pocer"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "aasseekk pocer"
      When User click back button on cashier page
      When User click back button on voucher details page
      Then User is on DANA Deals Homepage

    @TestForHistoryFeature @PayRefund
    Scenario: Pay Voucher refund
      Given User is on DANA Deals Homepage
      When User type a "Telkom" at search field on DANA Deals Homepage
      When User click "Bayar Indiehome A" on DANA Deals homepage
      When User is on voucher details page of "Bayar Indiehome A"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "Bayar Indiehome A"
      When User click pay button on cashier page
      Then User see pop up notification that pay success


    @Positive
    Scenario: Pay Voucher using Search Voucher
      Given User is on DANA Deals Homepage
      When User type a "Telkom" at search field on DANA Deals Homepage
      When User click "Bayar Indiehome A" on DANA Deals homepage
      When User is on voucher details page of "Bayar Indiehome A"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "Bayar Indiehome A"
      When User click pay button on cashier page
      Then User see pop up notification that pay success
