@Android @E2EVoucher
  Feature: E2E Voucher

    Background:
      Given User is on Landing page
      Given User tap the Create Account button on Landing page

    @ETE001
    Scenario: Pay voucher from DANA Deals homepage using filter merchant category
      Given User is on Register page
      When User input "<phoneNumber>" on Phone Number input text field on Register page
      When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
      When User input "<email>" on E-Mail input text field on Register page
      When User input "<password>" on Password input text field on Register page
      When User input "<confirmPassword>" on Confirm Password input text field on Register page
      When User tap the Create Account button on Register page
      When User see the success message on Login page
      When User is on DANA Deals Login page

    @ETE002
    Scenario: Pay voucher using filter merchant category
      Given User is on Register page
      When User input "<phoneNumber>" on Phone Number input text field on Register page
      When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
      When User input "<email>" on E-Mail input text field on Register page
      When User input "<password>" on Password input text field on Register page
      When User input "<confirmPassword>" on Confirm Password input text field on Register page
      When User tap the Create Account button on Register page
      When User see the success message on Login page
      When User is on DANA Deals Login page

    @ETE003
    Scenario: Pay voucher using sort voucher price
      Given User is on Register page
      When User input "<phoneNumber>" on Phone Number input text field on Register page
      When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
      When User input "<email>" on E-Mail input text field on Register page
      When User input "<password>" on Password input text field on Register page
      When User input "<confirmPassword>" on Confirm Password input text field on Register page
      When User tap the Create Account button on Register page
      When User see the success message on Login page
      When User is on DANA Deals Login page

    @ETE004
    Scenario: Pay voucher using sort discount
      Given User is on Register page
      When User input "<phoneNumber>" on Phone Number input text field on Register page
      When User input "<firstName>" "<lastName>" on Full Name input text field on Register page
      When User input "<email>" on E-Mail input text field on Register page
      When User input "<password>" on Password input text field on Register page
      When User input "<confirmPassword>" on Confirm Password input text field on Register page
      When User tap the Create Account button on Register page
      When User see the success message on Login page
      When User is on DANA Deals Login page
