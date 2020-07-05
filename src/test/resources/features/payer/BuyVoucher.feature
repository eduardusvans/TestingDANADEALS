@Android @BuyFeature
  Feature: Buy Feature

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "phoneNumber" on phone number input field on login page
      And User input "password" on password input field on login page
      And User click Login button

    @Positive
      #BUY001
    Scenario: Buy voucher from DANA Deals homepage
      Given User is on DANA Deals Homepage
      When User click buy button of "voucher name" on DANA Deals homepage
      Then User is on voucher cashier page of "voucher name"

    @Positive
    Scenario Outline: Buy voucher from voucher details page
      Given User is on DANA Deals Homepage
      When User click <Keyword> on DANA Deals homepage
      When User is on voucher details page of <Keyword>
      When User click buy button on voucher details page
      Then User is on voucher cashier page of <Keyword>
      Examples:
        | Keyword        |
        | "Aaariko" |
        | "Aaariekout" |

    @Positive
      #BUY003
    Scenario: Buy voucher from DANA Deals homepage using search merchant name
      Given User is on DANA Deals Homepage
      When User type a "telkom" at search field on DANA Deals Homepage
      When User see all vouchers of "telkom" are displayed
      When User click buy button on voucher details page
      Then User is on voucher cashier page of "telkom"

    @Positive
      #BUY004
    Scenario: Buy voucher from voucher details page using search merchant name
      Given User is on DANA Deals Homepage
      When User type a "telkom" at search field on DANA Deals Homepage
      When User click "Aaariko" to see voucher details
      When User is on voucher details page of "Aaariko"
      When User click buy button on voucher details page
      Then User is on voucher cashier page of "Aaariko"

    @Positive
      #BUY006
    Scenario: Buy voucher from voucher details page using filter merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "telkom" to filter the voucher
      When User click "Aaariko" to see voucher details
      When User is on voucher details page of "Aaariko"
      When User click buy button on voucher details page
      Then User is on voucher cashier page of "Aaariko"


    @Positive
      #BUY008
    Scenario: Buy voucher from voucher details page using sort voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher price" to sort the voucher
      When User see all vouchers of the sort by voucher price are displayed
      When User click "Aaariko" to see voucher details
      When User is on voucher details page of "Aaariko"
      When User click buy button on voucher details page
      Then User is on voucher cashier page of "Aaariko"

    @Positive
      #BUY010
    Scenario: Buy voucher from voucher details page using sort voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      When User see all vouchers of the sort by discount are displayed
      When User click "Aaariko" to see voucher details
      When User is on voucher details page of "Aaariko"
      When User click buy button on voucher details page
      Then User is on voucher cashier page of "Aaariko"

    @Negative
      #BUY014 #BUY015
    Scenario Outline: Buy voucher with invalid condition
      Given User is on DANA Deals Homepage
      When User click <Keyword> on DANA Deals homepage
      When User is on voucher details page of <Keyword>
      When User click buy button on voucher details page
      Then User see pop up notification that voucher not available
      Examples:
        | Keyword        |
        | "Aaariekout" |
        | "Aaariekoinv" |
