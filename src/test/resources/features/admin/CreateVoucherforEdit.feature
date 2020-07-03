@Android @CreateVoucherforEdit
#noinspection NonAsciiCharacters
Feature: Create Voucher

  Background:
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "87800000000" on phone number input field on login page
    And User input "P@ssw0rd" on password input field on login page
    And User click Login button

  @ActiveNotExpiredBebas
  Scenario Outline: Create Voucher with ACTIVE (no change status), current quota bebas, quota tetap on NOT EXPIRED VOUCHER
    When User is on Home Admin page
    And User click create voucher button on Home Page
    And User click status dropdown for changing the status in Create Voucher Page
    And User choose "<status>" for status of voucher in Create Voucher Page
    And User input "<voucherName>" in Voucher Name text field on Create Voucher Page
    And User input "<merchantId>" in Merchant ID text field on Create Voucher Page
    And User input "<discount>" in Discount text field on Create Voucher Page
    And User input "<maxDiscount>" in Max Discount text field on Create Voucher Page
    And User choose "<expiredDate>" in Expired Date text field on Create Voucher Page
    And User input "<quota>" in Quota text field on Create Voucher Page
    And User input "<voucherPrice>" in Voucher Price text field on Create Voucher Page
    And User click create button on Create Voucher Page
    Then User will redirect into Home Page

    Examples:
      | status | voucherName                  | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
      #CRV001
      | active | Kombo Super Star             | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV002
#      | active | Super Besar SLC              | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV003
#      | active | Bucket Winger Sauce          | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV004
#      | active | Kombo Super Star Spicy       | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV005
#      | active | Kombo Super Star HCC SLC     | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV006
#      | active | Kombo Super Star Winger      | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV007
#      | active | Kombo Super Star Half Winger | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#       #CRV008
#      | active | OMJ Fish Fillet              | 1001       | 100      | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#     #CRV009
#      | active | OMJ Burger                   | 1001       | 50       | 10          | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV010
#      | active | OMJ Bento                    | 1001       | 50       | 1000000     | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV011
#      | active | Winger Party                 | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV012
#      | active | Colonel All Star             | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV013
#      | active | Crispy Strips                | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV014
#      | active | Bucket HCC                   | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |

