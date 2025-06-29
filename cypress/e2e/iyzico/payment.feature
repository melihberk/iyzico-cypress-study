Feature: Completing a Purchase on Iyzico Demo Page

@payment
Scenario: Complete an order using a saved credit card

    Given The user visits the Iyzico demo page
    When The user selects the second product
    And Adds the product to the basket
    And Opens the basket
    And Proceeds to the payment page
    And Selects the debit or credit card option
    And Clicks the pay with debit or credit card button
    And The second saved card is selected 
    And Clicks the Pay button
    And The verification code is entered on the opened 3D screen
    And If a second 3D verification screen appears, enters the SMS code and submits
    Then The user should see the Sipariş Alındı confirmation

@payment
Scenario: Complete an order using a test card - payment with iyzico

    Given The user visits the Iyzico demo page
    When The user selects the second product
    And Adds the product to the basket
    And Opens the basket
    And Proceeds to the payment page
    And Selects the payment with iyzico option
    And Clicks the pay with debit or credit card button
    And The Continue to Payment button is clicked
    And The verification code is entered on the opened 3D screen for sandbox
    And The Pay with Card payment option is clicked
    And The Change Card button is clicked
    And The Pay with a New Card button is clicked in the opened popup
    And Card information is entered as "MELİH BERK", "5892830000000000", "12/30", "540"
    And The Continue to Payment button is clicked
    And The user enters the SMS code and submits
    Then The user should see the Sipariş Alındı confirmation
