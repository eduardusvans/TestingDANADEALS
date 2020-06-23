$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "name": "Login with registered account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@Login"
    },
    {
      "name": "@Positive"
    },
    {
      "name": "@Payer"
    }
  ]
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
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnDANADealsLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"83196747870\" on phone number input field on login page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userInputOnPhoneNumberInputFieldOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"P@sswordku1\" on password input field on login page",
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
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with registered admin account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@Login"
    },
    {
      "name": "@Admin"
    }
  ]
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
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnDANADealsLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"87800000000\" on phone number input field on login page",
  "keyword": "When "
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
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});