@Android @VoucherDetail
Feature: VoucherDetail


  Background: Login with registered admin account
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "87800000000" on phone number input field on login page
    And User input "P@ssw0rd" on password input field on login page
    And User click Login button
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

  @Functional
  @1  #VOUD001
  Scenario: "Update with same status ""Active"" and same quota on Not Expired Voucher"
    When User is on Voucher Detail page
    When User tap Voucher "Name"
    When User tap Save
    Then User is on Home Admin page

  @2  #VOUD002
  Scenario:  "Update with same status ""Active"" and restock by type more quota on Not Expired Voucher"#    When User is on Voucher Detail page
#    When User tap Voucher "Name"
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Home Admin page

  @3  #VOUD003
  Scenario: "Update with same status ""Active"" and restock by tap increase button on Not Expired Voucher"
#    When User tap Voucher "Name"
#    When User tap Increase
#    When User tap Save
     Then User is on Home Admin page

  @4  #VOUD004
  Scenario: :"Update with same status ""Active"" and restock by type more quota and by tap increase button on Not Expired Voucher"
#    When User tap Voucher "Name"
#    When User input quota "Quota"
#    When User tap Increase
#    When User tap Save
     Then User is on Home Admin page

  @InvalidInputQuota
  Scenario Outline: "Update with same status ""Active"" and restock by type any invalid input quota  on Not Expired Voucher"
    When User tap Voucher "Name"
    When User input quota "<Quota>"
    When User tap Save
    Then User is on Voucher Detail page
    Examples:
      | Quota  |
      #VOUD005
      | 2      |
      #VOUD006
      | -1     |
      #VOUD007
      | 1.5    |
      #VOUD008
      |1/2     |
      #VOUD009
      |1001    |
      #VOUD010
      |abc     |
      #VOUD011
      | @@     |
      #VOUD012
      |😅🤣🥰😎 |
      #VOUD013
      | 0       |
      #VOUD014
      |         |


  @15 #VOUD0015
  Scenario: "Update with same status ""Inactive"" and same quota on Not Expired Voucher"
#    When User tap Voucher "Name"
#    When User tap Save
     Then User is on Voucher Detail page

  @16  #VOUD016
  Scenario: "Update with same status ""Inactive"" and restock quota by type any input on Not Expired Voucher"
#    When User tap Voucher "Name"
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @17  #VOUD017
  Scenario: "Update with same status ""Inactive"" and restock by tap increase button on Not Expired Voucher"
#    When User tap Voucher "Name"
#    When User tap Increase
#    When User tap Save
     Then User is on Voucher Detail page

  @18  #VOUD0018
  Scenario:  "Update with same status ""Inactive"" and restock by type any input and by tap increase button on Not Expired Voucher"
#    When User tap Voucher "Name"
#    When User input quota "Quota"
#    When User tap Increase
#    When User tap Save
     Then User is on Voucher Detail page

  @19  #VOUD0019
  Scenario: "Update with same status ""Inactive"" and restock by empty input (delete current quota) on Not Expired Voucher"
#    When User tap Voucher "Name"
#    When User input quota "Quota"
#    When User tap Save
    Then User is on Voucher Detail page

  @20  #VOUD020
  Scenario: "Update with same status ""Inactive"" and same quota on Expired Voucher"
#    When User tap Voucher "Name"
#    When User tap Save
     Then User is on Voucher Detail page

  @21  #VOUD021
  Scenario:  "Update with same status ""Inactive"" and restock quota by type any input on Expired Voucher"
#    When User tap Voucher "Name"
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @22  #VOUD022
  Scenario: "Update with same status ""Inactive"" and restock by tap increase button on  Expired Voucher"
#    When User tap Voucher "Name"
#    When User tap Increase
#    When User tap Save
     Then User is on Voucher Detail page

  @23  #VOUD023
  Scenario: "Update with same status ""Inactive"" and restock by type any input and by tap increase button on Expired Voucher"
#    When User tap Voucher "Name"
#    When User input quota "Quota"
#    When User tap Increase
#    When User tap Save
     Then User is on Voucher Detail page

  @24  #VOUD024
  Scenario:  "Update with same status ""Inactive"" and restock by empty input (delete current quota) on Expired Voucher"