#  @InactiveNotExpiredBebas
#  Scenario Outline: Create Voucher with INACTIVE (no change status), current quota bebas, quota tetap on NOT EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User click status dropdown for changing the status in Create Voucher Page
#    And User choose "<status>" for status of voucher in Create Voucher Page
#    And User input "<voucherName>" in Voucher Name text field on Create Voucher Page
#    And User input "<merchantId>" in Merchant ID text field on Create Voucher Page
#    And User input "<discount>" in Discount text field on Create Voucher Page
#    And User input "<maxDiscount>" in Max Discount text field on Create Voucher Page
#    And User choose "<expiredDate>" in Expired Date text field on Create Voucher Page
#    And User input "<quota>" in Quota text field on Create Voucher Page
#    And User input "<voucherPrice>" in Voucher Price text field on Create Voucher Page
#    And User click create button on Create Voucher Page
#    Then User will redirect into Home Page
#
#    Examples:
#      | status | voucherName            | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV015
#      | inactive | Colonel Rice Fest      | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4   | 10           |
#      #CRV016
#      | inactive | Crispy Strips Feast    | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4   | 1000000      |
#      #CRV017
#      | inactive | Colonel Champion       | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4   | 20000        |
#      #CRV018
#      | inactive | Colonel Champion Spicy | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4   | 20000        |
#      #CRV019
#      | inactive | Colonel Champion HCC   | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4   | 20000        |
#
#  @InactiveExpiredBebas
#  Scenario Outline: Create Voucher with INACTIVE (no change status), current quota bebas, quota tetap on EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User click status dropdown for changing the status in Create Voucher Page
#    And User choose "<status>" for status of voucher in Create Voucher Page
#    And User input "<voucherName>" in Voucher Name text field on Create Voucher Page
#    And User input "<merchantId>" in Merchant ID text field on Create Voucher Page
#    And User input "<discount>" in Discount text field on Create Voucher Page
#    And User input "<maxDiscount>" in Max Discount text field on Create Voucher Page
#    And User choose "<expiredDate>" in Expired Date text field on Create Voucher Page
#    And User input "<quota>" in Quota text field on Create Voucher Page
#    And User input "<voucherPrice>" in Voucher Price text field on Create Voucher Page
#    And User click create button on Create Voucher Page
#    Then User will redirect into Home Page
#    Examples:
#      | status   | voucherName                        | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV020
#      | inactive | Kombo Super Star Chicken           | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 4     | 10           |
#      #CRV021
#      | inactive | Kombo Super Star Chicken Mix       | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 4     | 1000000      |
#      #CRV022
#      | inactive | Kombo Super Star Spicy Chicken Mix | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 4     | 20000        |
#      #CRV023
#      | inactive | Super Mantap                       | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 4     | 20000        |
#      #CRV024
#      | inactive | Super Mantap Spicy                 | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 4     | 20000        |
#
#  @ActiveInactiveNotExpiredBebas
#  Scenario Outline: Create Voucher with ACTIVE TO INACTIVE , current quota bebas, quota tetap on NOT EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User click status dropdown for changing the status in Create Voucher Page
#    And User choose "<status>" for status of voucher in Create Voucher Page
#    And User input "<voucherName>" in Voucher Name text field on Create Voucher Page
#    And User input "<merchantId>" in Merchant ID text field on Create Voucher Page
#    And User input "<discount>" in Discount text field on Create Voucher Page
#    And User input "<maxDiscount>" in Max Discount text field on Create Voucher Page
#    And User choose "<expiredDate>" in Expired Date text field on Create Voucher Page
#    And User input "<quota>" in Quota text field on Create Voucher Page
#    And User input "<voucherPrice>" in Voucher Price text field on Create Voucher Page
#    And User click create button on Create Voucher Page
#    Then User will redirect into Home Page
#    Examples:
#      | status | voucherName                   | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV025
#      | active | Super Besar                   | 1001       | 50       | 10000       | 2021-06-30 17:59:00  | 4     | 10           |
#      #CRV026
#      | active | Super Besar Spicy             | 1001       | 50       | 10000       | 2021-06-30 17:59:00  | 4     | 1000000      |
#      #CRV027
#      | active | Super Besar Spicy Chicken     | 1001       | 50       | 10000       | 2021-06-30 17:59:00  | 4     | 20000        |
#      #CRV028
#      | active | Super Besar Spicy Chicken Mix | 1001       | 50       | 10000       | 2021-06-30 17:59:00  | 4     | 20000        |
#      #CRV029
#      | active | Signature Box                 | 1001       | 50       | 10000       | 2021-06-30 17:59:00  | 4     | 20000        |
#
#  @InactiveActiveNotExpiredKurangLima
#  Scenario Outline: Create Voucher with  INACTIVE to ACTIVE  , current quota kurang dari 5, set quota 5 (could restock) on NOT EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User click status dropdown for changing the status in Create Voucher Page
#    And User choose "<status>" for status of voucher in Create Voucher Page
#    And User input "<voucherName>" in Voucher Name text field on Create Voucher Page
#    And User input "<merchantId>" in Merchant ID text field on Create Voucher Page
#    And User input "<discount>" in Discount text field on Create Voucher Page
#    And User input "<maxDiscount>" in Max Discount text field on Create Voucher Page
#    And User choose "<expiredDate>" in Expired Date text field on Create Voucher Page
#    And User input "<quota>" in Quota text field on Create Voucher Page
#    And User input "<voucherPrice>" in Voucher Price text field on Create Voucher Page
#    And User click create button on Create Voucher Page
#    Then User will redirect into Home Page
#    Examples:
#      | status   | voucherName                  | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV030
#      | inactive | Signature Box Spicy          | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 10           |
#      #CRV031
#      | inactive | Crispy Box Spicy             | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 1000000      |
#      #CRV032
#      | inactive | Spicy Lime Chicken           | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV033
#      | inactive | Mocha Boba                   | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV034
#      | inactive | Mocha Boba                   | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV035
#      | status   | Snack Bucket                 | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV036
#      | inactive | Combo Winger Bucket          | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 10           |
#      #CRV037
#      | inactive | KFC Winger                   | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 1000000      |
#      #CRV038
#      | inactive | Fun Fries                    | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV039
#      | inactive | Chicken Strips               | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV040
#      | inactive | Chicken Balls                | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV041
#      | inactive | Personal Snack Bucket        | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV042
#      | inactive | Personal Snack Crispy Bucket | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#      #CRV043
#      | inactive | KFC Winger BBQ               | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 4     | 20000        |
#
#  @InactiveActiveExpiredKurangLima
#  Scenario Outline: Create Voucher with INACTIVE to ACTIVE, current quota kurang dari 5, set quota 5 (could restock) on EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User click status dropdown for changing the status in Create Voucher Page
#    And User choose "<status>" for status of voucher in Create Voucher Page
#    And User input "<voucherName>" in Voucher Name text field on Create Voucher Page
#    And User input "<merchantId>" in Merchant ID text field on Create Voucher Page
#    And User input "<discount>" in Discount text field on Create Voucher Page
#    And User input "<maxDiscount>" in Max Discount text field on Create Voucher Page
#    And User choose "<expiredDate>" in Expired Date text field on Create Voucher Page
#    And User input "<quota>" in Quota text field on Create Voucher Page
#    And User input "<voucherPrice>" in Voucher Price text field on Create Voucher Page
#    And User click create button on Create Voucher Page
#    Then User will redirect into Home Page
#    Examples:
#      | status   | voucherName        | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV044
#      | inactive | Rice               | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 4     | 10           |
#      #CRV045
#      | inactive | Chicken HCC        | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 4     | 1000000      |
#      #CRV046
#      | inactive | French Fries Large | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 4     | 20000        |
#      #CRV047
#      | inactive | Pom Pom            | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 4     | 20000        |
#      #CRV048
#      | inactive | Oriental Bento     | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 4     | 20000        |
#
#  @InactiveActiveNotExpiredLebihLima
#  Scenario Outline: Create Voucher with  INACTIVE to ACTIVE  , current quota lebih dari sama dengan  5,  quota tetap (could restock) on NOT EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User click status dropdown for changing the status in Create Voucher Page
#    And User choose "<status>" for status of voucher in Create Voucher Page
#    And User input "<voucherName>" in Voucher Name text field on Create Voucher Page
#    And User input "<merchantId>" in Merchant ID text field on Create Voucher Page
#    And User input "<discount>" in Discount text field on Create Voucher Page
#    And User input "<maxDiscount>" in Max Discount text field on Create Voucher Page
#    And User choose "<expiredDate>" in Expired Date text field on Create Voucher Page
#    And User input "<quota>" in Quota text field on Create Voucher Page
#    And User input "<voucherPrice>" in Voucher Price text field on Create Voucher Page
#    And User click create button on Create Voucher Page
#    Then User will redirect into Home Page
#    Examples:
#      | status   | voucherName       | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV049
#      | inactive | Oriental Burger   | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 10           |
#      #CRV050
#      | inactive | Bento Barbeque    | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 1000000      |
#      #CRV051
#      | inactive | Double Down       | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 20000        |
#      #CRV052
#      | inactive | Double Down Combo | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 20000        |
#      #CRV053
#      | inactive | Coca Cola         | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 20000        |
#      #CRV054
#      | status   | Ovaltine          | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 20000        |
#      #CRV055
#      | inactive | Fanta             | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 10           |
#      #CRV056
#      | inactive | OMJ Twisty        | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 1000000      |
#      #CRV057
#      | inactive | Duo Combo Hot     | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 20000        |
#      #CRV058
#      | inactive | Combo Jago OR     | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 20000        |
#      #CRV059
#      | inactive | Combo Jago HCC    | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 20000        |
#      #CRV060
#      | inactive | Combo Jago Mix    | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 20000        |
#      #CRV061
#      | inactive | Super Family      | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 20000        |
#      #CRV062
#      | inactive | Zuper Box OR      | 1001       | 50       | 10000       | 2021-06-30 11:59:00 | 6     | 20000        |
#
#  @InactiveActiveExpiredLebihLima
#  Scenario Outline: Create Voucher with  INACTIVE to ACTIVE  , current quota lebih dari sama dengan  5,  quota tetap (could restock) on EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User click status dropdown for changing the status in Create Voucher Page
#    And User choose "<status>" for status of voucher in Create Voucher Page
#    And User input "<voucherName>" in Voucher Name text field on Create Voucher Page
#    And User input "<merchantId>" in Merchant ID text field on Create Voucher Page
#    And User input "<discount>" in Discount text field on Create Voucher Page
#    And User input "<maxDiscount>" in Max Discount text field on Create Voucher Page
#    And User choose "<expiredDate>" in Expired Date text field on Create Voucher Page
#    And User input "<quota>" in Quota text field on Create Voucher Page
#    And User input "<voucherPrice>" in Voucher Price text field on Create Voucher Page
#    And User click create button on Create Voucher Page
#    Then User will redirect into Home Page
#    Examples:
#      | status   | voucherName            | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV063
#      | inactive | Colonel Yakiniku       | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 6     | 10           |
#      #CRV064
#      | inactive | Colonel Yakiniku Combo | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 6     | 1000000      |
#      #CRV065
#      | inactive | Kombo Zuper Krunch     | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 6     | 20000        |
#      #CRV066
#      | inactive | Kombo Winger HCC       | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 6     | 20000        |
#      #CRV067
#      | inactive | Chaki Kids Meal        | 1001       | 50       | 10000       | 2020-06-30 17:59:00 | 6     | 20000        |


