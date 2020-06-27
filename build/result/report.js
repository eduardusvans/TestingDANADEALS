$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/payer/PayVoucher.feature");
formatter.feature({
  "name": "Pay Voucher",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@PayVoucher"
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
  "keyword": "When "
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
  "name": "User input \"87811223344\" on phone number input field on login page",
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
  "name": "Pay voucher from voucher details page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@PayVoucher"
    },
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "User is on DANA Deals Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps_definitions.payer.SearchVoucherStepsDefinitions.userIsOnDANADealsHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click \"ada pocer nih\" on DANA Deals homepage",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.payer.BuyVoucherStepsDefinitions.userClickOnDANADealsHomepage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on voucher details page of \"ada pocer nih\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.payer.BuyVoucherStepsDefinitions.userIsOnVoucherDetailsPageOf(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click buy button on voucher details page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.payer.BuyVoucherStepsDefinitions.userClickBuyButtonOnVoucherDetailsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see is on cashier page of \"ada pocer nih\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.payer.BuyVoucherStepsDefinitions.userSeeIsOnCashierPageOf(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click pay button on cashier page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.payer.PayVoucherStepsDefinitions.userClickPayButtonOnCashierPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see pop up notification that pay success",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.payer.PayVoucherStepsDefinitions.userSeePopUpNotificationThatPaySuccess()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});