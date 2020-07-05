@Android @VoucherDetail
#noinspection NonAsciiCharacters
Feature: VoucherDetail

  Background: Login with registered admin account
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "85811440575" on phone number input field on login page
    And User input "TeamDeal123!" on password input field on login page
    And User click Login button
    Then User see message
    Then User is on Home Admin page

#Template
#   Scenario:
#    When User is on Voucher Detail page
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Increase
#    When User tap Save
#    When User tap Voucher "Name"
#    Then User see update status "ACTIVE"
#    Then User see update quota "6"

#  @Demo
#    @Functional
#    @Positive
#    @1 #VOUD002
#    Scenario:  "Update with same status ""Active"" and restock by type more quota on Not Expired Voucher"
#      When User tap Voucher "Aaaa Demo Satu"
#      When User input quota "5"
#      When User tap Save
#      Then User is on Home Admin page
#      When User tap Voucher "Aaaa Demo Satu"
#      Then User see update status "Active"
#      Then User see update quota "5"
#
#    @2  #VOUD025
#    Scenario: "Update status ""Active"" to ""Inactive"" on not Expired Voucher"
#      When User tap Voucher "Aaaa Demo Dua"
#      When User tap Status
#      When User tap Save
#      Then User is on Home Admin page
#      When User tap Voucher "Aaaa Demo Dua"
#      Then User see update status "Inactive"
#
#    @3  #VOUD030
#    Scenario:  Update status "Inactive" to "Active" on not Expired Voucher , while current quota < 5
#      When User tap Voucher "Aaaa Limo"
#      When User tap Status
#      When User tap Save
#      Then User is on Home Admin page
#      When User tap Voucher "Aaaa Limo"
#      Then User see update status "Active"
#      Then User see update quota "5"
#
#    @Negative
#    @1  #VOUD006
#    Scenario: "Update with same status ""Active"" and restock by type any invalid input quota  on Not Expired Voucher"
#      When User tap Voucher "Aaaa Demo Tiga"
#      When User input quota "  "
#      When User tap Save
#      Then User see message
#      Then User is on Voucher Detail page
#
#    @2  #VOUD021
#    Scenario:  "Update with same status ""Inactive"" and restock quota by type any input on Expired Voucher"
#      When User tap Voucher "Aaaa Demo Empat"
#      When User input quota "11"
#      When User tap Save
#      Then User see message
#      Then User is on Voucher Detail page
#      Then User see update status "Inactive"
#
#    @3  #VOUD044
#    Scenario: "Update status ""Inactive"" to ""Active"" on Expired Voucher , while current quota < 5"
#      When User tap Voucher "Aaaa Demo Lima"
#      When User tap Status
#      When User tap Save
#      Then User see message
#      Then User is on Voucher Detail page
#


