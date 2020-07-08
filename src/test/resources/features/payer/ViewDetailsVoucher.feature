@Android @ViewDetailsVoucher
  Feature: View Details Voucher

    Background:
      Given User is on Landing page
      When User click Login to Account button
      And User is on DANA Deals Login page
      And User input "87811223344" on phone number input field on login page
      And User input "P@ssw0rd" on password input field on login page
      And User click Login button

    @Positive
      #VIEW001 #VIEW018 #VIEW019
    Scenario Outline: View details voucher
      Given User is on DANA Deals Homepage
      When User click <Keyword> on DANA Deals homepage
      Then User is on voucher details page of <Keyword>
      Examples:
        | Keyword         |
        #VIEW001
        | "A new Deals" |
        #VIEW018
        | "A new Deals" |
        #VIEW019
        | "A new Deals" |

    @Positive
      #VIEW002
    Scenario: View T&C on view details voucher
      Given User is on DANA Deals Homepage
      When User click "A new Deals" on DANA Deals homepage
      When User is on voucher details page of "A new Deals"
      When User click T&C tab on voucher view details page
      Then User see the T&C of voucher is displayed

    @Positive
      #VIEW003
    Scenario: View instruction on view details voucher
      Given User is on DANA Deals Homepage
      When User click "A new Deals" on DANA Deals homepage
      When User is on voucher details page of "A new Deals"
      When User click instruction tab on voucher view details page
      Then User see the instruction of voucher details is displayed

    @Positive
      #VIEW004
    Scenario: Check tab button on view details voucher
      Given User is on DANA Deals Homepage
      When User click "A new Deals" on DANA Deals homepage
      When User is on voucher details page of "A new Deals"
      When User click instruction tab on voucher view details page
      When User see the instruction of voucher details is displayed
      When User click T&C tab on voucher view details page
      Then User see the T&C of voucher is displayed

    @Positive
      #VIEW005
    Scenario: View details voucher using search merchant name
      Given User is on DANA Deals Homepage
      When User type a "k" at search field on DANA Deals Homepage
      When User click "AAAAVans" on DANA Deals homepage
      Then User is on voucher details page of "AAAAVans"

    @Positive
      #VIEW006
    Scenario Outline: View details voucher using filter merchant category
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose <Keyword> to filter the voucher
      When User click <Keyword1> on DANA Deals homepage
      Then User is on voucher details page of <Keyword1>
      Examples:
        | Keyword             | Keyword1       |
        | "fnb" | "AAAAVans" |

    @Positive
      #VIEW007
    Scenario Outline: View details voucher using sort
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose <Keyword> to sort the voucher
      When User see all vouchers of the sort by discount are displayed
      When User click <Keyword1> on DANA Deals homepage
      Then User is on voucher details page of <Keyword1>
      Examples:
        | Keyword    | Keyword1       |
        | "discount" | "Clear Medium Combo" |

    @Positive
      #VIEW007
    Scenario Outline: View details voucher using sort
      Given User is on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose <Keyword> to sort the voucher
      When User see all vouchers of the sort by voucher price are displayed
      When User click <Keyword1> on DANA Deals homepage
      Then User is on voucher details page of <Keyword1>
      Examples:
        | Keyword    | Keyword1       |
        | "voucher price" | "Aaax" |

    @Positive
      #VIEW009
    Scenario: View details voucher using search merchant name and filter merchant category
      Given User is on DANA Deals Homepage
      When User type a "kfc" at search field on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "online" to filter the voucher
      When User click "Clear Low Combo" on DANA Deals homepage
      Then User is on voucher details page of "Clear Low Combo"

    @Positive
      #VIEW010 #VIEW011
    Scenario: View details voucher using search merchant name and sort
      Given User is on DANA Deals Homepage
      When User type a "kfc" at search field on DANA Deals Homepage
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      When User see all vouchers of the sort by discount are displayed
      When User click "Clear Medium Combo" on DANA Deals homepage
      Then User is on voucher details page of "Clear Medium Combo"

    @Positive
      #VIEW012
    Scenario: View details voucher using filter merchant category and sort
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "online" to filter the voucher
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher price" to sort the voucher
      When User see all vouchers of the sort by voucher price are displayed
      When User click "Aaax" on DANA Deals homepage
      Then User is on voucher details page of "Aaax"

    @Positive
      #VIEW013
    Scenario: View details voucher using filter merchant category and sort
      Given User is on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "fnb" to filter the voucher
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher price" to sort the voucher
      When User see all vouchers of the sort by voucher price are displayed
      When User click "Aaax" on DANA Deals homepage
      Then User is on voucher details page of "Aaax"

    @Positive
      #VIEW014
    Scenario: View details voucher using search merchant name, filter merchant category and sort
      Given User is on DANA Deals Homepage
      When User type a "kfc" at search field on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "online" to filter the voucher
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "voucher price" to sort the voucher
      When User see all vouchers of the sort by voucher price are displayed
      When User click "Aaax" on DANA Deals homepage
      Then User is on voucher details page of "Aaax"

    @Positive
      #VIEW015
    Scenario: View details voucher using search merchant name, filter merchant category and sort
      Given User is on DANA Deals Homepage
      When User type a "kfc" at search field on DANA Deals Homepage
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "online" to filter the voucher
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      When User see all vouchers of the sort by discount are displayed
      When User click "Clear Medium Combo" on DANA Deals homepage
      Then User is on voucher details page of "Clear Medium Combo"


    @Positive
      #VIEW020
    Scenario: Check back button on voucher view details page
      Given User is on DANA Deals Homepage
      When User click "A new Deals" on DANA Deals homepage
      When User is on voucher details page of "A new Deals"
      When User click back button on voucher details page
      Then User is on DANA Deals Homepage
