@Android @FilterVoucher
  Feature: Filter Voucher

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "87811223344" on phone number input field on login page
      And User input "P@ssw0rd" on password input field on login page
      And User click Login button

    @Positive
      #FIL001 #FIL004
    Scenario Outline: Filter voucher using merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose <Keyword> to filter the voucher
      Then User see all vouchers of <Keyword1> are displayed
      Examples:
        | Keyword | Keyword1 |
        | "fnb"      | "kfc"      |
        | "online"      | "telkom"      |
    

     @Positive
       #FIL005
    Scenario: Filter voucher using multiple merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "fnb" to filter the voucher
       When User see all vouchers of "kfc" are displayed
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "online" to filter the voucher
      Then User see all vouchers of "telkom" are displayed

     @Positive
       #FIL007
    Scenario: Reset filter voucher by click reset button
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "fnb" to filter the voucher
      When User see all vouchers of "kfc" are displayed
      When User click reset button on DANA Deals homepage
      Then User see all vouchers are displayed


    @Positive
      #FIL015
    Scenario: Change filter voucher from view details
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "fnb" to filter the voucher
      When User see all vouchers of "kfc" are displayed
      When User click "A" on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click back button on voucher details page
      When User is on DANA Deals Homepage
      When User choose "online" to filter the voucher
      Then User see all vouchers of "telkom" are displayed

    @EdgeCase
      #FIL016
    Scenario: Change filter voucher of out stock voucher
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "fnb" to filter the voucher
      When User click "Aaab" on DANA Deals homepage
      When User is on voucher details page of "Aaab"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "Aaab"
      When User click pay voucher button on cashier page
      When User see pop up notification that pay success
      When User is on DANA Deals Homepage
      When User choose "fnb" to filter the voucher
      Then User see the "Aaab" is displayed