#
#  @All
#  @ChangeQuotaBeforeRun
#  @1  #VOUD001
#  Scenario: "Update with same status ""Active"" and same quota on Not Expired Voucher"
#    When User tap Voucher "Aaaa"
#    Then User is on Voucher Detail page
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Aaaa"
#    Then User see update status "Active"
#    Then User see update quota "4"
#
#  @2  #VOUD002
#  Scenario:  "Update with same status ""Active"" and restock by type more quota on Not Expired Voucher"
#    When User tap Voucher "Aaab"
#    When User input quota "7"
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Aaab"
#    Then User see update status "Active"
#    Then User see update quota "7"
#
#  @3  #VOUD003
#  Scenario: "Update with same status ""Active"" and restock by tap increase button on Not Expired Voucher"
#    When User tap Voucher "Aaac"
#    When User tap Increase
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Aaac"
#    Then User see update status "Active"
#    Then User see update quota "6"
#
#
#  @4  #VOUD004
#  Scenario: :"Update with same status ""Active"" and restock by type more quota and by tap increase button on Not Expired Voucher"
#    When User tap Voucher "Aaad"
#    When User input quota "9"
#    When User tap Increase
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Aaad"
#    Then User see update status "Active"
#    Then User see update quota "10"
#
#  @InvalidInputQuota
#  Scenario Outline: "Update with same status ""Active"" and restock by type any invalid input quota  on Not Expired Voucher"
#    When User tap Voucher "Aaae"
#    When User input quota "<Quota>"
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    Examples:
#      | Quota  |
#      #VOUD005
#      | 2      |
#      #VOUD006
#      | -1     |
#      #VOUD007
#      | 1.5    |
#      #VOUD008
#      |1/2     |
#      #VOUD009
#      |1001    |
#      #VOUD010
#      |abc     |
#      #VOUD011
#      | @@     |
#      #VOUD012
#      |😅🤣🥰😎 |
#      #VOUD013
#      | 0       |
#      #VOUD014
#      |            |
#
#  @DoNothing
#  @15 #VOUD0015
#  Scenario: "Update with same status ""Inactive"" and same quota on Not Expired Voucher"
#    When User tap Voucher "Aaap"
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#  @16  #VOUD016
#  Scenario: "Update with same status ""Inactive"" and restock quota by type any input on Not Expired Voucher"
#    When User tap Voucher "Aaap"
#    When User input quota "24"
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#
#  @17  #VOUD017
#  Scenario: "Update with same status ""Inactive"" and restock by tap increase button on Not Expired Voucher"
#    When User tap Voucher "Aaap"
#    When User tap Increase
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#
#  @18  #VOUD0018 Active
#  Scenario:  "Update with same status ""Inactive"" and restock by type any input and by tap increase button on Not Expired Voucher"
#    When User tap Voucher "Aaap"
#    When User input quota "13"
#    When User tap Increase
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#
#  @19  #VOUD0019
#  Scenario: "Update with same status ""Inactive"" and restock by empty input (delete current quota) on Not Expired Voucher"
#    When User tap Voucher "Aaap"
#    When User input quota "  "
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#
#  @20  #VOUD020
#  Scenario: "Update with same status ""Inactive"" and same quota on Expired Voucher"
#    When User tap Voucher "Aaaq"
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#
#  @21  #VOUD021
#  Scenario:  "Update with same status ""Inactive"" and restock quota by type any input on Expired Voucher"
#    When User tap Voucher "Aaaq"
#    When User input quota "11"
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#
#  @22  #VOUD022
#  Scenario: "Update with same status ""Inactive"" and restock by tap increase button on Expired Voucher"
#    When User tap Voucher "Aaaq"
#    When User tap Increase
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#
#  @23  #VOUD023
#  Scenario: "Update with same status ""Inactive"" and restock by type any input and by tap increase button on Expired Voucher"
#    When User tap Voucher "Aaaq"
#    When User input quota "11"
#    When User tap Increase
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#
#  @24  #VOUD024
#  Scenario:  "Update with same status ""Inactive"" and restock by empty input (delete current quota) on Expired Voucher"
#    When User tap Voucher "Aaaq"
#    When User input quota " "
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#  @CHANGESTATUSBEFORRUNNINGTHISONE
#
#  @25  #VOUD025
#  Scenario: "Update status ""Active"" to ""Inactive"" on not Expired Voucher"
#    When User tap Voucher "Aaar"
#    When User tap Status
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Aaar"
#    Then User see update status "Inactive"
#
#  @26  #VOUD026
#  Scenario:  "Update status ""Active"" to ""Inactive"" and restock quota by type any input on not Expired Voucher"
#    When User tap Voucher "Aaas"
#    When User tap Status
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Aaas"
#    When User input quota "6"
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#  @27  #VOUD027
#  Scenario:  "Update status ""Active"" to ""Inactive"" and restock quota by tap increase button on not Expired Voucher"
#    When User tap Voucher "Aaat"
#    When User tap Status
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Aaat"
#    When User tap Increase
#    When User tap Save
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#  @28  #VOUD028
#  Scenario: "Update status ""Active"" to ""Inactive"" and restock quota by type any input and by tap increase button on not Expired Voucher"
#    When User tap Voucher "Aaau"
#    When User tap Status
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Aaau"
#    When User input quota "6"
#    When User tap Increase
#    When User tap Save
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#
#  @29  #VOUD029
#  Scenario: "Update status ""Active"" to ""Inactive"" and restock by empty input (delete current quota) on not Expired Voucher"
#    When User tap Voucher "Aaav"
#    When User tap Status
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Aaav"
#    When User input quota "  "
#    When User tap Save
#    Then User is on Voucher Detail page
#    Then User see update status "Inactive"
#
#  @ChangeVoucherwithKurangdariLimaBeforeRun
#
#  @30  #VOUD030
#  Scenario:  Update status "Inactive" to "Active" on not Expired Voucher , while current quota < 5
#    When User tap Voucher "Aaaw"
#    When User tap Status
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Aaaw"
#    Then User see update status "Active"
#    Then User see update quota "5"
#
#
#  @31  #VOUD031
#  Scenario: "Update with ""Inactive"" to ""Active"" and restock by type more quota on Not Expired Voucher , while current quota < 5"
#    When User tap Voucher "Aaax"
#    When User tap Status
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Aaax"
#    Then User see update status "Active"
#    Then User see update quota "5"
#    When User input quota "6"
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Aaax"
#    Then User see update status "Active"
#    Then User see update quota "6"
#
## MANUAL TESTING
##  @32  #VOUD032
##  Scenario: "Update status ""Inactive"" to ""Active"" and restock quota by tap increase button on not Expired Voucher, while current quota < 5"
##    When User tap Voucher "Spicy Lime Chicken"
##    When User tap Status
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "Spicy Lime Chicken"
##    Then User see update status "Active"
##    Then User see update quota "5"
##    When User tap Increase
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "Spicy Lime Chicken"
##    Then User see update status "Active"
##    Then User see update quota "6"
##
##
##  @33  #VOUD033
##  Scenario:  "Update status ""Inactive"" to ""Active"" and restock quota by type more quota and by tap increase button on not Expired Voucher, while current quota < 5"
##    When User tap Voucher "Mocha Boba"
##    When User tap Status
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "Mocha Boba"
##    Then User see update status "Active"
##    Then User see update quota "5"
##    When User input quota "6"
##    When User tap Increase
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "Mocha Boba"
##    Then User see update status "Active"
##    Then User see update quota "7"
##
##  @34  #VOUD034
##  Scenario:  "Update ""Inactive"" to ""Active"" and restock by type less quota than current quota on Not Expired Voucher, while current quota < 5"
##    When User tap Voucher "Mocha Boba Float"
##    When User tap Status
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "Mocha Boba Float"
##    Then User see update status "Active"
##    Then User see update quota "5"
##    When User input quota "2"
##    When User tap Save
##    Then User is on Voucher Detail page
##
##  @35  #VOUD035
##  Scenario: "Update ""Inactive"" to ""Active"" and restock by type negative number on Not Expired Voucher, while current quota < 5"
##    When User tap Voucher "Snack Bucket"
##    When User tap Status
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "Snack Bucket"
##    Then User see update status "Active"
##    Then User see update quota "5"
##    When User input quota "-1"
##    When User tap Save
##    Then User is on Voucher Detail page
##
##  @36  #VOUD0036
##  Scenario: "Update ""Inactive"" to ""Active"" and restock by type decimal number on Not Expired Voucher, while current quota < 5"
##    When User tap Voucher "Kombo Winger Bucket"
##    When User tap Status
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "Kombo Winger Bucket"
##    Then User see update status "Active"
##    Then User see update quota "5"
##    When User input quota "1.5"
##    When User tap Save
##    Then User is on Voucher Detail page
##
##  @37  #VOUD0037
##  Scenario: "Update ""Inactive"" to ""Active"" and restock by type fraction number on Not Expired Voucher, while current quota < 5"
##    When User tap Voucher "KFC Winger"
##    When User tap Status
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "KFC Winger"
##    Then User see update status "Active"
##    Then User see update quota "5"
##    When User input quota "1/2"
##    When User tap Save
##    Then User is on Voucher Detail page
##
##  @38  #VOUD0038
##  Scenario:  "Update ""Inactive"" to ""Active"" and restock by type number exceeds 1000 on Not Expired Voucher , while current quota < 5"
##    When User tap Voucher "Fun Fries"
##    When User tap Status
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "Fun Fries"
##    Then User see update status "Active"
##    Then User see update quota "5"
##    When User input quota "1001"
##    When User tap Save
##    Then User is on Voucher Detail page
##
##  @39  #VOUD0039
##  Scenario:  "Update ""Inactive"" to ""Active"" and restock by type alphabet on Not Expired Voucher while current quota < 5"
##    When User tap Voucher "Chicken Strips"
##    When User tap Status
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "Chicken Strips"
##    Then User see update status "Active"
##    Then User see update quota "5"
##    When User input quota "abc"
##    When User tap Save
##    Then User is on Voucher Detail page
##
##  @40  #VOUD040
##  Scenario:  Update ""Inactive"" to ""Active"" and restock by type symbol on Not Expired Voucher , while current quota < 5"
##    When User tap Voucher "Chicken Balls"
##    When User tap Status
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "Chicken Balls"
##    Then User see update status "Active"
##    Then User see update quota "5"
##    When User input quota "$"
##    When User tap Save
##    Then User is on Voucher Detail page
##
##  @41  #VOUD041
##  Scenario: "Update ""Inactive"" to ""Active"" and restock by type emoji on Not Expired Voucher , while current quota < 5"
##    When User tap Voucher "Personal Snack Bucket"
##    When User tap Status
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "Personal Snack Bucket"
##    Then User see update status "Active"
##    Then User see update quota "5"
##    When User input quota "Quota"
##    When User tap Save
##     Then User is on Voucher Detail page
##
##  @42  #VOUD042
##  Scenario: "Update ""Inactive"" to ""Active"" and restock by type""0"" on Not Expired Voucher , while current quota < 5"
##    When User tap Voucher "Personal Snack Crispy Bucket"
##    When User tap Status
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "Personal Snack Crispy Bucket"
##    Then User see update status "Active"
##    Then User see update quota "5"
##    When User input quota "0"
##    When User tap Save
##    Then User is on Voucher Detail page
##
##  @43  #VOUD043
##  Scenario:  "Update ""Inactive"" to ""Active"" and restock by empty input (delete current quota) on Not Expired Voucher , while current quota < 5"
##    When User tap Voucher "KFC Winger BBQ"
##    When User tap Status
##    When User tap Save
##    Then User is on Home Admin page
##    When User tap Voucher "KFC Winger BBQ"
##    Then User see update status "Active"
##    Then User see update quota "5"
##    When User input quota " "
##    When User tap Save
##    Then User is on Voucher Detail page
#
#  @JustUseExpiredVoucherInactiveKurangLima
#
#  @44  #VOUD044
#  Scenario: "Update status ""Inactive"" to ""Active"" on Expired Voucher , while current quota < 5"
#    When User tap Voucher "Aaay"
#    When User tap Status
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#
#  @45  #VOUD045
#  Scenario:  "Update status ""Inactive"" to ""Active"" and restock quota by type any input on Expired Voucher , while current quota < 5"
#    When User tap Voucher "Aaay"
#    When User tap Status
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    When User input quota "6"
#    When User tap Save
#    Then User is on Voucher Detail page
#
#  @46  #VOUD046
#  Scenario:  "Update status ""Inactive"" to ""Active"" and restock quota by tap increase button on Expired Voucher, while current quota < 5"
#    When User tap Voucher "Aaay"
#    When User tap Status
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    When User tap Increase
#    When User tap Save
#    Then User is on Voucher Detail page
#
#  @47  #VOUD047
#  Scenario: "Update status ""Inactive"" to ""Active"" and restock quota by type any input and by tap increase button on  Expired Voucher , while current quota < 5"
#    When User tap Voucher "Aaay"
#    When User tap Status
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    When User input quota "6"
#    When User tap Increase
#    When User tap Save
#    Then User is on Voucher Detail page
#
#  @48  #VOUD048
#  Scenario: "Update status ""Inactive"" to ""Active"" and restock by empty input (delete current quota) on Expired Voucher, while current quota < 5"
#    When User tap Voucher "Aaay"
#    When User tap Status
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    When User input quota " "
#    When User tap Save
#    Then User is on Voucher Detail page
#
#  @ChangeStatusandChangeQuotaBeforeRun
#
#  @49  #VOUD049
#  Scenario:  Update status "Inactive" to "Active" on not Expired Voucher, while current quota > = 5
#    When User tap Voucher "Abaa"
#    When User tap Status
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Abaa"
#    Then User see update status "Active"
#
#  @50  #VOUD050
#  Scenario: "Update with ""Inactive"" to ""Active"" and restock by type more quota on Not Expired Voucher , while current quota >= 5"
#    When User tap Voucher "Acaa"
#    When User tap Status
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Acaa"
#    When User input quota "8"
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Acaa"
#    Then User see update status "Active"
#    Then User see update quota "8"
#
#
#  @51  #VOUD0051
#  Scenario: "Update status ""Inactive"" to ""Active"" and restock quota by tap increase button on not Expired Voucher, while current quota > = 5"
#    When User tap Voucher "Adaa"
#    When User tap Status
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Adaa"
#    When User tap Increase
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Adaa"
#    Then User see update status "Active"
#    Then User see update quota "7"
#
#
#  @52  #VOUD0052
#  Scenario: Update status "Inactive" to "Active" and restock quota by type more quota and by tap increase button on not Expired Voucher, while current quota > = 5
#    When User tap Voucher "Aeaa"
#    When User tap Status
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Aeaa"
#    When User input quota "8"
#    When User tap Increase
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "9"
#    Then User see update status "Active"
#    Then User see update quota "9"
#
#
#  @53  @62
#  Scenario Outline: Update "Inactive" to "Active" and restock by type any invalid quota on Not Expired Voucher, while current quota > = 5
#    When User tap Voucher "Afaa"
#    When User tap Status
#    When User tap Save
#    Then User is on Home Admin page
#    When User tap Voucher "Afaa"
#    When User input quota "<quota>"
#    When User tap Save
#    Then User is on Voucher Detail page
#    Then User see update status "Active"
#    Examples:
#      | quota  |
#      #VOUD0053
#      | 2      |
#      #VOUD054
#      | -1     |
#      #VOUD055
#      | 1.5    |
#      #VOUD056
#      |1/2     |
#      #VOUD057
#      |1001    |
#      #VOUD058
#      |abc     |
#      #VOUD059
#      | @@     |
#      #VOUD060
#      |😅🤣🥰😎 |
#      #VOUD061
#      | 0       |
#      #VOUD062
#      |         |
#
#  @NothingChangeforThisVoucher
#  @63  #VOUD063
#  Scenario:  "Update status ""Inactive"" to ""Active"" on Expired Voucher , while current quota > = 5"
#    When User tap Voucher "Aaaab"
#    When User tap Status
#    When User tap Save
#    Then User see message
#
##
##  @64 @67
##  Scenario : "Update status ""Inactive"" to ""Active"" and restock quota by type any input on Expired Voucher , while current quota > = 5 || current quota > 5"
##    When User tap Voucher "Aaaab"
##    When User tap Status
##    When User tap Save
##    Then User see message
##    Then User is on Voucher Detail page
##    When User input quota "8"
##    When User tap Save
##    Then User is on Voucher Detail page
##    When User input quota "-1"
##    When User tap Save
##    Then User is on Voucher Detail page
##    When User input quota " "
##    When User tap Save
##    Then User is on Voucher Detail page
#
#  @65  #VOUD065
#  Scenario: "Update status ""Inactive"" to ""Active"" and restock quota by tap increase button on Expired Voucher, while current quota > = 5"
#    When User tap Voucher "Aaaab"
#    When User tap Status
#    When User tap Save
#    Then User see message
#    Then User is on Voucher Detail page
#    When User tap Increase
#    When User tap Save
#    Then User is on Voucher Detail page
#
#
#  @NonFunctional
#  @1 #VON001
#  Scenario: Verify element on Voucher Detail Page
#    When User tap any voucher
#    Then User is on Voucher Detail page
#    Then User see status textview
#    Then User see voucher name textview
#    Then User see merchant id textview
#    Then User see discount textview
#    Then User see max discount textview
#    Then User see voucher price textview
#    Then User see expired textview
#    Then User see quota input textfield
#    Then User see increase button
#    Then User see save button
#
  @E2EVoucherDetailFeature
  @Admin
  # ETEVOUD001
  Scenario: Admin Login - Logout
    When User tap Voucher "Aaaa Demo ETuE"
    When User input quota "8"
    When User tap Save
    Then User is on Home Admin page
    When User tap Voucher "Aaaa Demo ETuE "
    Then User see update status "Active"
    Then User see update quota "8"
    Then User tap Save
    Then User is on Home Admin page
    When User tap LogOut button on Home Admin page
    Then User is on DANA Deals Login page