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
  "name": "\"Update with same status \"\"Active\"\" and same quota on Not Expired Voucher\"",
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
      "name": "@Functional"
    },
    {
      "name": "@ChangeQuotaBeforeRun"
    },
    {
      "name": "@1"
    },
    {
      "name": "#VOUD001"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Alfalfakkdntfrqbfp\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
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
  "name": "User tap Voucher \"Alfalfakkdntfrqbfp\"",
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
  "name": "User see update quota \"249\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Active\"\" and restock by type more quota on Not Expired Voucher\"",
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
      "name": "@2"
    },
    {
      "name": "#VOUD002"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Agarsbyvuhjvogavtmza\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"252\"",
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
  "name": "User tap Voucher \"Agarsbyvuhjvogavtmza\"",
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
  "name": "User see update quota \"252\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Active\"\" and restock by tap increase button on Not Expired Voucher\"",
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
      "name": "@3"
    },
    {
      "name": "#VOUD003"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Asafoetida\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Increase",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapIncrease()"
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
  "name": "User tap Voucher \"Asafoetida\"",
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
  "name": "User see update quota \"252\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": ":\"Update with same status \"\"Active\"\" and restock by type more quota and by tap increase button on Not Expired Voucher\"",
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
      "name": "@4"
    },
    {
      "name": "#VOUD004"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"almsb\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"241\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Increase",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapIncrease()"
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
  "name": "User tap Voucher \"almsb\"",
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
  "name": "User see update quota \"241\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateQuota(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c24[1]\u003e but was:\u003c24[2]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateQuota(VoucherDetailAdminStepsDefinitions.java:74)\n\tat ✽.User see update quota \"241\"(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:72)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\"Update with same status \"\"Active\"\" and restock by type any invalid input quota  on Not Expired Voucher\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InvalidInputQuota"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Basily\"",
  "keyword": "When "
});
formatter.step({
  "name": "User input quota \"\u003cQuota\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.step({
  "name": "User see message",
  "keyword": "Then "
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Quota"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "-1"
      ]
    },
    {
      "cells": [
        "1.5"
      ]
    },
    {
      "cells": [
        "1/2"
      ]
    },
    {
      "cells": [
        "1001"
      ]
    },
    {
      "cells": [
        "abc"
      ]
    },
    {
      "cells": [
        "@@"
      ]
    },
    {
      "cells": [
        "😅🤣🥰😎"
      ]
    },
    {
      "cells": [
        "0"
      ]
    },
    {
      "cells": [
        ""
      ]
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
  "name": "\"Update with same status \"\"Active\"\" and restock by type any invalid input quota  on Not Expired Voucher\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@VoucherDetail"
    },
    {
      "name": "@InvalidInputQuota"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Basily\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"2\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Active\"\" and restock by type any invalid input quota  on Not Expired Voucher\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@VoucherDetail"
    },
    {
      "name": "@InvalidInputQuota"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Basily\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"-1\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Active\"\" and restock by type any invalid input quota  on Not Expired Voucher\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@VoucherDetail"
    },
    {
      "name": "@InvalidInputQuota"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Basily\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"1.5\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Active\"\" and restock by type any invalid input quota  on Not Expired Voucher\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@VoucherDetail"
    },
    {
      "name": "@InvalidInputQuota"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Basily\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"1/2\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Active\"\" and restock by type any invalid input quota  on Not Expired Voucher\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@VoucherDetail"
    },
    {
      "name": "@InvalidInputQuota"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Basily\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"1001\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Active\"\" and restock by type any invalid input quota  on Not Expired Voucher\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@VoucherDetail"
    },
    {
      "name": "@InvalidInputQuota"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Basily\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"abc\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Active\"\" and restock by type any invalid input quota  on Not Expired Voucher\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@VoucherDetail"
    },
    {
      "name": "@InvalidInputQuota"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Basily\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"@@\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Active\"\" and restock by type any invalid input quota  on Not Expired Voucher\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@VoucherDetail"
    },
    {
      "name": "@InvalidInputQuota"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Basily\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"😅🤣🥰😎\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Active\"\" and restock by type any invalid input quota  on Not Expired Voucher\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@VoucherDetail"
    },
    {
      "name": "@InvalidInputQuota"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Basily\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"0\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Active\"\" and restock by type any invalid input quota  on Not Expired Voucher\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Android"
    },
    {
      "name": "@VoucherDetail"
    },
    {
      "name": "@InvalidInputQuota"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Basily\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.id: btn_save_admin (tried for 15 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat demo.utils.ActionUtils.waitElement(ActionUtils.java:15)\n\tat demo.pages.admin.VoucherDetailAdminPage.isOnPage(VoucherDetailAdminPage.java:11)\n\tat demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage(VoucherDetailAdminStepsDefinitions.java:16)\n\tat ✽.User is on Voucher Detail page(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:80)\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 21ed8119-0167-41b6-af6f-f137bc80fe91\n*** Element info: {Using\u003did, value\u003dbtn_save_admin}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat demo.utils.ActionUtils.waitElement(ActionUtils.java:15)\n\tat demo.pages.admin.VoucherDetailAdminPage.isOnPage(VoucherDetailAdminPage.java:11)\n\tat demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage(VoucherDetailAdminStepsDefinitions.java:16)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$WithStepDescriptions.run(PickleRunners.java:100)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:94)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:118)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:182)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:164)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:412)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:48)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:56)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Inactive\"\" and same quota on Not Expired Voucher\"",
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
      "name": "@DoNothing"
    },
    {
      "name": "@15"
    },
    {
      "name": "#VOUD0015"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Allspice Wholexptc\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Inactive\"\" and restock quota by type any input on Not Expired Voucher\"",
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
      "name": "@16"
    },
    {
      "name": "#VOUD016"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Allspice Wholexptc\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"22\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Inactive\"\" and restock by tap increase button on Not Expired Voucher\"",
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
      "name": "@17"
    },
    {
      "name": "#VOUD017"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Allspice Wholexptc\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Increase",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapIncrease()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Inactive\"\" and restock by type any input and by tap increase button on Not Expired Voucher\"",
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
      "name": "@18"
    },
    {
      "name": "#VOUD0018"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Allspice Wholexptc\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"13\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Increase",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapIncrease()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Inactive\"\" and restock by empty input (delete current quota) on Not Expired Voucher\"",
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
      "name": "@19"
    },
    {
      "name": "#VOUD0019"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Allspice Wholexptc\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \" \"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Inactive\"\" and same quota on Expired Voucher\"",
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
      "name": "@20"
    },
    {
      "name": "#VOUD020"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"asek asek\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Inactive\"\" and restock quota by type any input on Expired Voucher\"",
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
      "name": "@21"
    },
    {
      "name": "#VOUD021"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"asek asek\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"11\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Inactive\"\" and restock by tap increase button on  Expired Voucher\"",
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
      "name": "@22"
    },
    {
      "name": "#VOUD022"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"asek asek\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Increase",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapIncrease()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Inactive\"\" and restock by type any input and by tap increase button on Expired Voucher\"",
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
      "name": "@23"
    },
    {
      "name": "#VOUD023"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"asek asek\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"11\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Increase",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapIncrease()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with same status \"\"Inactive\"\" and restock by empty input (delete current quota) on Expired Voucher\"",
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
      "name": "@24"
    },
    {
      "name": "#VOUD024"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"asek asek\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \" \"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Active\"\" to \"\"Inactive\"\" on not Expired Voucher\"",
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
      "name": "@CHANGESTATUSBEFORRUNNINGTHISONE"
    },
    {
      "name": "@25"
    },
    {
      "name": "#VOUD025"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"AlbinVoucher\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"AlbinVoucher\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Active\"\" to \"\"Inactive\"\" and restock quota by type any input on not Expired Voucher\"",
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
      "name": "@26"
    },
    {
      "name": "#VOUD026"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Anises\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"Anises\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"251\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Active\"\" to \"\"Inactive\"\" and restock quota by tap increase button on not Expired Voucher\"",
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
      "name": "@27"
    },
    {
      "name": "#VOUD027"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Baconb\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"Baconb\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Increase",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapIncrease()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Active\"\" to \"\"Inactive\"\" and restock quota by type any input and by tap increase button on not Expired Voucher\"",
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
      "name": "@28"
    },
    {
      "name": "#VOUD028"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"bqe\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"bqe\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"251\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Increase",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapIncrease()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Active\"\" to \"\"Inactive\"\" and restock by empty input (delete current quota) on not Expired Voucher\"",
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
      "name": "@29"
    },
    {
      "name": "#VOUD029"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Butter\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"Butter\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \" \"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see update status \"Inactive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Update status \"Inactive\" to \"Active\" on not Expired Voucher , while current quota \u003c 5",
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
      "name": "@ChangeVoucherwithKurangdariLimaBeforeRun"
    },
    {
      "name": "@30"
    },
    {
      "name": "#VOUD030"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Chives\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"Chives\"",
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
  "name": "User see update quota \"5\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update with \"\"Inactive\"\" to \"\"Active\"\" and restock by type more quota on Not Expired Voucher , while current quota \u003c 5\"",
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
      "name": "@31"
    },
    {
      "name": "#VOUD031"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Biryani Spice Mixgk\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.id: et_search (tried for 30 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat demo.utils.ActionUtils.waitElement(ActionUtils.java:15)\n\tat demo.pages.admin.HomeAdminPage.isOnPage(HomeAdminPage.java:21)\n\tat demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage(LoginStepsDefinitions.java:59)\n\tat ✽.User is on Home Admin page(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:285)\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 07cfc216-704d-4075-8698-795da511188a\n*** Element info: {Using\u003did, value\u003det_search}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat demo.utils.ActionUtils.waitElement(ActionUtils.java:15)\n\tat demo.pages.admin.HomeAdminPage.isOnPage(HomeAdminPage.java:21)\n\tat demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage(LoginStepsDefinitions.java:59)\n\tat jdk.internal.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$WithStepDescriptions.run(PickleRunners.java:100)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:94)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:118)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:182)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:164)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:412)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:48)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:56)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\n",
  "status": "failed"
});
formatter.step({
  "name": "User tap Voucher \"Biryani Spice Mixgk\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update status \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update quota \"5\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input quota \"6\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Voucher \"Biryani Spice Mixgk\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update status \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update quota \"6\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Inactive\"\" to \"\"Active\"\" on Expired Voucher , while current quota \u003c 5\"",
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
      "name": "@JustUseExpiredVoucherInactiveKurangLima"
    },
    {
      "name": "@44"
    },
    {
      "name": "#VOUD044"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Bigger Pack Deal\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Inactive\"\" to \"\"Active\"\" and restock quota by type any input on Expired Voucher , while current quota \u003c 5\"",
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
      "name": "@45"
    },
    {
      "name": "#VOUD045"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Bigger Pack Deal\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"6\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Inactive\"\" to \"\"Active\"\" and restock quota by tap increase button on Expired Voucher, while current quota \u003c 5\"",
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
      "name": "@46"
    },
    {
      "name": "#VOUD046"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Bigger Pack Deal\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Increase",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapIncrease()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Inactive\"\" to \"\"Active\"\" and restock quota by type any input and by tap increase button on  Expired Voucher , while current quota \u003c 5\"",
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
      "name": "@47"
    },
    {
      "name": "#VOUD047"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Bigger Pack Deal\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"6\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Increase",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapIncrease()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Inactive\"\" to \"\"Active\"\" and restock by empty input (delete current quota) on Expired Voucher, while current quota \u003c 5\"",
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
      "name": "@48"
    },
    {
      "name": "#VOUD048"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Bigger Pack Deal\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \" \"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Update status \"Inactive\" to \"Active\" on not Expired Voucher, while current quota \u003e \u003d 5",
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
      "name": "@ChangeStatusandChangeQuotaBeforeRun"
    },
    {
      "name": "@49"
    },
    {
      "name": "#VOUD049"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Baskin Robbins\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"Baskin Robbins\"",
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
formatter.after({
  "status": "passed"
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
  "name": "\"Update with \"\"Inactive\"\" to \"\"Active\"\" and restock by type more quota on Not Expired Voucher , while current quota \u003e\u003d 5\"",
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
      "name": "@50"
    },
    {
      "name": "#VOUD050"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Bengawan Solo\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"Bengawan Solo\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"10\"",
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
  "name": "User tap Voucher \"Bengawan Solo\"",
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
  "name": "User see update quota \"10\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Inactive\"\" to \"\"Active\"\" and restock quota by tap increase button on not Expired Voucher, while current quota \u003e \u003d 5\"",
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
      "name": "@51"
    },
    {
      "name": "#VOUD0051"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Bulghurd\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"Bulghurd\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Increase",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapIncrease()"
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
  "name": "User tap Voucher \"Bulghurd\"",
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
  "name": "User see update quota \"251\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Update status \"Inactive\" to \"Active\" and restock quota by type more quota and by tap increase button on not Expired Voucher, while current quota \u003e \u003d 5",
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
      "name": "@52"
    },
    {
      "name": "#VOUD0052"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Cassia\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"Cassia\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"251\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Increase",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapIncrease()"
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
  "name": "User tap Voucher \"Cassia\"",
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
  "name": "User see update quota \"252\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateQuota(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Update \"Inactive\" to \"Active\" and restock by type less quota than current quota on Not Expired Voucher, while current quota \u003e \u003d 5",
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
      "name": "@53"
    },
    {
      "name": "#VOUD053"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Cassianvaa\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"Cassianvaa\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"5\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
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
formatter.after({
  "status": "passed"
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
  "name": "Update \"Inactive\" to \"Active\" and restock by type negative number on Not Expired Voucher, while current quota \u003e \u003d 5",
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
      "name": "@54"
    },
    {
      "name": "#VOUD054"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Cassiauoih\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"Cassiauoih\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input quota \"-1\"",
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
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
formatter.after({
  "status": "passed"
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
  "name": "\"Update \"\"Inactive\"\" to \"\"Active\"\"and restock by type decimal number on Not Expired Voucher , while current quota \u003e \u003d 5\"",
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
      "name": "@55"
    },
    {
      "name": "#VOUD055"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Cassiavbvwjv\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"Cassiavbvwjv\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: fd2f8618-fced-4d77-b096-16998afdf0bf\n*** Element info: {Using\u003did, value\u003drv_admin}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat demo.pages.admin.HomeAdminPage.scrollDown(HomeAdminPage.java:66)\n\tat demo.pages.admin.HomeAdminPage.tapVoucher(HomeAdminPage.java:55)\n\tat demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(VoucherDetailAdminStepsDefinitions.java:66)\n\tat ✽.User tap Voucher \"Cassiavbvwjv\"(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:603)\n",
  "status": "failed"
});
formatter.step({
  "name": "User input quota \"1.5\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update status \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "name": "\"Update \"\"Inactive\"\" to \"\"Active\"\" and restock by type fraction number on Not Expired Voucher, while current quota \u003e \u003d 5\"",
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
      "name": "@56"
    },
    {
      "name": "#VOUD056"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Celery Saltrv\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User tap Voucher \"Celery Saltrv\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 0f7f5f42-34dd-4110-b179-0c9be123381d\n*** Element info: {Using\u003did, value\u003drv_admin}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat demo.pages.admin.HomeAdminPage.scrollDown(HomeAdminPage.java:66)\n\tat demo.pages.admin.HomeAdminPage.tapVoucher(HomeAdminPage.java:55)\n\tat demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(VoucherDetailAdminStepsDefinitions.java:66)\n\tat ✽.User tap Voucher \"Celery Saltrv\"(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:615)\n",
  "status": "failed"
});
formatter.step({
  "name": "User input quota \"1/2\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update status \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.id: et_search (tried for 30 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat demo.utils.ActionUtils.waitElement(ActionUtils.java:15)\n\tat demo.pages.admin.HomeAdminPage.isOnPage(HomeAdminPage.java:21)\n\tat demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage(LoginStepsDefinitions.java:59)\n\tat ✽.User is on Home Admin page(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:13)\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: bebbc9e1-674f-4059-89cd-1cc621dcbc37\n*** Element info: {Using\u003did, value\u003det_search}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat demo.utils.ActionUtils.waitElement(ActionUtils.java:15)\n\tat demo.pages.admin.HomeAdminPage.isOnPage(HomeAdminPage.java:21)\n\tat demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage(LoginStepsDefinitions.java:59)\n\tat jdk.internal.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$WithStepDescriptions.run(PickleRunners.java:100)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:94)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:118)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:182)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:164)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:412)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:48)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:56)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "\"Update \"\"Inactive\"\" to \"\"Active\"\" and restock by type number exceeds 1000 on Not Expired Voucher, while current quota \u003e \u003d 5\"#    When User tap Voucher \"Name\"",
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
      "name": "@57"
    },
    {
      "name": "#VOUD057"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Cheqweiriiriioi\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Voucher \"Cheqweiriiriioi\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input quota \"1001\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see message",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update status \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "name": "User see message",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 3b574cb1-bb8a-4afc-9590-ca46e38e2825\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.Toast[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat demo.pages.LoginPage.seeMessage(LoginPage.java:31)\n\tat demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage(LoginStepsDefinitions.java:101)\n\tat ✽.User see message(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "\"Update \"\"Inactive\"\" to \"\"Active\"\" and restock by type alphabet on Not Expired Voucher, while current quota \u003e \u003d 5\"",
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
      "name": "@58"
    },
    {
      "name": "#VOUD058"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Clear Small paket\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Voucher \"Clear Small paket\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input quota \"abc\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update status \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "name": "User see message",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: dfd9f2dd-779b-4cfd-b0b3-58e003363b3e\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.Toast[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat demo.pages.LoginPage.seeMessage(LoginPage.java:31)\n\tat demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage(LoginStepsDefinitions.java:101)\n\tat ✽.User see message(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "\"Update \"\"Inactive\"\" to \"\"Active\"\" and restock by type symbol on Not Expired Voucher, while current quota \u003e \u003d 5\"",
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
      "name": "@59"
    },
    {
      "name": "#VOUD059"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Clear Big Deal\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Voucher \"Clear Big Deal\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input quota \"@@\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update status \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "name": "\"Update \"\"Inactive\"\" to \"\"Active\"\" and restock by type emoji on Not Expired Voucher , while current quota \u003e \u003d 5\"",
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
      "name": "@60"
    },
    {
      "name": "#VOUD060"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Clear Big Deals\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.id: et_search (tried for 30 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat demo.utils.ActionUtils.waitElement(ActionUtils.java:15)\n\tat demo.pages.admin.HomeAdminPage.isOnPage(HomeAdminPage.java:21)\n\tat demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage(LoginStepsDefinitions.java:59)\n\tat ✽.User is on Home Admin page(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:664)\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 3736e02b-964e-44f7-977a-a8656f75f04c\n*** Element info: {Using\u003did, value\u003det_search}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat demo.utils.ActionUtils.waitElement(ActionUtils.java:15)\n\tat demo.pages.admin.HomeAdminPage.isOnPage(HomeAdminPage.java:21)\n\tat demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage(LoginStepsDefinitions.java:59)\n\tat jdk.internal.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$WithStepDescriptions.run(PickleRunners.java:100)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:94)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:118)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:182)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:164)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:412)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:48)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:56)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\n",
  "status": "failed"
});
formatter.step({
  "name": "User tap Voucher \"Clear Big Deals\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input quota \"😅🤣🥰😎\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update status \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "name": "User see message",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 8fd3f54c-19f2-4eb0-a369-9456c6fd82ff\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.Toast[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat demo.pages.LoginPage.seeMessage(LoginPage.java:31)\n\tat demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage(LoginStepsDefinitions.java:101)\n\tat ✽.User see message(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "\"Update \"\"Inactive\"\" to \"\"Active\"\" and restock by type \"\"0\"\" on Not Expired Voucher , while current quota \u003e \u003d 5\"",
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
      "name": "@61"
    },
    {
      "name": "#VOUD0061"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Clear Full Packet\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Voucher \"Clear Full Packet\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input quota \"0\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update status \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "name": "User see message",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 1b168762-a4c2-4dcf-93e7-06731aeb5660\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.Toast[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat demo.pages.LoginPage.seeMessage(LoginPage.java:31)\n\tat demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage(LoginStepsDefinitions.java:101)\n\tat ✽.User see message(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "\"Update \"\"Inactive\"\" to \"\"Active\"\" and restock by empty input (delete current quota) on Not Expired Voucher, while current quota \u003e \u003d 5\"",
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
      "name": "@62"
    },
    {
      "name": "#VOUD062"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Adzuki Beansmhv\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Voucher \"Adzuki Beansmhv\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input quota \" \"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update status \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded10.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "name": "User see message",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: c2ec8517-6948-4073-9f86-a80149efaa6e\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.Toast[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat demo.pages.LoginPage.seeMessage(LoginPage.java:31)\n\tat demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage(LoginStepsDefinitions.java:101)\n\tat ✽.User see message(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "\"Update status \"\"Inactive\"\" to \"\"Active\"\" on Expired Voucher , while current quota \u003e \u003d 5\"",
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
      "name": "@NothingChangeforThisVoucher"
    },
    {
      "name": "@63"
    },
    {
      "name": "#VOUD063"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Chivesshlmd\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see message",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded11.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Inactive\"\" to \"\"Active\"\" and restock quota by type any input on Expired Voucher , while current quota \u003e \u003d 5\"",
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
      "name": "@64"
    },
    {
      "name": "#VOUD064"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Chivesshlmd\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Inactive\"\" to \"\"Active\"\" and restock quota by tap increase button on Expired Voucher, while current quota \u003e \u003d 5\"",
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
      "name": "@65"
    },
    {
      "name": "#VOUD065"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Chivesshlmd\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: c594e528-e86d-49cc-a304-5b08b17c19a7\n*** Element info: {Using\u003did, value\u003drv_admin}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat demo.pages.admin.HomeAdminPage.scrollDown(HomeAdminPage.java:66)\n\tat demo.pages.admin.HomeAdminPage.tapVoucher(HomeAdminPage.java:55)\n\tat demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(VoucherDetailAdminStepsDefinitions.java:66)\n\tat ✽.User tap Voucher \"Chivesshlmd\"(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:718)\n",
  "status": "failed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see message",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Increase",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapIncrease()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded12.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Inactive\"\" to \"\"Active\"\" and restock quota by type any input and by tap increase button on  Expired Voucher, while current quota \u003e \u003d 5\"",
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
      "name": "@67"
    },
    {
      "name": "#VOUD067"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Chivesshlmd\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
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
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "\"Update status \"\"Inactive\"\" to \"\"Active\"\" and restock by empty input (delete current quota) on Expired Voucher, while current quota \u003e \u003d 5\"",
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
      "name": "@68"
    },
    {
      "name": "#VOUD068"
    }
  ]
});
formatter.step({
  "name": "User tap Voucher \"Chivesshlmd\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: ebb3e665-be41-4032-9e74-8c2174419e6e\n*** Element info: {Using\u003did, value\u003drv_admin}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat demo.pages.admin.HomeAdminPage.scrollDown(HomeAdminPage.java:66)\n\tat demo.pages.admin.HomeAdminPage.tapVoucher(HomeAdminPage.java:55)\n\tat demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(VoucherDetailAdminStepsDefinitions.java:66)\n\tat ✽.User tap Voucher \"Chivesshlmd\"(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:741)\n",
  "status": "failed"
});
formatter.step({
  "name": "User tap Status",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see message",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.UserSeeMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input quota \" \"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded13.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "name": "Verify element on Voucher Detail Page",
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
      "name": "@NonFunctional"
    },
    {
      "name": "@1"
    },
    {
      "name": "#VON001"
    }
  ]
});
formatter.step({
  "name": "User tap any voucher",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapAnyVoucher()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 78f96f03-149b-4870-add7-d2a263a6b7f6\n*** Element info: {Using\u003did, value\u003drv_voucher}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat demo.utils.ActionUtils.tapElement(ActionUtils.java:23)\n\tat demo.pages.admin.HomeAdminPage.tapAnyVoucher(HomeAdminPage.java:33)\n\tat demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapAnyVoucher(VoucherDetailAdminStepsDefinitions.java:19)\n\tat ✽.User tap any voucher(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:754)\n",
  "status": "failed"
});
formatter.step({
  "name": "User is on Voucher Detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userIsOnVoucherDetailPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see status textview",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeStatusTextview()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see voucher name textview",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeVoucherNameTextview()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see merchant id textview",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeMerchantIdTextview()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see discount textview",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeDiscountTextview()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see max discount textview",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeMaxDiscountTextview()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see voucher price textview",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeVoucherPriceTextview()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see expired textview",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeExpiredTextview()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see quota input textfield",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeQuotaInputTextfield()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see increase button",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeIncreaseButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see save button",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded14.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
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
  "name": "User is on Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnLandingPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.id: btn_create_account (tried for 15 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat demo.utils.ActionUtils.waitElement(ActionUtils.java:15)\n\tat demo.pages.LandingPage.isOnPage(LandingPage.java:8)\n\tat demo.steps_definitions.LoginStepsDefinitions.userIsOnLandingPage(LoginStepsDefinitions.java:33)\n\tat ✽.User is on Landing page(file:///Users/sihalohoo/Desktop/DEBRIEF%202/DANADealsTESTING/src/test/resources/features/admin/VoucherDetail.feature:771)\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DNID0651L01.local\u0027, ip: \u0027fe80:0:0:0:10ff:ecf3:d89:4ddc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002711.0.6\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sihalohoo/Desktop/DE..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/sihalohoo/Desktop/DE..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 23, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 6.0, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 1c55eccc-5fcd-4d4f-aae1-136f834ee022\n*** Element info: {Using\u003did, value\u003dbtn_create_account}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat demo.utils.ActionUtils.waitElement(ActionUtils.java:15)\n\tat demo.pages.LandingPage.isOnPage(LandingPage.java:8)\n\tat demo.steps_definitions.LoginStepsDefinitions.userIsOnLandingPage(LoginStepsDefinitions.java:33)\n\tat jdk.internal.reflect.GeneratedMethodAccessor10.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$WithStepDescriptions.run(PickleRunners.java:100)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:94)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:118)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:182)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:164)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:412)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:48)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:56)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\n",
  "status": "failed"
});
formatter.step({
  "name": "User click Login to Account button",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userClickLoginToAccountButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on DANA Deals Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnDANADealsLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input \"87800000000\" on phone number input field on login page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userInputOnPhoneNumberInputFieldOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input \"P@ssw0rd\" on password input field on login page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userInputOnPasswordInputFieldOnLoginPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userClickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Voucher \"Blackberriesppzuppme\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input quota \"301\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userInputQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Voucher \"Blackberriesppzuppme\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapVoucher(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update status \"Active\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateStatus(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see update quota \"301\"",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userSeeUpdateQuota(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap Save",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.VoucherDetailAdminStepsDefinitions.userTapSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Home Admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User tap LogOut button on Home Admin page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userTapLogOutButtonOnHomeAdminPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on DANA Deals Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.LoginStepsDefinitions.userIsOnDANADealsLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded15.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
});
});