@Android @Login
Feature: Login

  @Positive
  @Payer
  # LOG001  LOGN010
  Scenario: Login with registered account
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "83196747870" on phone number input field on login page
    And User input "P@sswordku1" on password input field on login page
    And User click Login button
    Then User is on Home page

  @Admin
  # ALOG001  ALOGN001
  Scenario: Login with registered admin account
    Given User is on Landing page
    When User click Login to Account button
    Then User is on DANA Deals Login page
    When User input "87800000000" on phone number input field on login page
    And User input "P@ssw0rd" on password input field on login page
    And User click Login button
    Then User is on Home Admin page




