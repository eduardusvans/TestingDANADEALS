@Android @SortVoucher
  Feature: Sort Voucher

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "87811223344" on phone number input field on login page
      And User input "P@ssw0rd" on password input field on login page
      And User click Login button

    @Positive
      #SORT001
    Scenario: Sort voucher by discount
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      Then User see all vouchers of the sort by discount are displayed

    @Positive
      #SORT003
    Scenario: Sort voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher price" to sort the voucher
      Then User see all vouchers of the sort by voucher price are displayed

    @Positive
      #SORT007
    Scenario: Reset sort voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher price" to sort the voucher
      When User see all vouchers of the sort by voucher price are displayed
      When User click reset button on DANA Deals homepage
      Then User see all vouchers are displayed being reseted

    @Positive
      #SORT019 #SORT020 #SORT021 #SORT022
    Scenario Outline: Sort voucher with out of stock voucher or invalid voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose <Keyword> to sort the voucher
      Then User see the <Keyword1> is displayed
      Examples:
        | Keyword    | Keyword1       |
        #SORT019
        | "discount" | "AAAAVans" |
        #SORT020
        | "discount" | "AAAAVans" |
        #SORT021
        | "voucher price" | "AAAAVans" |
        #SORT022
        | "voucher price" | "AAAAVans" |


    @Positive
      #SORT003
    Scenario: change sort option to sort voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      When User see all vouchers of the sort by discount are displayed
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher price" to sort the voucher
      Then User see all vouchers of the sort by voucher price are displayed

    @Positive
      #SORT018
    Scenario: Change sort voucher from view details
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher price" to sort the voucher
      When User see all vouchers of the sort by voucher price are displayed
      When User click "Aaariko" on DANA Deals homepage
      When User is on voucher details page of "Aaariko"
      When User click back button on voucher details page
      When User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      Then User see all vouchers of the sort by discount are displayed

    @Negative
      #SORT010, #SORT011, #SORT012, #SORT013, #SORT014, #SORT015
    Scenario Outline: Sort with invalid option
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose <Keyword> to sort the voucher
      Then User the option is not available
      Examples:
        | Keyword |
        | "merchant name"   |
        | "merchant category"   |
        | "max discount"   |
        | "quota voucher"   |
        | "expired date"   |
        | "voucher name"   |

    @EdgeCase
      #SORT016 #SORT017
    Scenario: Sort voucher with out of stock voucher
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      When User see all vouchers of the sort by discount are displayed
      When User click "Aaariko" on DANA Deals homepage
      When User is on voucher details page of "Aaariko"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "Aaariko"
      When User click pay voucher button on cashier page
      When User see pop up notification that pay success
      When User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      Then User see the "Aaariko" is displayed