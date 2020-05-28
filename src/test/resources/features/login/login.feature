@Android @Login
Feature: Login

  Scenario: User checking login page
    Given User is on DANA Deals Login page
    When User input "email" on email input field on login page
    And User input "password" on password input field on login page
    Then User is on main page
