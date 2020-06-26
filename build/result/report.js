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
      "name": "@TestForHistoryFeature"
    },
    {
      "name": "@PayFailed"
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
  "name": "User type a \"kfc\" at search field on DANA Deals Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.payer.SearchVoucherStepsDefinitions.userTypeAAtSearchFieldOnDANADealsHomepage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click buy on crazy deals kfc",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.payer.PayVoucherStepsDefinitions.userClickBuyOnCrazyDealsKfc()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see pop up notification that pay failed",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.payer.PayVoucherStepsDefinitions.userSeePopUpNotificationThatPayFailed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});