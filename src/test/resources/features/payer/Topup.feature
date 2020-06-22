@Android @Topup
Feature: Topup feature for DANA Deals
  Background:
    Given User is on DANA Deals Login page
    And User input "phoneNumber" on phone number input field on login page
    And User input "password" on password input field on login page
    And User is on Home page

  Scenario Outline: Top up with All nominal using bank transfer payment method as a new user
    When User click top up icon button on Home Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose "Virtual Account" as a payment method on Top up Page
    And User choose "<bankTransfer>" to pay the top up on Top up Page
    And User click Next Button on Top up Page
    Then User will redirect into Payment Page
    And User will get "<vaNumber>" as Virtual Account Number
    And User click Top up button on Top up cashier Page

    Examples:
      | nominal | bankTransfer | vaNumber |
      | 10000   | BNI          | 0247     |
      | 25000   | BNI          | 0247     |
      | 50000   | BNI          | 0247     |
      | 10000   | Mandiri      | 0247     |
      | 25000   | Mandiri      | 0247     |
      | 50000   | Mandiri      | 0247     |
      | 10000   | BCA          | 0247     |
      | 25000   | BCA          | 0247     |
      | 50000   | BCA          | 0247     |

  Scenario Outline: Top up with All nominal using Agent payment method as a new user
    When User click top up icon button on Home Page
    And User choose "<nominal>" as top up nominal on Top up Page
    And User choose "Agent" as a payment method on Top up Page
    And User click Next Button on Top up Page
    Then User will redirect into Payment Page
    And User will get "<vaNumber>" as Virtual Account Number
    And User click Top up button on Top up cashier Page

    Examples:
      | nominal | vaNumber |
      | 10000   | 0247     |
      | 25000   | 0247     |
      | 50000   | 0247     |







