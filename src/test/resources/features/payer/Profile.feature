@Android @Profile
#noinspection NonAsciiCharacters
Feature: Profile

  Background:
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "81290137272" on phone number input field on login page
    And User input "Van1234!" on password input field on login page
    And User click Login button
    Then User is on Home page

  @Positive
  #P001
  Scenario: Go to Profile screen
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen

  #P002
  Scenario: Go to Account Info screen
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Account Info menu
    Then User is on Account Info screen

  #P003
  Scenario: Go to Change User Data screen
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    Then User is on Change User Data screen

  #P004
  Scenario: Go to Change Password screen
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User tap Edit Password radio button on Change User Data screen
    Then User is on Change Password screen

  #P005
  Scenario: Back to Profile screen from Account Info screen
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Account Info menu
    And User is on Account Info screen
    And User tap Back button on Account Info screen
    Then User is on Profile screen

  #P006
  Scenario: Back to Profile screen from Change User Data screen
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User is on Change User Data screen
    And User tap Back button on Change User Data screen
    Then User is on Profile screen

  #P007
  Scenario: Back to Change User Data from Change Password screen
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User is on Change User Data screen
    And User tap Edit Password radio button on Change User Data screen
    And User is on Change Password screen
    And User tap Back button on Change Password screen
    Then User is on Change User Data screen


  #P008 - P015
  Scenario Outline: Change name with valid input
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User is on Change User Data screen
    And User tap Edit Full Name radio button on Change User Data screen
    And User input "<firstName>" "<lastName>" on Full Name input text field on Change User Data screen
    And User tap Update button on Change User Data screen
    Then User is on Account Info screen
    Then User tap Done button on Account Info screen
    Examples:
      | firstName  | lastName         |
    # P008
      | van        |                  |
    # P009
      | vansvansva |                  |
    # P010
      | van        | s                |
    # P011
      | van        | vansvansvansvans |
    # P012
      | vansvansva | s                |
    # P013
      | vanvansvan | arderitoo        |
    # P014
      | van's      |                  |
    # P015
      | va-ns      |                  |

  #P016 - P017
  Scenario Outline: Change e-mail with valid input
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User is on Change User Data screen
    And User tap Edit Mail Address radio button on Change User Data screen
    And User input "<e-mail>" on E-mail input text field on Change User Data screen
    And User tap Update button on Change User Data screen
    Then User is on Account Info screen
    Then User tap Done button on Account Info screen
    Examples:
      | e-mail                                                                     |
    # P016
      | a@b.id                                                                     |
    # P017
      | eduardusvansarderitoeduardusvansarderitoeduardusvansarderito1997@gmail.com |
    #reset e-mail into eduardusvansa@gmail.com
      | eduardusvansa@gmail.com                                                    |

  #P018 - P019
  Scenario Outline: Change password with valid input
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User is on Change User Data screen
    And User tap Edit Password radio button on Change User Data screen
    And User is on Change Password screen
    And User input "<oldPassword>" on old password input text field on Change Password screen
    And User input "<newPassword>" on new password input text field on Change Password screen
    And User input "<confirmNewPassword>" on confirm new password input text field on Change Password screen
    And User tap Change Password button on Change Password screen
    And User is on Home page
    And User tap profile icon
    And User is on Profile screen
    And User tap LogOut button
    And User is on DANA Deals Login page
    And User input "81290137272" on phone number input field on login page
    And User input "<Password>" on password input field on login page
    And User click Login button
    Then User is on Home page
    Examples:
      | oldPassword      | newPassword      | confirmNewPassword | Password         |
    # P018
      | Van1234!         | Vans123!         | Vans123!           | Vans123!         |
    # reset password for login purposes
      | Vans123!         | Van1234!         | Van1234!           | Van1234!         |
    # P019
      | Van1234!         | Vansvansvansva1! | Vansvansvansva1!   | Vansvansvansva1! |
    # reset password for login purposes
      | Vansvansvansva1! | Van1234!         | Van1234!           | Van1234!         |

  #P020
  Scenario: log out from app
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap LogOut button
    Then User is on DANA Deals Login page

  @Negative
  #P024 - P028, P030 - P032
  Scenario Outline: Change name with invalid input
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User is on Change User Data screen
    And User tap Edit Full Name radio button on Change User Data screen
    And User input "<firstName>" "<lastName>" on Full Name input text field on Change User Data screen
    And User tap Update button on Change User Data screen
    Then User is on Change User Data screen
    Examples:
      | firstName        | lastName |
    # P024
      | vans@            |          |
    # P025
      |                  |          |
    # P026
      | van              |          |
    # P027
      | va               |          |
    # P028
      | vansvansvansvans |          |
    # P030
      | van123           |          |
    # P031
      | van!             |          |
    # P032
      | Vans😎           |          |

  #P033 - P038
  Scenario Outline: Change e-mail with invalid input
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User is on Change User Data screen
    And User tap Edit Mail Address radio button on Change User Data screen
    And User input "<e-mail>" on E-mail input text field on Change User Data screen
    And User tap Update button on Change User Data screen
    Then User is on Change User Data screen
    Examples:
      | e-mail                                                                         |
    # P033
      | eduardusvansa@gmail.com                                                        |
    # P034
      | a c@.c                                                                         |
    # P035
      | a!c@.c                                                                         |
    # P036
      | a@b.c                                                                          |
    # P037
      | vanseduardusvansarderitoeduardusvansarderitoeduardusvansarderito1997@gmail.com |
    # P038
      | vans😎@.gmail.com                                                              |

  #P039
  Scenario: change password using old password not match with current password
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User is on Change User Data screen
    And User tap Edit Password radio button on Change User Data screen
    And User is on Change Password screen
    And User input "Vans12345!" on old password input text field on Change Password screen
    And User input "Van1234!" on new password input text field on Change Password screen
    And User input "Van1234!" on confirm new password input text field on Change Password screen
    Then User is on Change Password screen

  #P040 - P047
  Scenario Outline: Change password using new password with invalid input
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User is on Change User Data screen
    And User tap Edit Password radio button on Change User Data screen
    And User is on Change Password screen
    And User input "<oldPassword>" on old password input text field on Change Password screen
    And User input "<newPassword>" on new password input text field on Change Password screen
    Then User see warning text below newPassword
    Then User is on Change Password screen
    Examples:
      | oldPassword | newPassword           |
    # P040
      | Van1234!    | Vans                  |
    # P041
      | Van1234!    | Vansvansvansvansvans1 |
    # P042
      | Van1234!    | vans123!              |
    # P043
      | Van1234!    | VANS123!              |
    # P044
      | Van1234!    | 1234567!              |
    # P045
      | Van1234!    | VansVan!              |
    # P046
      | Van1234!    | Vans1234              |
    # P047
      | Van1234!    | Vans12!😎             |

  #P048
  Scenario: change password on confirm new password not match with new password input
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User is on Change User Data screen
    And User tap Edit Password radio button on Change User Data screen
    And User is on Change Password screen
    And User input "Van1234!" on old password input text field on Change Password screen
    And User input "Vans123!" on new password input text field on Change Password screen
    And User input "Vans321!" on confirm new password input text field on Change Password screen
    And User tap Change Password button on Change Password screen
    Then User see warning text below confirmNewPassword
    Then User is on Change Password screen

  #P049
  Scenario: change password using blank input on old password
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User is on Change User Data screen
    And User tap Edit Password radio button on Change User Data screen
    And User is on Change Password screen
    And User input "" on old password input text field on Change Password screen
    Then User see warning below oldPassword
    Then User is on Change Password screen

  #P050
  Scenario: change password using blank input on new password
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User is on Change User Data screen
    And User tap Edit Password radio button on Change User Data screen
    And User is on Change Password screen
    And User input "Van1234!" on old password input text field on Change Password screen
    And User input "" on new password input text field on Change Password screen
    Then User see warning text below newPassword
    Then User is on Change Password screen

  #P051
  Scenario: change password using blank input on confirm new password
    Given User is on Home page
    When User tap profile icon
    Then User is on Profile screen
    When User tap Change User Data menu
    And User is on Change User Data screen
    And User tap Edit Password radio button on Change User Data screen
    And User is on Change Password screen
    And User input "Van1234!" on old password input text field on Change Password screen
    And User input "Vans123!" on new password input text field on Change Password screen
    And User input "" on confirm new password input text field on Change Password screen
    Then User see warning text below confirmNewPassword
    Then User is on Change Password screen

