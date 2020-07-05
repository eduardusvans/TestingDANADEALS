@Android @E2EVoucher
  Feature: E2E Voucher

    Background:
      Given User is on Landing page
      Given User tap the Create Account button on Landing page

    @ETE001
    Scenario: Register - Login - Top Up - Pay voucher with search feature
      Given User is on Register page
      When User input "87811436566" on Phone Number input text field on Register page
      When User input "dahyun" "dahyun" on Full Name input text field on Register page
      When User input "dahyu@gmail.com" on E-Mail input text field on Register page
      When User input "P@ssw0rd" on Password input text field on Register page
      When User input "P@ssw0rd" on Confirm Password input text field on Register page
      When User tap the Create Account button on Register page
      When User see the success message on Login page
      When User is on DANA Deals Login page
      When User input "87811436566" on phone number input field on login page
      When User input "P@ssw0rd" on password input field on login page
      When User click Login button
      When User is on DANA Deals Homepage
      When User click top up icon button on Home Page
      When User is on Top up Page
      When User see Balance on Top up Page
      When User choose "50k" as top up nominal on Top up Page
      When User choose Merchant as a payment method on Top up Page
      When User click Done Button on Top up Page
      When User is on DANA Deals Homepage
      When User total balance is added as "50000" nominal top up
      When User type a "telkom" at search field on DANA Deals Homepage
      When User click "Aaariko" on DANA Deals homepage
      When User is on voucher details page of "Aaariko"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "Aaariko"
      When User click pay button on cashier page
      When User see pop up notification that pay success
      When User tap profile icon
      When User is on Profile screen
      When User tap LogOut button
      Then User is on DANA Deals Login page


    @ETE002
    Scenario: Register - Login - Top Up - Pay voucher with filter feature
      Given User is on Register page
      When User input "87866112233" on Phone Number input text field on Register page
      When User input "andi" "andi" on Full Name input text field on Register page
      When User input "andi@gmail.com" on E-Mail input text field on Register page
      When User input "P@ssw0rd" on Password input text field on Register page
      When User input "P@ssw0rd" on Confirm Password input text field on Register page
      When User tap the Create Account button on Register page
      When User see the success message on Login page
      When User is on DANA Deals Login page
      When User input "87866112233" on phone number input field on login page
      When User input "P@ssw0rd" on password input field on login page
      When User click Login button
      When User is on DANA Deals Homepage
      When User click top up icon button on Home Page
      When User is on Top up Page
      When User see Balance on Top up Page
      When User choose "50k" as top up nominal on Top up Page
      When User choose Merchant as a payment method on Top up Page
      When User click Done Button on Top up Page
      When User is on DANA Deals Homepage
      When User total balance is added as "50000" nominal top up
      When User click filter dropdown menu button on DANA Deals homepage
      When User choose "fnb" to filter the voucher
      When User click "Aaab" on DANA Deals homepage
      When User is on voucher details page of "Aaab"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "Aaab"
      When User click pay voucher button on cashier page
      When User see pop up notification that pay success
      When User tap profile icon
      When User is on Profile screen
      When User tap LogOut button
      Then User is on DANA Deals Login page

    @ETE003
    Scenario: Register - Login - Top Up - Pay voucher with sort by voucher price
      Given User is on Register page
      When User input "81811223344" on Phone Number input text field on Register page
      When User input "alex" "alex" on Full Name input text field on Register page
      When User input "alex@gmail.com" on E-Mail input text field on Register page
      When User input "P@ssw0rd" on Password input text field on Register page
      When User input "P@ssw0rd" on Confirm Password input text field on Register page
      When User tap the Create Account button on Register page
      When User see the success message on Login page
      When User is on DANA Deals Login page
      When User input "81811223344" on phone number input field on login page
      When User input "P@ssw0rd" on password input field on login page
      When User click Login button
      When User is on DANA Deals Homepage
      When User click top up icon button on Home Page
      When User is on Top up Page
      When User see Balance on Top up Page
      When User choose "50k" as top up nominal on Top up Page
      When User choose Merchant as a payment method on Top up Page
      When User click Done Button on Top up Page
      When User is on DANA Deals Homepage
      When User total balance is added as "50000" nominal top up
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "saving rate" to sort the voucher
      When User see all vouchers of the sort by discount are displayed
      When User click "voucher name" on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "voucher name"
      When User click pay voucher button on cashier page
      When User see pop up notification that pay success
      When User tap profile icon
      When User is on Profile screen
      When User tap LogOut button
      Then User is on DANA Deals Login page

    @ETE004
    Scenario: Register - Login - Top Up - Pay voucher with sort by voucher price
      Given User is on Register page
      When User input "81899223344" on Phone Number input text field on Register page
      When User input "alexa" "alexa" on Full Name input text field on Register page
      When User input "alexa@gmail.com" on E-Mail input text field on Register page
      When User input "P@ssw0rd" on Password input text field on Register page
      When User input "P@ssw0rd" on Confirm Password input text field on Register page
      When User tap the Create Account button on Register page
      When User see the success message on Login page
      When User is on DANA Deals Login page
      When User input "81899223344" on phone number input field on login page
      When User input "P@ssw0rd" on password input field on login page
      When User click Login button
      When User is on DANA Deals Homepage
      When User click top up icon button on Home Page
      When User is on Top up Page
      When User see Balance on Top up Page
      When User choose "50k" as top up nominal on Top up Page
      When User choose Merchant as a payment method on Top up Page
      When User click Done Button on Top up Page
      When User is on DANA Deals Homepage
      When User total balance is added as "50000" nominal top up
      When User click sort dropdown menu button on DANA Deals homepage
      When User choose "discount" to sort the voucher
      When User see all vouchers of the sort by discount are displayed
      When User click "voucher name" on DANA Deals homepage
      When User is on voucher details page of "voucher name"
      When User click buy button on voucher details page
      When User is on voucher cashier page of "voucher name"
      When User click pay voucher button on cashier page
      When User see pop up notification that pay success
      When User tap profile icon
      When User is on Profile screen
      When User tap LogOut button
      Then User is on DANA Deals Login page
