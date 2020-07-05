@Android @CreateEdit
#noinspection NonAsciiCharacters
Feature: Create Voucher

  Background:
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "85811440575" on phone number input field on login page
    And User input "TeamDeal123!" on password input field on login page
    And User click Login button
    Then User see message
    Then User is on Home Admin page

  @InactiveActiveNotExpiredKurangLima
  Scenario Outline: Create Voucher with  INACTIVE to ACTIVE  , current quota kurang dari 5, set quota 5 (could restock) on NOT EXPIRED VOUCHER
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
      | active | Aaaa Demo ETuE   | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      | active | Aaaa Demo Satu   | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      | active | Aaaa Demo Dua   | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      | active | Aaaa Demo Tiga   | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      | inactive | Aaaa Demo Empat   | 1001       | 50       | 10000       | 2020-07-05 16:10:00 | 4     | 20000        |
#      | inactive | Aaaa Demo Lima   | 1001       | 50       | 10000       | 2020-07-05 16:10:00 | 4     | 20000        |

#      | inactive | Aaaa Lima   | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      | inactive | Aaaa Limo   | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      | inactive | Aaaa Lime   | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      | inactive | Aaaa Limi   | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      | inactive | Aaaa Limu   | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      | inactive | Aaaa Limao  | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |

#  @ActiveNotExpiredBebas
#  Scenario Outline: Create Voucher with ACTIVE (no change status), current quota bebas, quota tetap on NOT EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User is on Create Voucher Page
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
#    Examples:
#      | status | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV001
#      | active | Aaaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      #CRV002
#      | active | Aaab        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      #CRV003
#      | active | Aaac        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      #CRV004
#      | active | Aaad        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      #CRV005
#      | active | Aaae        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
      #CRV006
#      | active | Aaaf        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
      #CRV007
#      | active | Aaag        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
       #CRV008
#      | active | Aaah        | 1001       | 60      | 20000       | 2020-07-30 11:59:00 | 4     | 20000        |
#     #CRV009
#      | active | Aaai        | 1001       | 50       | 20000         | 2020-07-30 11:59:00 | 4     | 20000        |
      #CRV010
#      | active | Aaaj        | 1001       | 50       | 1000000     | 2020-07-30 11:59:00 | 4     | 20000        |
#      #CRV011
#      | active | Aaak        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      #CRV012
#      | active | Aaam        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
#      #CRV013
#      | active | Aaan        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |
      #CRV014
#      | active | Aaao        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000        |

#  @InactiveNotExpiredBebas
#  Scenario Outline: Create Voucher with INACTIVE (no change status), current quota bebas, quota tetap on NOT EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User is on Create Voucher Page
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
#    Examples:
#      | status   | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV015 CRV019
#      | inactive | Aaap      | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4   | 20000           |
#
#  @InactiveExpiredBebas
#  Scenario Outline: Create Voucher with INACTIVE (no change status), current quota bebas, quota tetap on EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User is on Create Voucher Page
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
#    Examples:
#      | status   | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV020 CRV024
#      | inactive | Aaaq        | 1001       | 50       | 10000       | 2020-07-05 01:59:00 | 4     | 20000           |

#
#  @ActiveInactiveNotExpiredBebas
#  Scenario Outline: Create Voucher with ACTIVE TO INACTIVE , current quota bebas, quota tetap on NOT EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User is on Create Voucher Page
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
#    Examples:
#      | status | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV025
#      | active | Aaar        | 1001       | 50       | 10000       | 2020-07-30 17:59:00 | 4     | 20000           |
#      #CRV026
#      | active | Aaas        | 1001       | 50       | 10000       | 2020-07-30 17:59:00 | 4     | 1000000      |
#      #CRV027
#      | active | Aaat        | 1001       | 50       | 10000       | 2020-07-30 17:59:00 | 4     | 20000        |
#      #CRV028
#      | active | Aaau        | 1001       | 50       | 10000       | 2020-07-30 17:59:00 | 4     | 20000        |
#      #CRV029
#      | active | Aaav        | 1001       | 50       | 10000       | 2020-07-30 17:59:00 | 4     | 20000        |


# CRV030
#      | inactive | Aaaw        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000           |
#      #CRV031
#      | inactive | Aaax        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 1000000      |
#     #CADANGAN
#      | inactive | Aaawww      | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 20000           |
#      #CADANGAN
#      | inactive | Aaaxxx      | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 4     | 1000000      |


#  @InactiveActiveExpiredKurangLima
#  Scenario Outline: Create Voucher with INACTIVE to ACTIVE, current quota kurang dari 5, set quota 5 (could restock) on EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User is on Create Voucher Page
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
#    Examples:
#      | status   | voucherName        | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV044 CRV048
#      | inactive | Aaay               | 1001       | 50       | 10000       | 2020-07-05 01:59:00 | 4     | 20000           |
#

#  @InactiveActiveNotExpiredLebihLima
#  Scenario Outline: Create Voucher with  INACTIVE to ACTIVE , current quota lebih dari sama dengan  5,  quota tetap (could restock) on NOT EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User is on Create Voucher Page
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
#    Examples:
#      | status   | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV049
#      | inactive | Abaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 10000           |
#      #CRV050
#      | inactive | Acaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 1000000      |
#      #CRV051
#      | inactive | Adaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 20000        |
#      #CRV052
#      | inactive | Aeaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 20000        |
#      #CRV053
#      | inactive | Afaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 20000        |
      #CRV054
#      | inactive   | Agaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 20000        |
      #CRV055
#      | inactive | Ahaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 1000           |
#      #CRV056
#      | inactive | Aiaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 1000000      |
#      #CRV057
#      | inactive | Ajaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 20000        |
#      #CRV058
#      | inactive | Akaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 20000        |
#      #CRV059
#      | inactive | Amaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 20000        |
#      #CRV060
#      | inactive | Anaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 20000        |
#      #CRV061
#      | inactive | Aoaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 20000        |
#      #CRV062
#      | inactive | Apaa        | 1001       | 50       | 10000       | 2020-07-30 11:59:00 | 6     | 20000        |
#
#  @InactiveActiveExpiredLebihLima
#  Scenario Outline: Create Voucher with  INACTIVE to ACTIVE  , current quota lebih dari sama dengan  5,  quota tetap (could restock) on EXPIRED VOUCHER
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User is on Create Voucher Page
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
#    Examples:
#      | status   | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #CRV063
#      | inactive | Aaaab       | 1001       | 50       | 10000       | 2020-07-05 01:59:00 | 6     | 10000           |
#      #CRV064
#      | inactive | Aaaac       | 1001       | 50       | 10000       | 2020-07-05 01:59:00 | 6     | 20000      |
#      #CRV065
#      | inactive | Aaaad       | 1001       | 50       | 10000       | 2020-07-05 01:59:00 | 6     | 20000        |
#      #CRV066
#      | inactive | Aaaae       | 1001       | 50       | 10000       | 2020-07-05 01:59:00 | 6     | 20000        |
#      #CRV067
#      | inactive | Aaaaf       | 1001       | 50       | 10000       | 2020-07-05 01:59:00 | 6     | 20000        |
#
#  @E2EVoucherDetail
#  Scenario Outline: Create Voucher E2E
#    When User is on Home Admin page
#    And User click create voucher button on Home Page
#    And User is on Create Voucher Page
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
#    Examples:
#      | status | voucherName | merchantId | discount | maxDiscount | expiredDate         | quota | voucherPrice |
#      #E2E
#      | active | Abuu       | 1001       | 50       | 10000       | 2020-07-30 17:59:00 | 6     | 10000           |
