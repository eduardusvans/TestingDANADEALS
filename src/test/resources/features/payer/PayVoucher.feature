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
      #PAY002
    Scenario: Pay voucher from voucher details page
      Given User is on DANA Deals Homepage
      When User click "AAAAVans" on DANA Deals homepage
      When User is on voucher details page of "AAAAVans"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "AAAAVans"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

    @Positive
      #PAY003
    Scenario: Pay voucher from voucher details page using search merchant name
      Given User is on DANA Deals Homepage
      When User type a "telkom" at search field on DANA Deals Homepage
      When User click "Aaariko" on DANA Deals homepage
      When User is on voucher details page of "Aaariko"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "Almsb"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

    @Positive
      #PAY004
    Scenario: Pay voucher from voucher details page using filter merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "online" to filter the voucher
      When User click "Aaariko" to see voucher details
      When User is on voucher details page of "Aaariko"
      When User click buy button on voucher details page
      Then User is on voucher cashier page of "Aaariko"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

    @Positive
      #PAY005
    Scenario: Buy voucher from voucher details page using sort voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher price" to sort the voucher
      When User see all vouchers of the sort by voucher price are displayed
      When User click "Aaariko" to see voucher details
      When User is on voucher details page of "Aaariko"
      When User click buy button on voucher details page
      Then User is on voucher cashier page of "Aaariko"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

    @Positive
      #PAY006
    Scenario: Buy voucher from voucher details page using sort voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      When User see all vouchers of the sort by discount are displayed
      When User click "Aaariko" to see voucher details
      When User is on voucher details page of "Aaariko"
      When User click buy button on voucher details page
      Then User is on voucher cashier page of "Aaariko"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

    @Negative
      #PAY013
    Scenario: Pay voucher when balance not enough
      Given User is on DANA Deals Homepage
      When User click "Baskin Robbins" on DANA Deals homepage
      When User is on voucher details page of "Baskin Robbins"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "Baskin Robbins"
      When User click pay button on cashier page
      Then User see pop up notification that balance not enough

    @Positive
      #PAY006
    Scenario: Pay voucher from voucher details page using sort voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      When User see all vouchers of the sort by discount are displayed
      When User click "Aaariko" to see voucher details
      When User is on voucher details page of "Aaariko"
      When User click buy button on voucher details page
      Then User is on voucher cashier page of "Aaariko"
      When User click pay button on cashier page
      Then User see pop up notification that pay success

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
