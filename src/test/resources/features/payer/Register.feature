@Android @Register
#noinspection NonAsciiCharacters
Feature: Register

  Background:
    Given User is on Landing page
    Given User tap the Create Account button on Landing page

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
      | phoneNumber | firstName  | lastName         | email             | password         | confirmPassword  |
      # REG001
      | Random      | abc        |                  | Random            | TestingREG1!     | TestingREG1!     |
      # REG002
      | Random      | abcdefghij |                  | Random            | TestingREG1!     | TestingREG1!     |
      # REG003
      | Random      | abc        | defghijklmnopqrs | Random            | TestingREG1!     | TestingREG1!     |
      # REG004
      | Random      | abcdefghij | klmnopqrs        | Random            | TestingREG1!     | TestingREG1!     |
      # REG005
      | Random      | abc        |                  | Random Min        | TestingREG1!     | TestingREG1!     |
      # REG006
      | Random      | abc        |                  | Random Max        | TestingREG1!     | TestingREG1!     |
      # REG007
      | Random      | abc        |                  | Random Alphabetic | TestingREG1!     | TestingREG1!     |
      # REG008
      | Random      | abc        |                  | Random Numeric    | TestingREG1!     | TestingREG1!     |
      # REG009
      | Random Min  | abc        |                  | Random            | TestingREG1!     | TestingREG1!     |
      # REG010
      | Random Max  | abc        |                  | Random            | TestingREG1!     | TestingREG1!     |
      # REG011
      | Random      | abc        |                  | Random            | Abcdef1!         | Abcdef1!         |
      # REG012
      | Random      | abc        |                  | Random            | Abcdefghijklmn1! | Abcdefghijklmn1! |

  @Negative @1-1
  Scenario Outline: Register with one of the input is invalid
    Given User is on Register page
    When User input "<phoneNumber>" on Phone Number input text field on Register page
    When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
    When User input "<email>" on E-Mail input text field on Register page
    When User input "<password>" on Password input text field on Register page
    When User input "<confirmPassword>" on Confirm Password input text field on Register page
    When User cannot tap the Create Account button on Register page
    Then User is still on Register page
    Examples:
      | phoneNumber | firstName   | lastName | email                         | password         | confirmPassword  |
      # REG013
      | Random      |             |          | Random                        | TestingREG1!     | TestingREG1!     |
      # REG014
      | Random      | ab          | c        | Random                        | TestingREG1!     | TestingREG1!     |
      # REG015
      | Random      | abcdefghijk |          | Random                        | TestingREG1!     | TestingREG1!     |
      # REG016
      | Random      | ab@         |          | Random                        | TestingREG1!     | TestingREG1!     |
      # REG017
      | Random      | ab😎        |          | Random                        | TestingREG1!     | TestingREG1!     |
      #
      # REG019
      | Random      | abc         |          |                               | TestingREG1!     | TestingREG1!     |
      #
      # REG021
      | Random      | abc         |          | testingregister3              | TestingREG1!     | TestingREG1!     |
      # REG022
      | Random      | abc         |          | @gmail.com                    | TestingREG1!     | TestingREG1!     |
      # REG023
      | Random      | abc         |          | testing.register3@gmail       | TestingREG1!     | TestingREG1!     |
      # REG024
      | Random      | abc         |          | testing.register3.com         | TestingREG1!     | TestingREG1!     |
      # REG025
      | Random      | abc         |          | testing.register3!@gmail.com  | TestingREG1!     | TestingREG1!     |
      # REG026
      | Random      | abc         |          | testing.register3😎@gmail.com | TestingREG1!     | TestingREG1!     |
      # REG027
      | Random      | abc         |          | .@gmail.com                   | TestingREG1!     | TestingREG1!     |
      # REG028
      | Random      | abc         |          | a@g.c                         | TestingREG1!     | TestingREG1!     |
      # REG030
      |             | abc         |          | Random                        | TestingREG1!     | TestingREG1!     |
      #
      # REG032
      | 6885559737  | abc         |          | Random                        | TestingREG1!     | TestingREG1!     |
      # REG033
      | 89695966    | abc         |          | Random                        | TestingREG1!     | TestingREG1!     |
      #
      # REG035
      | 896959665N  | abc         |          | Random                        | TestingREG1!     | TestingREG1!     |
      #
      # REG037
      | Random      | abc         |          | Random                        |                  | TestingREG1!     |
      # REG038
      | Random      | abc         |          | Random                        | Abcdef1!😎       | Abcdef1!😎       |
      # REG039
      | Random      | abc         |          | Random                        | Abcde1!          | Abcde1!          |
      #
      # REG041
      | Random      | abc         |          | Random                        | abcdefghijklmn1! | abcdefghijklmn1! |
      # REG042
      | Random      | abc         |          | Random                        | ABCDEFGHIJKLMN1! | ABCDEFGHIJKLMN1! |
      # REG043
      | Random      | abc         |          | Random                        | 1234567!         | 1234567!         |
      # REG044
      | Random      | abc         |          | Random                        | Abcdefghijklmn!  | Abcdefghijklmn!  |
      # REG045
      | Random      | abc         |          | Random                        | Abcdefghijklmn1  | Abcdefghijklmn1  |
      # REG046
      | Random      | abc         |          | Random                        | Abcdef1!         |                  |
      # REG047
      | Random      | abc         |          | Random                        | Abcdef1!         | Abcdefghijklmn1! |

  @Negative @1-2
  Scenario Outline: Register with registered email or phone number
    Given User is on Register page
    When User input "<phoneNumber>" on Phone Number input text field on Register page
    When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
    When User input "<email>" on E-Mail input text field on Register page
    When User input "<password>" on Password input text field on Register page
    When User input "<confirmPassword>" on Confirm Password input text field on Register page
    When User tap the Create Account button on Register page
    Then User is still on Register page
    Examples:
      | phoneNumber | firstName   | lastName | email                         | password         | confirmPassword  |
      # REG020
      | Random      | abc         |          | testinglogin3@gmail.com       | TestingREG1!     | TestingREG1!     |
      # REG031
      | 87722074250 | abc         |          | Random                        | TestingREG1!     | TestingREG1!     |
