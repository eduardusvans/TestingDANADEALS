@Android @Create
Feature: Create Voucher

  Background:
    Given User is on Landing page
    And User click Login to Account button
    And User is on DANA Deals Login page
    And User input "87800000000" on phone number input field on login page
    And User input "P@ssw0rd" on password input field on login page
    And User click Login button

  Scenario Outline: Create Voucher with valid normal input
    When User is on Home Admin page
    And User click create voucher button on Home Page
    #And User click status dropdown for changing the status in Create Voucher Page
    #And User choose "<status>" for status of voucher in Create Voucher Page
    And User input "<voucherName>" in Voucher Name text field on Create Voucher Page
    And User input "<merchantId>" in Merchant ID text field on Create Voucher Page
    And User input "<discount>" in Discount text field on Create Voucher Page
    And User input "<maxDiscount>" in Max Discount text field on Create Voucher Page
    And User choose "<expiredDate>" in Expired Date text field on Create Voucher Page
    And User input "<quota>" in Quota text field on Create Voucher Page
    And User input "<voucherPrice>" in Voucher Price text field on Create Voucher Page
    And User click create button on Create Voucher Page
    Then User will redirect into Home Page

    Examples:
      | status | voucherName    | merchantId | discount | maxDiscount | expiredDate | quota | voucherPrice |
      | active | Baskin Robbins | 1001       | 50       | 10000       | 2020-07-30  | 250   | 20000        |
