@Android @SearchVoucher
  Feature: Search Voucher

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "87811223344" on phone number input field on login page
      And User input "P@ssw0rd" on password input field on login page
      And User click Login button

    @Positive
    Scenario Outline: Search voucher with a character
      Given User is on DANA Deals Homepage
      When User type a <Keyword> at search field on DANA Deals Homepage
      Then User see all vouchers of <Keyword1> are displayed
      Examples:
        | Keyword | Keyword1 |
        | "k"     | "kfc"    |
        | "kf"     | "kfc"    |
        | "kfc"     | "kfc"    |
        | "t"     | "telkom"    |
        | "te"     | "telkom"    |
        | "telkom"     | "telkom"    |

    @Positive @Multiple
      Scenario: Search Voucher using multiple merchant name
      Given User is on DANA Deals Homepage
      When User type a "kfc" at search field on DANA Deals Homepage
      When User see all vouchers of "kfc" are displayed
      When User delete text on search field and type a "telkom" at search field on DANA Deals Homepage
      Then User see all vouchers of "telkom" are displayed

    @Positive @ResetSearch
      Scenario: Check to refresh search voucher with delete text on search field
      Given User is on DANA Deals Homepage
      When User type a "kfc" at search field on DANA Deals Homepage
      When User see all vouchers of "kfc" are displayed
      When User delete text on search field
      Then User see all vouchers are displayed

    @Positive @ResetSearch
    Scenario: Check to refresh search voucher with delete text on search field
      Given User is on DANA Deals Homepage
      When User type a "kfc" at search field on DANA Deals Homepage
      When User see all vouchers of "kfc" are displayed
      When User click reset button on DANA Deals homepage
      Then User see all vouchers are displayed

    @Negative
    Scenario Outline: Search voucher with invalid condition
      Given User is on DANA Deals Homepage
      When User type a <Keyword> at search field on DANA Deals Homepage
      Then User can't find any voucher and see error message
      Examples:
        | Keyword |
        | "c"     |
        | "50%"     |
        | "kfc50%"     |
        | "Rp5.000"     |
        | "kfcRp5.000"     |
        | "AAAA Deals"     |
        | "kfcAAAA Deals"     |
        | "1000"     |
        | "kfc1000"     |
        | "10"     |
        | "10kfc"     |

    @Positive @Searchfromviewdetails
    Scenario: Search voucher after from view details page
      Given User is on DANA Deals Homepage
      When User type a "kfc" at search field on DANA Deals Homepage
      When User click "Mace Wholex" on DANA Deals homepage
      When User is on voucher details page of "Mace Wholex"
      When User click back on voucher details page
      When User is on DANA Deals Homepage
      When User delete text on search field and type a "telkom" at search field on DANA Deals Homepage
      Then User see all vouchers of "telkom" are displayed

      @EdgeCase
    Scenario: Search voucher using out of stock voucher
      Given User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      When User see all vouchers of "merchant name" are displayed
      When User click "voucher name" on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click buy button on voucher details page
      When User is on voucher details page of "voucher name"
      When User click pay voucher button on cashier page
      When User see pop up notification that payment is success
      When User is on DANA Deals Homepage
      When User type a "character" at search field on DANA Deals Homepage
      Then User see the "voucher name" is displayed