#    When User tap Voucher "Name"
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @25  #VOUD025
  Scenario: "Update status ""Active"" to ""Inactive"" on not Expired Voucher"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
     Then User is on Home Admin page

  @26  #VOUD026
  Scenario:  "Update status ""Active"" to ""Inactive"" and restock quota by type any input on not Expired Voucher"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @27  #VOUD027
  Scenario:  "Update status ""Active"" to ""Inactive"" and restock quota by tap increase button on not Expired Voucher"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User tap Increase
#    When User tap Save
     Then User is on Voucher Detail page

  @28  #VOUD028
  Scenario: "Update status ""Active"" to ""Inactive"" and restock quota by type any input and by tap increase button on not Expired Voucher"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Increase
#    When User tap Save
     Then User is on Voucher Detail page

  @29  #VOUD029
  Scenario: "Update status ""Active"" to ""Inactive"" and restock by empty input (delete current quota) on not Expired Voucher"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @30  #VOUD030
  Scenario:  Update status "Inactive" to "Active" on not Expired Voucher , while current quota < 5
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
     Then User is on Home Admin page

  @31  #VOUD031
  Scenario: "Update with ""Inactive"" to ""Active"" and restock by type more quota on Not Expired Voucher , while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Home Admin page

  @32  #VOUD032
  Scenario: "Update status ""Inactive"" to ""Active"" and restock quota by tap increase button on not Expired Voucher, while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User tap Increase
#    When User tap Save
     Then User is on Home Admin page

  @34  #VOUD034
  Scenario:  "Update status ""Inactive"" to ""Active"" and restock quota by type more quota and by tap increase button on not Expired Voucher, while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Increase
#    When User tap Save
     Then User is on Home Admin page

  @35  #VOUD035
  Scenario:  "Update ""Inactive"" to ""Active"" and restock by type less quota than current quota on Not Expired Voucher, while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @36  #VOUD036
  Scenario: "Update ""Inactive"" to ""Active"" and restock by type negative number on Not Expired Voucher, while current quota < 5"#    When User tap Voucher "Name"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @37  #VOUD0037
  Scenario: "Update ""Inactive"" to ""Active"" and restock by type decimal number on Not Expired Voucher, while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @38  #VOUD0038
  Scenario: "Update ""Inactive"" to ""Active"" and restock by type fraction number on Not Expired Voucher, while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @39  #VOUD0039
  Scenario:  "Update ""Inactive"" to ""Active"" and restock by type number exceeds 1000 on Not Expired Voucher , while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @40  #VOUD0040
  Scenario:  "Update ""Inactive"" to ""Active"" and restock by type alphabet on Not Expired Voucher while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @41  #VOUD041
  Scenario:  "Update ""Inactive"" to ""Active"" and restock by type symbol on Not Expired Voucher , while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @42  #VOUD042
  Scenario: "Update ""Inactive"" to ""Active"" and restock by type emoji on Not Expired Voucher , while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @43  #VOUD043
  Scenario: "Update ""Inactive"" to ""Active"" and restock by type""0"" on Not Expired Voucher , while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @44  #VOUD044
  Scenario:  "Update ""Inactive"" to ""Active"" and restock by empty input (delete current quota) on Not Expired Voucher , while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @45  #VOUD045
  Scenario: "Update status ""Inactive"" to ""Active"" on Expired Voucher , while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
     Then User is on Home Admin page

  @46  #VOUD046
  Scenario:  "Update status ""Inactive"" to ""Active"" and restock quota by type any input on Expired Voucher , while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save


  @47  #VOUD047
  Scenario:  "Update status ""Inactive"" to ""Active"" and restock quota by tap increase button on Expired Voucher, while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User tap Increase
#    When User tap Save
     Then User is on Voucher Detail page

  @48  #VOUD048
  Scenario: "Update status ""Inactive"" to ""Active"" and restock quota by type any input and by tap increase button on  Expired Voucher , while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Increase
