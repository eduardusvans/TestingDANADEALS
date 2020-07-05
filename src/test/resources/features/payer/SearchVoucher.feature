@Android @SearchVoucher
  #noinspection NonAsciiCharacters
  Feature: Search Voucher

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "87811223344" on phone number input field on login page
      And User input "P@ssw0rd" on password input field on login page
      And User click Login button

    @Positive
      #SCH001, #SCH002, #SCH003, #SCH004, #SCH008
    Scenario Outline: Search voucher with a character
      Given User is on DANA Deals Homepage
      When User type a <Keyword> at search field on DANA Deals Homepage
      Then User see all vouchers of <Keyword1> are displayed
      Examples:
        | Keyword | Keyword1 |
        | "k"     | "kfc"    |
        | "kf"     | "kfc"    |
        | "kfc"     | "kfc"    |
        | "KFC"     | "kfc"    |



    @Positive @InvalidVoucher
      #SCH006, #SCH007
    Scenario Outline: Search Voucher using multiple merchant name
      Given User is on DANA Deals Homepage
      When User type a <Keyword> at search field on DANA Deals Homepage
      Then User see the <Keyword1> is displayed
      Examples:
        | Keyword | Keyword1            |
        | "kfc"   | "ABC Merdeka Senin" |
        | "kfc"   | "Aaac" |

    @Positive @Multiple
      #SCH005
      Scenario: Search Voucher using multiple merchant name
      Given User is on DANA Deals Homepage
      When User type a "kfc" at search field on DANA Deals Homepage
      When User see all vouchers of "kfc" are displayed
      When User delete text on search field and type a "telkom" at search field on DANA Deals Homepage
      Then User see all vouchers of "telkom" are displayed

    @Positive @ResetSearch
      #SCH009
      Scenario: Check to refresh search voucher with delete text on search field
      Given User is on DANA Deals Homepage
      When User type a "kfc" at search field on DANA Deals Homepage
      When User see all vouchers of "kfc" are displayed
      When User delete text on search field
      Then User see all vouchers are displayed

    @Positive @ResetSearch
      #SCH010
    Scenario: Check to refresh search voucher with delete text on search field
      Given User is on DANA Deals Homepage
      When User type a "telkom" at search field on DANA Deals Homepage
      When User see all vouchers of "telkom" are displayed
      When User click reset button on DANA Deals homepage
      Then User see all vouchers are displayed

    @Negative
      #SCH012 - #SCH026
    Scenario Outline: Search voucher with invalid condition
      Given User is on DANA Deals Homepage
      When User type a <Keyword> at search field on DANA Deals Homepage
      Then User can't find any voucher and see error message
      Examples:
        | Keyword |
        #SCH012
        | "c"     |
        #SCH013
        | "50%"     |
        #SCH014
        | "kfc50%"     |
        #SCH015
        | "Rp5.000"     |
        #SCH016
        | "kfcRp5.000"     |
        #SCH017
        | "AAAA Deals"     |
        #SCH018
        | "kfcAAAA Deals"     |
        #SCH019
        | "1000"     |
        #SCH020
        | "kfc1000"     |
        #SCH021
        | "10"     |
        #SCH022
        | "10kfc"     |
        #SCH023
        | "@"     |
        #SCH024
        | "kfc@"     |
        #SCH025
        | "😎"     |
        #SCH026
        | "kfc😎"     |


    @Positive @Searchfromviewdetails
      #SCH028
    Scenario: Search voucher after from view details page
      Given User is on DANA Deals Homepage
      When User type a "kfc" at search field on DANA Deals Homepage
      When User click "Aaad" on DANA Deals homepage
      When User is on voucher details page of "Aaad"
      When User click back on voucher details page
      When User is on DANA Deals Homepage
      When User delete text on search field and type a "telkom" at search field on DANA Deals Homepage
      Then User see all vouchers of "telkom" are displayed

      @EdgeCase
        #SCH027
    Scenario: Search voucher using out of stock voucher
      Given User is on DANA Deals Homepage
      When User type a "telkom" at search field on DANA Deals Homepage
      When User click "Aaariko" on DANA Deals homepage
      When User is on voucher details page of "Aaariko"
      When User click buy button on voucher details page
      When User is on voucher details page of "Aaariko"
      When User click pay voucher button on cashier page
      When User see pop up notification that pay success
      When User is on DANA Deals Homepage
      When User type a "telkom" at search field on DANA Deals Homepage
      Then User see the "Aaariko" is displayed