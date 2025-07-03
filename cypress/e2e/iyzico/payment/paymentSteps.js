import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import productPage from '../../../pageObjects/productPage';
import cartPage from '../../../pageObjects/cartPage';
import checkoutPage from '../../../pageObjects/checkoutPage';
import paymentPage from '../../../pageObjects/paymentPage';


Given('The user visits the Iyzico demo page', () => {
  cy.visit('/');
  cy.wait(1000);
});

When('The user selects the second product', () => {
  cy.wait(1000);
  productPage.selectSecondProduct().click();
});


When('Adds the product to the basket', () => {
  cy.wait(1000);
  productPage.addToCart().click();
});


When('Opens the basket', () => {
  cy.wait(1000);
  cartPage.openCart().click();
});

When('Proceeds to the payment page', () => {
  cy.wait(1000);
  cartPage.proceedToCheckout().click();
});

When('Selects the debit or credit card option', () => {
  cy.wait(1000);
  checkoutPage.selectCardOption().click();
});


When('Selects the payment with iyzico option', () => {
  cy.wait(1000);
  checkoutPage.selectPayWithIyzicoOption().click();
});

When('Clicks the pay with debit or credit card button', () => {
  cy.wait(1000);
  checkoutPage.clickOrderConfirmButton().click();
});

When('The Continue to Payment button is clicked', () => {
  cy.origin('https://sandbox-ode.iyzico.com', () => {
    cy.wait(1000);
    paymentPage.continueToPaymentButton().should('be.visible').click();
  });
});


When('The Pay with Card payment option is clicked', () => {
  cy.origin('https://sandbox-ode.iyzico.com', () => {
    cy.wait(1000);
    paymentPage.payWithCardOption().click();
  });
});



When('The Change Card button is clicked', () => {
  cy.origin('https://sandbox-ode.iyzico.com', () => {
    cy.wait(1000);
    paymentPage.changeCardButton().click();
  });
});


When('The Pay with a New Card button is clicked in the opened popup', () => {
  cy.origin('https://sandbox-ode.iyzico.com', () => {
    cy.wait(1000);
    paymentPage.payWithNewCardPopup().click();
  });
});


When('Card information is entered as {string}, {string}, {string}, {string}', 
  (cardholderName, cardNumber, expiry, cvc) => {
    cy.origin('https://sandbox-ode.iyzico.com', { args: { cardholderName, cardNumber, expiry, cvc } }, 
      ({ cardholderName, cardNumber, expiry, cvc }) => {
        cy.wait(1000);
        paymentPage.fillCardInfo(cardholderName, cardNumber, expiry, cvc);
    });
});


When('The second saved card is selected', () => {
  cy.wait(1000);
  paymentPage.selectSavedCard().click();
});


When('Clicks the Pay button', () => {
  cy.wait(1000);
  paymentPage.clickFinalPayButton().click();
});


When('The verification code is entered on the opened 3D screen', () => {
  cy.wait(1000);
  paymentPage.enter3DVerificationCode();
});


When('The verification code is entered on the opened 3D screen for sandbox', () => {
  cy.origin('https://sandbox-ode.iyzico.com', () => {
    cy.wait(1000);
    paymentPage.enter3DVerificationCodeSandbox();
  });
});


When('The user enters the SMS code and submits', () => {
  cy.origin('https://sandbox-api.iyzipay.com/', () => {
    paymentPage.enterSmsCode();
  });
});


When('If a second 3D verification screen appears, enters the SMS code and submits', () => {
  cy.origin('https://sandbox-api.iyzipay.com', () => {
    paymentPage.checkIfExtraSmsPopupExists();
  });
});


Then('The user should see the Sipariş Alındı confirmation', () => {
  cy.wait(1000);
  paymentPage.confirmOrderSuccess();
});

