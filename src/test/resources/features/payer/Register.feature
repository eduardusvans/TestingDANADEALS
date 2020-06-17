@Android @Register
Feature: Register

  Background:
    Given User is on DANA Deals Login page
    Given User tap the Register here link on Login page

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