#    When User tap Save
     Then User is on Voucher Detail page

  @49  #VOUD049
  Scenario: "Update status ""Inactive"" to ""Active"" and restock by empty input (delete current quota) on Expired Voucher, while current quota < 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @50  #VOUD050
  Scenario:  Update status "Inactive" to "Active" on not Expired Voucher, while current quota > = 5
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
     Then User is on Home Admin page

  @51  #VOUD051
  Scenario: "Update with ""Inactive"" to ""Active"" and restock by type more quota on Not Expired Voucher , while current quota >= 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Home Admin page

  @52  #VOUD0052
  Scenario: "Update status ""Inactive"" to ""Active"" and restock quota by tap increase button on not Expired Voucher, while current quota > = 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User tap Increase
#    When User tap Save
     Then User is on Home Admin page

  @53  #VOUD0053
  Scenario: Update status "Inactive" to "Active" and restock quota by type more quota and by tap increase button on not Expired Voucher, while current quota > = 5
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Increase
#    When User tap Save
     Then User is on Home Admin page

  @54  #VOUD054
  Scenario: Update "Inactive" to "Active" and restock by type less quota than current quota on Not Expired Voucher, while current quota > = 5
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @55  #VOUD055
  Scenario: Update "Inactive" to "Active" and restock by type negative number on Not Expired Voucher, while current quota > = 5
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @56  #VOUD056
  Scenario: "Update ""Inactive"" to ""Active""and restock by type decimal number on Not Expired Voucher , while current quota > = 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @57  #VOUD057
  Scenario:  "Update ""Inactive"" to ""Active"" and restock by type fraction number on Not Expired Voucher, while current quota > = 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @58  #VOUD058
  Scenario: "Update ""Inactive"" to ""Active"" and restock by type number exceeds 1000 on Not Expired Voucher, while current quota > = 5"#    When User tap Voucher "Name"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @59  #VOUD059
  Scenario:  "Update ""Inactive"" to ""Active"" and restock by type alphabet on Not Expired Voucher, while current quota > = 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @60  #VOUD060
  Scenario:  "Update ""Inactive"" to ""Active"" and restock by type symbol on Not Expired Voucher, while current quota > = 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @61  #VOUD061
  Scenario:  "Update ""Inactive"" to ""Active"" and restock by type emoji on Not Expired Voucher , while current quota > = 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page


  @62  #VOUD0062
  Scenario: "Update ""Inactive"" to ""Active"" and restock by type ""0"" on Not Expired Voucher , while current quota > = 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page


  @63  #VOUD063
  Scenario: "Update ""Inactive"" to ""Active"" and restock by empty input (delete current quota) on Not Expired Voucher, while current quota > = 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @64  #VOUD064
  Scenario:  "Update status ""Inactive"" to ""Active"" on Expired Voucher , while current quota > = 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
     Then User is on Voucher Detail page

  @65  #VOUD065
  Scenario: "Update status ""Inactive"" to ""Active"" and restock quota by type any input on Expired Voucher , while current quota > = 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @66  #VOUD066
  Scenario: "Update status ""Inactive"" to ""Active"" and restock quota by tap increase button on Expired Voucher, while current quota > = 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page


  @67  #VOUD067
  Scenario: "Update status ""Inactive"" to ""Active"" and restock quota by type any input and by tap increase button on  Expired Voucher, while current quota > = 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page

  @68  #VOUD068
  Scenario: "Update status ""Inactive"" to ""Active"" and restock by empty input (delete current quota) on Expired Voucher, while current quota > = 5"
#    When User tap Voucher "Name"
#    When User tap Status
#    When User tap Save
#    When User input quota "Quota"
#    When User tap Save
     Then User is on Voucher Detail page


  @NonFunctional
  @1 #VON001
  Scenario: Verify element of Voucher Detail Page
    When User tap any voucher
    Then User is on Voucher Detail page
    Then User see status textview
    Then User see voucher name textview
    Then User see merchant id textview
    Then User see discount textview
    Then User see max discount textview
    Then User see voucher price textview
    Then User see expired textview
    Then User see quota input textfield
    Then User see increase button
    Then User see save button