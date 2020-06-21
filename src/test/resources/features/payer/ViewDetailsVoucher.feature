@Android @ViewDetailsVoucher
  Feature: View Details Voucher

    Background:
      Given User is on DANA Deals Login page
      When User input "phoneNumber" on phone number input field on login page
      And User input "password" on password input field on login page
      And User click Login button

    @Positive
      Scenario: View details voucher
      Given User is on DANA Deals Homepage
      When User click "voucher name" voucher on DANA Deals homepage
      Then User see the voucher details of "voucher name" is displayed

    @Positive
      Scenario: View T&C on view details voucher
      Given User is on DANA Deals Homepage
      When User click "voucher name" voucher on DANA Deals homepage
      And User see the voucher details of "voucher name" is displayed
      Then User see the T&C of voucher is displayed

    @Positive
      Scenario: View instruction on view details voucher
      Given User is on DANA Deals Homepage
      When User click "voucher name" voucher on DANA Deals homepage
      And User see the voucher details of "voucher name" is displayed
      And User click instruction tab on voucher view details page
      Then User see the instruction of voucher details is displayed

    @Positive
      Scenario: Check tab button on view details voucher
      Given User is on DANA Deals Homepage
      When User click "voucher name" voucher on DANA Deals homepage
      And User see the voucher details of "voucher name" is displayed
      And User click instruction tab on voucher view details page
      And User see the instruction of voucher details is displayed
      And User click T&C tab on voucher view details page
      Then User see the T&C of voucher is displayed

    @Positive
      Scenario: View details voucher using search merchant name
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      And User see all vouchers of "merchant name" that contains the "character" are displayed
      And User choose "voucher name" to see voucher details
      Then User see the voucher details of "voucher name" is displayed

    @Positive
      Scenario: View details voucher using filter merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      And User choose "merchant category" to filter the voucher
      Then User see all vouchers of the "merchant category" are displayed

    @Positive
      Scenario: View details voucher using sort feature
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      And User click sort voucher by voucher value
      And User see all vouchers are sorted from high to low of saving rate value start from "voucher value"
      And User choose "voucher name" to see voucher details
      Then User see the voucher details of "voucher name" is displayed

      @Negative
      Scenario: View details voucher using search merchant name and filter merchant category
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      And User click filter dropdown menu button on DANA Deals homepage
      And User choose "merchant category" to filter the voucher
      Then User see that all vouchers based on search and filter feature can't be displayed

    @Negative
      Scenario: View details voucher using search merchant name and sort by saving rate
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      And User click sort dropdown menu button on DANA Deals homepage
      And User click sort voucher by saving rate
      Then User see that all vouchers based on search and sort feature can't be displayed

    @Negative
      Scenario: View details voucher using search merchant name and sort by voucher value
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      And User click sort dropdown menu button on DANA Deals homepage
      And User click sort voucher by voucher value
      Then User see that all vouchers based on search and sort feature can't be displayed

    @Negative
      Scenario: View details voucher using filter merchant category and sort by saving rate
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      And User choose "merchant category" to filter the voucher
      And User click sort dropdown menu button on DANA Deals homepage
      And User click sort voucher by saving rate
      Then User see that all vouchers are displayed only based on sort voucher by saving rate

    @Negative
    Scenario: View details voucher using filter merchant category and sort by voucher value
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      And User choose "merchant category" to filter the voucher
      And User click sort dropdown menu button on DANA Deals homepage
      And User click sort voucher by voucher value
      Then User see that all vouchers are displayed only based on sort voucher by saving rate

    @Negative
      Scenario: View details voucher using search merchant name, filter merchant category and sort by saving rate
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      And User click filter dropdown menu button on DANA Deals homepage
      And User choose "merchant category" to filter the voucher
      And User click sort dropdown menu button on DANA Deals homepage
      And User click sort voucher by saving rate
      Then User see that all vouchers are displayed only based on sort voucher by saving rate

    @Negative
      Scenario: View details voucher using search merchant name, filter merchant category and sort by voucher value
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      And User click filter dropdown menu button on DANA Deals homepage
      And User choose "merchant category" to filter the voucher
      And User click sort dropdown menu button on DANA Deals homepage
      And User click sort voucher by voucher value
      Then User see that all vouchers are displayed only based on sort voucher by voucher value