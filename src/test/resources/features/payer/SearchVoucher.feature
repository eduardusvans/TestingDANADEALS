@Android @SearchVoucher
  Feature: Search Voucher

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "87811223344" on phone number input field on login page
      And User input "P@ssw0rd" on password input field on login page
      And User click Login button

    @Positive @Ready
    Scenario Outline: Search voucher with a character
      Given User is on DANA Deals Homepage
      When User type a <Keyword> at search field on DANA Deals Homepage
      Then User see all vouchers of <Keyword1> are displayed
      Examples:
        | Keyword | Keyword1 |
        | "k"     | "kfc"    |
        | "kf"     | "kfc"    |
        | "kfc"     | "kfc"    |

    @Negative @Ready
    Scenario Outline: Search voucher with invalid condition
      Given User is on DANA Deals Homepage
      When User type a <Keyword> at search field on DANA Deals Homepage
      Then User can't find any voucher and see error message
      Examples:
        | Keyword |
        | "50%"     |
        | "50%kfc"     |
        | "Rp5.000"     |
        | "Rp5.000kfc"     |
        | "AAAA Dealskfc"     |
        | "AAAA Dealskfc"     |
        | "1000"     |
        | "1000kfc"     |



      @EdgeCase
    Scenario: Search voucher using out of stock voucher
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      When User see all vouchers of "merchant name" are displayed
      When User click "voucher name" voucher on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click buy button on voucher details page
      When User is on voucher details page of "voucher name"
      When User click pay voucher button on cashier page
      When User see pop up notification that payment is success
      When User back to DANA Deals homepage and type a "character" at search field
      Then User see the "voucher name" is not displayed