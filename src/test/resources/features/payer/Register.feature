@Android @Register
#noinspection NonAsciiCharacters
Feature: Register

  Background:
    Given User is on DANA Deals Login page
    Given User tap the Register here link on Login page

  @Positive
  Scenario Outline: Register with valid input
    Given User is on Register page
    When User input "<phoneNumber>" on Phone Number input text field on Register page
    When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
    When User input "<email>" on E-Mail input text field on Register page
    When User input "<password>" on Password input text field on Register page
    When User input "<confirmPassword>" on Confirm Password input text field on Register page
    When User tap the Create Account button on Register page
    Then User see the success message on Login page
    Then User is on DANA Deals Login page
    Examples:
      | phoneNumber | firstName  | lastName         | email      | password         | confirmPassword  |
      # REG001
      | Random      | abc        |                  | Random     | TestingREG1!     | TestingREG1!     |
      # REG002
      | Random      | abcdefghij |                  | Random     | TestingREG1!     | TestingREG1!     |
      # REG003
      | Random      | abc        | defghijklmnopqrs | Random     | TestingREG1!     | TestingREG1!     |
      # REG004
      | Random      | abcdefghij | klmnopqrs        | Random     | TestingREG1!     | TestingREG1!     |
      # REG005
      | Random      | abc        |                  | Random Min | TestingREG1!     | TestingREG1!     |
      # REG006
      | Random      | abc        |                  | Random Max | TestingREG1!     | TestingREG1!     |
      # REG007
      | Random Min  | abc        |                  | Random     | TestingREG1!     | TestingREG1!     |
      # REG008
      | Random Max  | abc        |                  | Random     | TestingREG1!     | TestingREG1!     |
      # REG009
      | Random      | abc        |                  | Random     | Abcdef1!         | Abcdef1!         |
      # REG010
      | Random      | abc        |                  | Random     | Abcdefghijklmn1! | Abcdefghijklmn1! |

  @Negative
  Scenario Outline: Register with one of the input is invalid
    Given User is on Register page
    When User input "<phoneNumber>" on Phone Number input text field on Register page
    When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
    When User input "<email>" on E-Mail input text field on Register page
    When User input "<password>" on Password input text field on Register page
    When User input "<confirmPassword>" on Confirm Password input text field on Register page
    When User tap the Create Account button on Register page
    Then User see the warning message on Login page
    Then User is still on Register page
    Examples:
      | phoneNumber | firstName   | lastName | email                        | password         | confirmPassword  |
      # REG011
      | Random      | ab          | c        | Random                       | TestingREG1!     | TestingREG1!     |
      # REG012
      | Random      | abcdefghijk |          | Random                       | TestingREG1!     | TestingREG1!     |
      # REG013
      | Random      | ab@         |          | Random                       | TestingREG1!     | TestingREG1!     |
      # REG014
      | Random      | ab😎        |          | Random                       | TestingREG1!     | TestingREG1!     |
      # REG016
      | Random      | abc         |          | testinglogin3@gmail.com      | TestingREG1!     | TestingREG1!     |
      # REG017
      | Random      | abc         |          | testingregister3             | TestingREG1!     | TestingREG1!     |
      # REG018
      | Random Min  | abc         |          | testingregister3!@gmail.com  | TestingREG1!     | TestingREG1!     |
      # REG019
      | Random Max  | abc         |          | testingregister3😎@gmail.com | TestingREG1!     | TestingREG1!     |
      # REG020
      | Random      | abc         |          | a@g.c                        | TestingREG1!     | TestingREG1!     |
      # REG022
      | 87722074250 | abc         |          | Random                       | TestingREG1!     | TestingREG1!     |
      # REG023
      | 6885559737  | abc         |          | Random                       | TestingREG1!     | TestingREG1!     |
      # REG024
      | 89695966    | abc         |          | Random                       | TestingREG1!     | TestingREG1!     |
      # REG029
      | Random      | abc         |          | Random                       | Abcde1!          | Abcde1!          |
      # REG031
      | Random      | abc         |          | Random                       | abcdefghijklmn1! | abcdefghijklmn1! |
      # REG032
      | Random      | abc         |          | Random                       | ABCDEFGHIJKLMN1! | ABCDEFGHIJKLMN1! |
      # REG033
      | Random      | abc         |          | Random                       | 1234567!         | 1234567!         |
      # REG034
      | Random      | abc         |          | Random                       | Abcdefghijklmn!  | Abcdefghijklmn!  |
      # REG035
      | Random      | abc         |          | Random                       | Abcdefghijklmn1  | Abcdefghijklmn1  |
      # REG036
      | Random      | abc         |          | Random                       | Abcdef1!         | Abcdefghijklmn1! |

