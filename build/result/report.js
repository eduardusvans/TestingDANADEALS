$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/admin/CreateVoucher.feature");
formatter.feature({
  "name": "Create Voucher",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@Create"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Create Voucher with valid normal input",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "When "
});
formatter.step({
  "name": "User click create voucher button on Home Page",
  "keyword": "And "
});
formatter.step({
  "name": "User click status dropdown for changing the status in Create Voucher Page",
  "keyword": "And "
});
formatter.step({
  "name": "User choose \"\u003cstatus\u003e\" for status of voucher in Create Voucher Page",
  "keyword": "And "
});
formatter.step({
  "name": "User input \"\u003cvoucherName\u003e\" in Voucher Name text field on Create Voucher Page",
  "keyword": "And "
});
formatter.step({
  "name": "User input \"\u003cmerchantId\u003e\" in Merchant ID text field on Create Voucher Page",
  "keyword": "And "
});
formatter.step({
  "name": "User input \"\u003cdiscount\u003e\" in Discount text field on Create Voucher Page",
  "keyword": "And "
});
formatter.step({
  "name": "User input \"\u003cmaxDiscount\u003e\" in Max Discount text field on Create Voucher Page",
  "keyword": "And "
});
formatter.step({
  "name": "User choose \"\u003cexpiredDate\u003e\" in Expired Date text field on Create Voucher Page",
  "keyword": "And "
});
formatter.step({
  "name": "User input \"\u003cquota\u003e\" in Quota text field on Create Voucher Page",
  "keyword": "And "
});
formatter.step({
  "name": "User input \"\u003cvoucherPrice\u003e\" in Voucher Price text field on Create Voucher Page",
  "keyword": "And "
});
formatter.step({
  "name": "User click create button on Create Voucher Page",
  "keyword": "And "
});
formatter.step({
  "name": "User will redirect into Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status",
        "voucherName",
        "merchantId",
        "discount",
        "maxDiscount",
        "expiredDate",
        "quota",
        "voucherPrice"
      ]
    },
    {
      "cells": [
        "active",
        "Baskin Robbins",
        "1001",
        "50",
        "10000",
        "2020-06-30",
        "250",
        "20000"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Login to Account button",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userClickLoginToAccountButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on DANA Deals Login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnDANADealsLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"87800000000\" on phone number input field on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userInputOnPhoneNumberInputFieldOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"P@ssw0rd\" on password input field on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userInputOnPasswordInputFieldOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create Voucher with valid normal input",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@Create"
    }
  ]
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click create voucher button on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userClickCreateVoucherButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click status dropdown for changing the status in Create Voucher Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userClickStatusDropdownForChangingTheStatusInCreateVoucherPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User choose \"active\" for status of voucher in Create Voucher Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userChooseForStatusOfVoucherInCreateVoucherPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Baskin Robbins\" in Voucher Name text field on Create Voucher Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userInputInVoucherNameTextFieldOnCreateVoucherPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"1001\" in Merchant ID text field on Create Voucher Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userInputInMerchantIDTextFieldOnCreateVoucherPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"50\" in Discount text field on Create Voucher Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userInputInDiscountTextFieldOnCreateVoucherPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"10000\" in Max Discount text field on Create Voucher Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userInputInMaxDiscountTextFieldOnCreateVoucherPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User choose \"2020-06-30\" in Expired Date text field on Create Voucher Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userChooseInExpiredDateTextFieldOnCreateVoucherPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"250\" in Quota text field on Create Voucher Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userInputInQuotaTextFieldOnCreateVoucherPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"20000\" in Voucher Price text field on Create Voucher Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userInputInVoucherPriceTextFieldOnCreateVoucherPage(java.lang.String)"
});
