@Android @SortVoucher
  Feature: Sort Voucher

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "87811223344" on phone number input field on login page
      And User input "P@ssw0rd" on password input field on login page
      And User click Login button

    @sort
    Scenario: Sort voucher by discount
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      Then User see all vouchers of the sort by discount are displayed

    Scenario: Sort voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher price" to sort the voucher
      Then User see all vouchers of the sort by voucher price are displayed

    @Positive
    Scenario: Reset sort voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher price" to sort the voucher
      When User see all vouchers of the sort by voucher price are displayed
      When User click reset button on DANA Deals homepage
      Then User see all vouchers are displayed

    @Positive
    Scenario: Sort voucher with out of stock voucher or invalid voucher
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      Then User see the "voucher name" is displayed

    @Positive
    Scenario: change sort option to sort voucher
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      When User see all vouchers of the sort by discount are displayed
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher price" to sort the voucher
      Then User see all vouchers of the sort by voucher price are displayed

    @EdgeCase
    Scenario: Change sort voucher from view details
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher price" to sort the voucher
      When User see all vouchers of the sort by voucher price are displayed
      When User click "voucher name" on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click back button on voucher details page
      When User is on DANA Deals Homepage
      When User choose "discount" to sort the voucher
      Then User see all vouchers of the sort by discount are displayed

    @EdgeCase
    Scenario: Sort voucher with out of stock voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "saving rate" to sort the voucher
      When User see all vouchers of the sort by discount are displayed
      When User click "voucher name" on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "voucher name"
      When User click pay voucher button on cashier page
      When User see pop up notification that payment is success
      When User is on DANA Deals Homepage
      When User choose "saving rate" to sort the voucher
      Then User see the "voucher name" is displayed