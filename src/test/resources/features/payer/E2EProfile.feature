@Android @E2EProfile
Feature: E2EProfile

    #ETEP001
  Scenario Outline: Register - Login - View Account Info - Logout
    Given User is on Landing page
    When User tap the Create Account button on Landing page
    When User is on Register page
    When User input "<phoneNumber>" on Phone Number input text field on Register page
    When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
    When User input "<email>" on E-Mail input text field on Register page
    When User input "<password>" on Password input text field on Register page
    When User input "<confirmPassword>" on Confirm Password input text field on Register page
    When User tap the Create Account button on Register page
    When User see the success message on Login page
    When User is on DANA Deals Login page
    When User input "<phoneNumberLogin>" on phone number input field on login page
    When User input "<passwordLogin>" on password input field on login page
    When User click Login button
    When User is on Home page
    When User tap profile icon
    When User is on Profile screen
    When User tap Account Info menu
    When User is on Account Info screen
    When User tap Done button on Account Info screen
    When User is on Home page
    When User tap profile icon
    Then User tap LogOut button
    Then User is on DANA Deals Login page
    Examples:
      | phoneNumber | firstName | lastName | email              | password     | confirmPassword | phoneNumberLogin | passwordLogin |
      | 81290135050 | Vans      | View     | vans5050@gmail.com | VansView123! | VansView123!    | 81290135050      | VansView123!  |

    #ETEP002
  Scenario Outline: Register - Login - Change Name - Logout
    Given User is on Landing page
    When User tap the Create Account button on Landing page
    When User is on Register page
    When User input "<phoneNumber>" on Phone Number input text field on Register page
    When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
    When User input "<email>" on E-Mail input text field on Register page
    When User input "<password>" on Password input text field on Register page
    When User input "<confirmPassword>" on Confirm Password input text field on Register page
    When User tap the Create Account button on Register page
    When User see the success message on Login page
    When User is on DANA Deals Login page
    When User input "<phoneNumberLogin>" on phone number input field on login page
    When User input "<passwordLogin>" on password input field on login page
    When User click Login button
    When User is on Home page
    When User tap profile icon
    When User is on Profile screen
    When User tap Change User Data menu
    When User is on Change User Data screen
    When User tap Edit Full Name radio button on Change User Data screen
    When User input "<changeFirstName>" "<changeLastName>" on Full Name input text field on Change User Data screen
    When User tap Update button on Change User Data screen
    When User is on Account Info screen
    When User tap Done button on Account Info screen
    When User is on Home page
    When User tap profile icon
    Then User tap LogOut button
    Then User is on DANA Deals Login page
    Examples:
      | phoneNumber | firstName | lastName | email              | password     | confirmPassword | phoneNumberLogin | passwordLogin | changeFirstName | changeLastName |
      | 81290135151 | Vans      | Name     | vans5151@gmail.com | VansName123! | VansName123!    | 81290135151      | VansName123!  | Van             | s              |

    #ETEP003
  Scenario Outline: Register - Login - Change E-mail - Logout
    Given User is on Landing page
    When User tap the Create Account button on Landing page
    When User is on Register page
    When User input "<phoneNumber>" on Phone Number input text field on Register page
    When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
    When User input "<email>" on E-Mail input text field on Register page
    When User input "<password>" on Password input text field on Register page
    When User input "<confirmPassword>" on Confirm Password input text field on Register page
    When User tap the Create Account button on Register page
    When User see the success message on Login page
    When User is on DANA Deals Login page
    When User input "<phoneNumberLogin>" on phone number input field on login page
    When User input "<passwordLogin>" on password input field on login page
    When User click Login button
    When User is on Home page
    When User tap profile icon
    When User is on Profile screen
    When User tap Change User Data menu
    When User is on Change User Data screen
    When User tap Edit Mail Address radio button on Change User Data screen
    When User input "<e-mail>" on E-mail input text field on Change User Data screen
    When User tap Update button on Change User Data screen
    When User is on Account Info screen
    When User tap Done button on Account Info screen
    When User is on Home page
    When User tap profile icon
    Then User tap LogOut button
    Then User is on DANA Deals Login page
    Examples:
      | phoneNumber | firstName | lastName | email              | password  | confirmPassword | phoneNumberLogin | passwordLogin | e-mail                    |
      | 81290135252 | Vans      | Email    | vans5252@gmail.com | Vans1234! | Vans1234!       | 81290135252      | Vans1234!     | vanschangeemail@gmail.com |

    #ETEP004
  Scenario Outline: Register - Login - Change Password - Logout - Login - Logout
    Given User is on Landing page
    When User tap the Create Account button on Landing page
    When User is on Register page
    When User input "<phoneNumber>" on Phone Number input text field on Register page
    When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
    When User input "<email>" on E-Mail input text field on Register page
    When User input "<password>" on Password input text field on Register page
    When User input "<confirmPassword>" on Confirm Password input text field on Register page
    When User tap the Create Account button on Register page
    When User see the success message on Login page
    When User is on DANA Deals Login page
    When User input "<phoneNumberLogin>" on phone number input field on login page
    When User input "<passwordLogin>" on password input field on login page
    When User click Login button
    When User is on Home page
    When User tap profile icon
    When User is on Profile screen
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
    And User input "<phoneNumber2>" on phone number input field on login page
    And User input "<passwordAfterChange>" on password input field on login page
    And User click Login button
    Then User is on Home page
    Examples:
      | phoneNumber | firstName | lastName | email              | password | confirmPassword | phoneNumberLogin | passwordLogin | oldPassword | newPassword | confirmNewPassword | phoneNumber2 | passwordAfterChange |
      | 81290135353 | Vans      | Password | vans5353@gmail.com | Vans123! | Vans123!        | 81290135353      | Vans123!      | Vans123!    | Van1234!    | Van1234!           | 81290137069  | Van1234!            |

    #ETEP005
  Scenario Outline: Register - Login - Logout
    Given User is on Landing page
    When User tap the Create Account button on Landing page
    When User is on Register page
    When User input "<phoneNumber>" on Phone Number input text field on Register page
    When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
    When User input "<email>" on E-Mail input text field on Register page
    When User input "<password>" on Password input text field on Register page
    When User input "<confirmPassword>" on Confirm Password input text field on Register page
    When User tap the Create Account button on Register page
    When User see the success message on Login page
    When User is on DANA Deals Login page
    When User input "<phoneNumberLogin>" on phone number input field on login page
    When User input "<passwordLogin>" on password input field on login page
    When User click Login button
    When User is on Home page
    When User tap profile icon
    When User is on Profile screen
    When User tap LogOut button
    Then User is on DANA Deals Login page
    Examples:
      | phoneNumber | firstName | lastName | email              | password | confirmPassword | phoneNumberLogin | passwordLogin |
      | 81290135454 | Vans      | Logout   | vans5454@gmail.com | Van1234! | Van1234!        | 81290135454      | Van1234!      |