#  Scenario Outline: Create Voucher with invalid input
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User click status dropdown for changing the status in Create Voucher Page
#    And User choose "<status>" for status of voucher in Create Voucher Page
#    And User input "<voucherName>" in Voucher Name text field on Create Voucher Page
#    And User input "<merchantId>" in Merchant ID text field on Create Voucher Page
#    And User input "<discount>" in Discount text field on Create Voucher Page
#    And User input "<maxDiscount>" in Max Discount text field on Create Voucher Page
#    And User choose "<expiredDate>" in Expired Date text field on Create Voucher Page
#    And User input "<quota>" in Quota text field on Create Voucher Page
#    And User input "<voucherPrice>" in Voucher Price text field on Create Voucher Page
#    And User click create button on Create Voucher Page
#    Then User will redirect into Home Page
#
#    Examples:
#      | status   | voucherName           | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV017
#      | active   | KF                    | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV018
#      | active   | Bengawan Solo Voucher | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV019
#      | active   | Baskin Robbins        | 100        | 50       | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV020
#      | active   | Baskin Robbins        | 10020      | 50       | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV021
#      | active   | Baskin Robbins        | 1001       | 0        | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV022
#      | active   | Baskin Robbins        | 1001       | 101      | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV023
#      | active   | Baskin Robbins        | 1001       | 50       | 9           | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV024
#      | inactive | Baskin Robbins        | 1001       | 50       | 1000001     | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV025 yesterday
#      | inactive | Baskin Robbins        | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV026 32 days
#      | inactive | Baskin Robbins        | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV027
#      | inactive | Baskin Robbins        | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 0     | 20000        |
#      #CRV028
#      | inactive | Baskin Robbins        | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 1001  | 20000        |
#      #CRV029
#      | inactive | Baskin Robbins        | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250   | 9            |
#      #CRV030
#      | inactive | Baskin Robbins        | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250   | 1000001      |
#
#
#  Scenario Outline: Create Voucher with blank input
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User click status dropdown for changing the status in Create Voucher Page
#    And User choose "<status>" for status of voucher in Create Voucher Page
#    And User input "<voucherName>" in Voucher Name text field on Create Voucher Page
#    And User input "<merchantId>" in Merchant ID text field on Create Voucher Page
#    And User input "<discount>" in Discount text field on Create Voucher Page
#    And User input "<maxDiscount>" in Max Discount text field on Create Voucher Page
#    And User choose "<expiredDate>" in Expired Date text field on Create Voucher Page
#    And User input "<quota>" in Quota text field on Create Voucher Page
#    And User input "<voucherPrice>" in Voucher Price text field on Create Voucher Page
#    And User click create button on Create Voucher Page
#    Then User will redirect into Home Page
#
#    Examples:
#      | status   | voucherName    | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV031
#      | inactive |                | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV032
#      | inactive | Baskin Robbins |            | 50       | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV033
#      | inactive | Baskin Robbins | 1001       |          | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV034
#      | inactive | Baskin Robbins | 1001       | 50       |             | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV035
#      | active   | Baskin Robbins | 1001       | 50       | 10000       |                     | 250   | 20000        |
#      #CRV036
#      | active   | Baskin Robbins | 1001       | 50       | 10000       | 2020-06-30 11:59:00 |       | 20000        |
#      #CRV037
#      | active   | Baskin Robbins | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250   |              |
#
#
#  Scenario Outline: Create Voucher with special characters input
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User click status dropdown for changing the status in Create Voucher Page
#    And User choose "<status>" for status of voucher in Create Voucher Page
#    And User input "<voucherName>" in Voucher Name text field on Create Voucher Page
#    And User input "<merchantId>" in Merchant ID text field on Create Voucher Page
#    And User input "<discount>" in Discount text field on Create Voucher Page
#    And User input "<maxDiscount>" in Max Discount text field on Create Voucher Page
#    And User choose "<expiredDate>" in Expired Date text field on Create Voucher Page
#    And User input "<quota>" in Quota text field on Create Voucher Page
#    And User input "<voucherPrice>" in Voucher Price text field on Create Voucher Page
#    And User click create button on Create Voucher Page
#    Then User will redirect into Home Page
#
#    Examples:
#      | status   | voucherName    | merchantId | discount | maxDiscount | expiredDate         | quota    | voucherPrice |
#      #CRV038
#      | active   | !*$#%          | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250      | 20000        |
#      #CRV039
#      | active   | Baskin Robbins | !*$#%      | 50       | 10000       | 2020-06-30 11:59:00 | 250      | 20000        |
#      #CRV040
#      | active   | Baskin Robbins | 1001       | !*$#%    | 10000       | 2020-06-30 11:59:00 | 250      | 20000        |
#      #CRV041
#      | inactive | Baskin Robbins | 1001       | 50       | !*$#%       | 2020-06-30 11:59:00 | 250      | 20000        |
#      #CRV042
#      | inactive | Baskin Robbins | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | !*$#%    | 20000        |
#      #CRV043
#      | inactive | Baskin Robbins | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250      | !*$#%        |
#      #CRV044
#      | inactive | 😅🤣🥰😎       | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250      | 20000        |
#      #CRV045
#      | inactive | Baskin Robbins | 😅🤣🥰😎   | 50       | 10000       | 2020-06-30 11:59:00 | 250      | 20000        |
#      #CRV046
#      | inactive | Baskin Robbins | 1001       | 😅🤣🥰😎 | 10000       | 2020-06-30 11:59:00 | 250      | 20000        |
#      #CRV047
#      | active   | Baskin Robbins | 1001       | 50       | 😅🤣🥰😎    | 2020-06-30 11:59:00 | 250      | 20000        |
#      #CRV048
#      | active   | Baskin Robbins | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 😅🤣🥰😎 | 20000        |
#      #CRV049
#      | active   | Baskin Robbins | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250      | 😅🤣🥰😎     |
#
#
#  Scenario Outline: Create Voucher with abnormal input
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User click status dropdown for changing the status in Create Voucher Page
#    And User choose "<status>" for status of voucher in Create Voucher Page
#    And User input "<voucherName>" in Voucher Name text field on Create Voucher Page
#    And User input "<merchantId>" in Merchant ID text field on Create Voucher Page
#    And User input "<discount>" in Discount text field on Create Voucher Page
#    And User input "<maxDiscount>" in Max Discount text field on Create Voucher Page
#    And User choose "<expiredDate>" in Expired Date text field on Create Voucher Page
#    And User input "<quota>" in Quota text field on Create Voucher Page
#    And User input "<voucherPrice>" in Voucher Price text field on Create Voucher Page
#    And User click create button on Create Voucher Page
#    Then User will redirect into Home Page
#
#    Examples:
#      | status   | voucherName    | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV050
#      | active   | Baskin Robbins | Abcde      | 50       | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV051
#      | active   | Baskin Robbins | 1001       | Abcde    | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV052
#      | inactive | Baskin Robbins | 1001       | 50       | Abcde       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV053
#      | inactive | Baskin Robbins | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | Abcde | 20000        |
#      #CRV054
#      | inactive | Baskin Robbins | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250   | Abcde        |
#      #CRV055
#      | active   | Baskin Robbins | 1001       | 12,567   | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV056
#      | inactive | Baskin Robbins | 1001       | 12/34    | 10000       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV057
#      | inactive | Baskin Robbins | 1001       | 50       | 12,567      | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV058
#      | active   | Baskin Robbins | 1001       | 50       | 12/34       | 2020-06-30 11:59:00 | 250   | 20000        |
#      #CRV059
#      | active   | Baskin Robbins | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 3,5   | 20000        |
#      #CRV060
#      | inactive | Baskin Robbins | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 12/34 | 20000        |
#      #CRV061
#      | inactive | Baskin Robbins | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250   | 12,567       |
#      #CRV062
#      | active   | Baskin Robbins | 1001       | 50       | 10000       | 2020-06-30 11:59:00 | 250   | 12/34        |