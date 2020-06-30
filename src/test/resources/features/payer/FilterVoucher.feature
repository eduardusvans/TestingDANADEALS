@Android @FilterVoucher
  Feature: Filter Voucher

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "87811223344" on phone number input field on login page
      And User input "P@ssw0rd" on password input field on login page
      And User click Login button

    @filter
    Scenario Outline: Filter voucher using merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose <Keyword> to filter the voucher
      Then User see all vouchers of the <arg0> are displayed
      Examples:
        | Keyword | arg0  |
        | "fnb"   | "kfc" |
        | "online"   | "telkom" |

     @filter2
    Scenario: Filter voucher using multiple merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "fnb" to filter the voucher
       When User see all vouchers of "kfc" are displayed
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "online" to filter the voucher
      Then User see all vouchers of the "telkom" are displayed

     @Positive
    Scenario: Reset filter voucher by click reset button
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose all of the "merchant category" filter feature to filter the voucher.
      When User see all vouchers of the all "merchant category" are displayed
      When User click reset button on DANA Deals homepage
      Then User see all vouchers are displayed


    @EdgeCase
    Scenario: Filter voucher using out of stock voucher
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "merchant category" value to filter the voucher
      When User see all vouchers of the "merchant category" are displayed
      When User click "voucher name" voucher on DANA Deals homepage
      When user is on voucher details page of "voucher name"
      When User click buy button on voucher details page
      When User see is on cashier page of "voucher name"
      When User click pay voucher button on cashier page
      When User see pop up notification that payment is success
      When User back to DANA Deals homepage and choose "merchant category" to filter the voucher
      Then User see the "voucher name" is not displayed