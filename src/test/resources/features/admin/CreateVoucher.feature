@Android @Create
#noinspection NonAsciiCharacters
Feature: Create Voucher

  Background:
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "87800000000" on phone number input field on login page
    And User input "P@ssw0rd" on password input field on login page
    And User click Login button


  #PositiveScenario
  Scenario Outline: Create Voucher with valid input
    When User is on Home Admin page
    And User click create voucher button on Home Page
    And User is on Create Voucher Page
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
    Then User will see "Success" message in Home Page
    And User will redirect into Home Page


    Examples:
      | status   | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
  #CRV001
      | active   | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV002
      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV004
      | active   | random min  | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV005
      | inactive | random max  | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV006
      | inactive | random      | 1001       | 1        | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV007
      | active   | random      | 1001       | 100      | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV008
      | active   | random      | 1001       | 50       | 100         | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV009
      | inactive | random      | 1001       | 50       | 1000000     | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV010 1 day
      | inactive | random      | 1001       | 50       | 10000       | 2020-07-03 23:59:00 | 250   | 20000        |
  #CRV011 30 days
      | active   | random      | 1001       | 50       | 10000       | 2020-07-31 23:59:00 | 250   | 20000        |
  #CRV012
      | active   | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 1     | 20000        |
  #CRV013
      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 1000  | 20000        |
  #CRV014
      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 100          |
  #CRV015
      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 1000000      |




  #NegativeMinMaxScenario
  Scenario Outline: Create Voucher with invalid input
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
    Then User will find button is disabled on Create Voucher Page

    Examples:
      | status   | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
  #CRV017
      | active   | KF          | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 6     | 20000        |
  #CRV019
      | active   | random      | 100        | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV021
      | active   | random      | 1001       | 0        | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV023
      | active   | random      | 1001       | 50       | 99          | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV024
      | inactive | random      | 1001       | 50       | 1000001     | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV027
      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 0     | 20000        |
  #CRV028
      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 1001  | 20000        |
  #CRV029
      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 99           |
  #CRV030
      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 1000001      |


  #NegativeBlankScenario
  Scenario Outline: Create Voucher with blank input
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
    Then User will find button is disabled on Create Voucher Page

    Examples:
      | status   | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
  #CRV031
      | inactive |             | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV032
      | inactive | random      |            | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV033
      | inactive | random      | 1001       |          | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV034
      | inactive | random      | 1001       | 50       |             | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV035
      | active   | random      | 1001       | 50       | 10000       |                     | 250   | 20000        |
  #CRV036
      | active   | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 |       | 20000        |
  #CRV037
      | active   | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   |              |



#  #NegativeSpecialCharScenario
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
<<<<<<< HEAD
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
=======
#    Then User will find button is disabled on Create Voucher Page
#
#    Examples:
#      | status   | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota    | voucherPrice |
#  #CRV038
#      | active   | !*$#%       | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250      | 20000        |
#  #CRV039
#      | active   | random      | !*$#%      | 50       | 10000       | 2020-07-16 23:59:00 | 250      | 20000        |
#  #CRV040
#      | active   | random      | 1001       | !*$#%    | 10000       | 2020-07-16 23:59:00 | 250      | 20000        |
#  #CRV041
#      | inactive | random      | 1001       | 50       | !*$#%       | 2020-07-16 23:59:00 | 250      | 20000        |
#  #CRV042
#      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | !*$#%    | 20000        |
#  #CRV043
#      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250      | !*$#%        |
#  #CRV044
#      | inactive | 😅🤣🥰😎    | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250      | 20000        |
#  #CRV045
#      | inactive | random      | 😅🤣🥰😎   | 50       | 10000       | 2020-07-16 23:59:00 | 250      | 20000        |
#  #CRV046
#      | inactive | random      | 1001       | 😅🤣🥰😎 | 10000       | 2020-07-16 23:59:00 | 250      | 20000        |
#  #CRV047
#      | active   | random      | 1001       | 50       | 😅🤣🥰😎    | 2020-07-16 23:59:00 | 250      | 20000        |
#  #CRV048
#      | active   | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 😅🤣🥰😎 | 20000        |
#  #CRV049
#      | active   | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250      | 😅🤣🥰😎     |



  #NegativeCombinationScenario
  Scenario Outline: Create Voucher with abnormal input
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
    Then User will find button is disabled on Create Voucher Page

    Examples:
      | status   | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#  #CRV050
#      | active   | random      | Abcde      | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
#  #CRV051
#      | active   | random      | 1001       | Abcde    | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
#  #CRV052
#      | inactive | random      | 1001       | 50       | Abcde       | 2020-07-16 23:59:00 | 250   | 20000        |
#  #CRV053
#      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | Abcde | 20000        |
#  #CRV054
#      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | Abcde        |
#  #CRV055
#      | active   | random      | 1001       | 12,567   | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
#  #CRV056
#      | inactive | random      | 1001       | 12/34    | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
#  #CRV057
#      | inactive | random      | 1001       | 50       | 12,567      | 2020-07-16 23:59:00 | 250   | 20000        |
#  #CRV058
#      | active   | random      | 1001       | 50       | 12/34       | 2020-07-16 23:59:00 | 250   | 20000        |
#  #CRV059
#      | active   | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 3,5   | 20000        |
#  #CRV060
#      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 12/34 | 20000        |
#  #CRV061
#      | inactive | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 12,567       |
#  #CRV062
#      | active   | random      | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 12/34        |
  #CRV003
      | active   | Baskin 123  | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
  #CRV016
      | active   | 1234567     | 1001       | 50       | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |


#  @Retest
#  #ReservedReruntest
#  Scenario Outline: Create Voucher with valid input
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User is on Create Voucher Page
>>>>>>> origin/Admin/CreateVoucher
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
<<<<<<< HEAD
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
#    Then User will see "Success" message in Home Page
#    And User will redirect into Home Page
#
#
#    Examples:
#      | status | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      | active | random      | 1001       | 50       | 10000       | 2020-08-01 23:59:00 | 250   | 20000        |
#
#  @Retest
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
#    Then User will find button is disabled on Create Voucher Page
#    Examples:
#      | status | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      | active | random      | 1001       | 0        | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
#      #| active | random      | @!%$       | 0        | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
#      #| active | random      | 😅🤣🥰😎     | 0        | 10000       | 2020-07-16 23:59:00 | 250   | 20000        |
