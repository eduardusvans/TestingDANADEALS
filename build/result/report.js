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
        "2020-07-30",
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
  "error_message": "org.openqa.selenium.UnsupportedCommandException: Method is not implemented\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027dnid0663l01.local\u0027, ip: \u0027fe80:0:0:0:1875:9d:4ec5:894a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/bhaskaram/IdeaProjec..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UIAutomator2, databaseEnabled: false, desired: {app: /Users/bhaskaram/IdeaProjec..., autoGrantPermissions: true, automationName: UIAutomator2, deviceName: device, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 29, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 10, statBarHeight: 63, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 98b323dc-6cba-4545-b564-a7f056054de5\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\n\tat demo.pages.admin.CreateVoucherPage.inputMaxDiscount(CreateVoucherPage.java:53)\n\tat demo.steps_definitions.admin.CreateVoucherStepDefinitions.userInputInMaxDiscountTextFieldOnCreateVoucherPage(CreateVoucherStepDefinitions.java:47)\n\tat ✽.User input \"10000\" in Max Discount text field on Create Voucher Page(file:///Users/bhaskaram/IdeaProjects/TestingDANADEALS/src/test/resources/features/admin/CreateVoucher.feature:20)\n",
  "status": "failed"
});
formatter.step({
  "name": "User choose \"2020-07-30\" in Expired Date text field on Create Voucher Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userChooseInExpiredDateTextFieldOnCreateVoucherPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input \"250\" in Quota text field on Create Voucher Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userInputInQuotaTextFieldOnCreateVoucherPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User input \"20000\" in Voucher Price text field on Create Voucher Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userInputInVoucherPriceTextFieldOnCreateVoucherPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click create button on Create Voucher Page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userClickCreateButtonOnCreateVoucherPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User will redirect into Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.admin.CreateVoucherStepDefinitions.userWillRedirectIntoHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.write("Scenario Fail");
formatter.after({
  "status": "passed"
});
});