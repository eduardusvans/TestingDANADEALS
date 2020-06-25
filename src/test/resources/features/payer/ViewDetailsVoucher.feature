@Android @ViewDetailsVoucher
  Feature: View Details Voucher

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "phoneNumber" on phone number input field on login page
      And User input "password" on password input field on login page
      And User click Login button

    @Positive
    Scenario: View details voucher
      Given User is on DANA Deals Homepage
      When User click "voucher name" voucher on DANA Deals homepage
      Then User is on voucher details page of "voucher name"

    @Positive
    Scenario: View T&C on view details voucher
      Given User is on DANA Deals Homepage
      When User click "voucher name" voucher on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      Then User see the T&C of voucher is displayed

    @Positive
    Scenario: View instruction on view details voucher
      Given User is on DANA Deals Homepage
      When User click "voucher name" voucher on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click instruction tab on voucher view details page
      Then User see the instruction of voucher details is displayed

    @Positive
    Scenario: Check tab button on view details voucher
      Given User is on DANA Deals Homepage
      When User click "voucher name" voucher on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click instruction tab on voucher view details page
      When User see the instruction of voucher details is displayed
      When User click T&C tab on voucher view details page
      Then User see the T&C of voucher is displayed

    @Positive
    Scenario: View details voucher using search merchant name
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      When User see all vouchers of "merchant name" that contains the "character" are displayed
      When User click "voucher name" voucher on DANA Deals homepage
      Then User is on voucher details page of "voucher name"

    @Positive
    Scenario: View details voucher using filter merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "merchant category" to filter the voucher
      When User see all vouchers of the "merchant category" are displayed
      When User click "voucher name" voucher on DANA Deals homepage
      Then User is on voucher details page of "voucher name"

    @Positive
    Scenario: View details voucher using sort by saving rate
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "saving rate" to sort the voucher
      When User see all vouchers of the "sort by saving rate" are displayed
      When User click "voucher name" voucher on DANA Deals homepage
      Then User is on voucher details page of "voucher name"

    @Positive
    Scenario: View details voucher using search merchant name and filter merchant category
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "merchant category" to filter the voucher
      When User see that all vouchers only based on "merchant category" can be displayed
      When User click "voucher name" voucher on DANA Deals homepage
      Then User is on voucher details page of "voucher name"

    @Positive
    Scenario: View details voucher using search merchant name and sort
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "saving rate" to sort the voucher
      When User see that all vouchers only based on "sort saving rate" can be displayed
      When User click "voucher name" voucher on DANA Deals homepage
      Then User is on voucher details page of "voucher name"

    @Positive
    Scenario: View details voucher using filter merchant category and sort
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "merchant category" to filter the voucher
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "saving rate" to sort the voucher
      When User see that all vouchers only based on "sort saving rate" can be displayed
      When User click "voucher name" voucher on DANA Deals homepage
      Then User is on voucher details page of "voucher name"

    @Positive
    Scenario: View details voucher using search merchant name, filter merchant category and sort
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "merchant category" to filter the voucher
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher value" to sort the voucher
      When User see that all vouchers only based on "sort voucher value" can be displayed
      When User click "voucher name" voucher on DANA Deals homepage
      Then User is on voucher details page of "voucher name"


    @Positive
    Scenario: Check back button on voucher view details page
      Given User is on DANA Deals Homepage
      When User click "voucher name" voucher on DANA Deals homepage
      When User see the voucher details of "voucher name" is displayed
      When User click back button on voucher details page
      Then User back to DANA Deals homepage
