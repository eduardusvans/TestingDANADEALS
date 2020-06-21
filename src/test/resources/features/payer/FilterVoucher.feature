@Android @FilterVoucher
  Feature: Filter Voucher

    Background:
      Given User is on DANA Deals Login page
      When User input "phoneNumber" on phone number input field on login page
      And User input "password" on password input field on login page
      And User click Login button

    @Positive
    Scenario: Filter voucher using merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      And User choose "merchant category" to filter the voucher
      Then User see all vouchers of the "merchant category" are displayed

    @Positive
    Scenario: Filter voucher using multiple merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      And User choose "merchant category" to filter the voucher
      And User choose "merchant category 2" to filter the voucher
      Then User see all vouchers of the "merchant category" and "merchant category 2" are displayed

    @Positive
    Scenario: Filter voucher using all merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      And User choose "merchant category1" to filter the voucher
      And User choose "merchant category2" to filter the voucher
      And User choose "merchant category3" to filter the voucher
      Then User see all vouchers of the all merchant category are displayed

    @Positive
    Scenario: Reset filter voucher
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      And User choose all of the "merchant category" filter feature to filter the voucher.
      And User see all vouchers of the all merchant category are displayed
      And User reset the filter by click the "merchant category" filter menu
      Then User see all vouchers are displayed

    @Negative
    Scenario: Filter voucher using invalid condition
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      And User choose "test data" value to filter the voucher
      Then User can't find any "test data" value on the filter menu

    @EdgeCase
    Scenario: Filter voucher using out of stock voucher (edge case)
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      And User choose "merchant category" to filter the voucher
      And User see all vouchers of the "merchant category" is displayed
      And User click buy on the "voucher name" that have same "merchant category"
      And User click pay voucher button on cashier page.
      And User see pop up notification that payment is success.
      And User back to DANA Deals homepage and choose "merchant category" to filter the voucher.
      Then User see the "voucher name" is not displayed