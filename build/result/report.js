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
  "name": "User click \"aasseekk pocer\" on DANA Deals homepage",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.payer.BuyVoucherStepsDefinitions.userClickOnDANADealsHomepage(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027dnid0662l01.local\u0027, ip: \u0027fe80:0:0:0:826:3de4:3ec4:283f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/rahardianr/Documents..., appPackage: com.team.danadeals, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: /Users/rahardianr/Documents..., autoGrantPermissions: true, automationName: UiAutomator2, deviceName: Android Emulator, newCommandTimeout: 120, platformName: android, udid: emulator-5554}, deviceApiLevel: 29, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2220, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 120, pixelRatio: 2.75, platform: LINUX, platformName: Android, platformVersion: 10, statBarHeight: 66, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 2022, left: 0, top: 66, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 8da5d2ec-e647-41f8-a0de-470f59598bf9\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.TextView[contains(@resource-id, \u0027tv_voucher_name\u0027) and @text \u003d \u0027aasseekk pocer\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat demo.pages.payer.home.HomePayer.clickVoucher(HomePayer.java:66)\n\tat demo.steps_definitions.payer.BuyVoucherStepsDefinitions.userClickOnDANADealsHomepage(BuyVoucherStepsDefinitions.java:24)\n\tat ✽.User click \"aasseekk pocer\" on DANA Deals homepage(file:///Users/rahardianr/Documents/DANApprentech/HandsOn/automation%20repo/TestingDANADEALS/src/test/resources/features/payer/PayVoucher.feature:23)\n",
  "status": "failed"
});
formatter.step({
  "name": "User is on voucher details page of \"aasseekk pocer\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.payer.BuyVoucherStepsDefinitions.userIsOnVoucherDetailsPageOf(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click buy button on voucher details page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.payer.BuyVoucherStepsDefinitions.userClickBuyButtonOnVoucherDetailsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see is on cashier page of \"aasseekk pocer\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.payer.BuyVoucherStepsDefinitions.userSeeIsOnCashierPageOf(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click pay button on cashier page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps_definitions.payer.PayVoucherStepsDefinitions.userClickPayButtonOnCashierPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see pop up notification that pay success",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps_definitions.payer.PayVoucherStepsDefinitions.userSeePopUpNotificationThatPaySuccess()"
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