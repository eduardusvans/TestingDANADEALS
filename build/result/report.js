$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/admin/VoucherDetail.feature");
formatter.feature({
  "name": "VoucherDetail",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@VoucherDetail"
    }
  ]
});
formatter.background({
  "name": "Login with registered admin account",
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
  "name": "User input \"85811440575\" on phone number input field on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userInputOnPhoneNumberInputFieldOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"TeamDeal123!\" on password input field on login page",
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
formatter.step({
  "name": "User see message",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin Login - Logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@VoucherDetail"
    },
    {
      "name": "@E2EVoucherDetailFeature"
    },
    {
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Aaaa Demo ETuE\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"8\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Voucher \"Aaaa Demo ETuE \"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update quota \"8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap LogOut button on Home Admin page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userTapLogOutButtonOnHomeAdminPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on DANA Deals Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnDANADealsLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});