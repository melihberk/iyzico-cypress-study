import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('The user visits the Iyzico demo page', () => {
  cy.visit('/');
  cy.wait(1000);
});

When('The user selects the second product', () => {
  cy.wait(1000);
  cy.get('li[class*="product"]').eq(2).click();
});

When('Adds the product to the basket', () => {
  cy.wait(1000);
  cy.get('button[name="add-to-cart"]').click();
});

When('Opens the basket', () => {
  cy.wait(1000);
  cy.get('a[class="button wc-forward"]').eq(1).click();
});

When('Proceeds to the payment page', () => {
  cy.wait(1000);
  cy.get('a[class="checkout-button button alt wc-forward"]').click();
});

When('Selects the debit or credit card option', () => {
  cy.wait(1000);
  cy.get('input[id="payment_method_iyzico"]').click();
});

When('Selects the payment with iyzico option', () => {
  cy.wait(1000);
  cy.get('input[id="payment_method_iyzico_pwi"]').click();
});

When('Clicks the pay with debit or credit card button', () => {
  cy.wait(1000);
  cy.get('button[data-value="Siparişi onayla"]').click();
});

When('The Continue to Payment button is clicked', () => {
  cy.origin('https://sandbox-ode.iyzico.com', () => {
    cy.wait(1000);
    cy.get('button[data-testid="button"]').eq(0).should('be.visible').click();
  });
});


When('The Pay with Card payment option is clicked', () => {
    cy.origin('https://sandbox-ode.iyzico.com', () => {
  cy.wait(1000);
  cy.contains('span', 'Kart ile Öde').click();
});
});


When('The Change Card button is clicked', () => {
    cy.origin('https://sandbox-ode.iyzico.com', () => {
  cy.wait(1000);
  cy.get('button[class="sc-jZOaZb ehJjSb"]').click();
});
});


When('The Pay with a New Card button is clicked in the opened popup', () => {
    cy.origin('https://sandbox-ode.iyzico.com', () => {
  cy.wait(1000);
  cy.get('div[class="sc-foxrOO cFRFwa"]').click();
});
});


When('Card information is entered as {string}, {string}, {string}, {string}', 
  (cardholderName, cardNumber, expiry, cvc) => {
    cy.origin('https://sandbox-ode.iyzico.com', { 
      args: { cardholderName, cardNumber, expiry, cvc } 
    }, ({ cardholderName, cardNumber, expiry, cvc }) => {
      cy.wait(1000);
      cy.get('input[placeholder="Kart Üzerindeki Ad Soyad"]').type(cardholderName);
      cy.get('input[placeholder="Kart Numarası"]').type(cardNumber);
      cy.get('input[placeholder="Ay / Yıl"]').type(expiry);
      cy.get('input[placeholder="CVC"]').type(cvc);
    });
});


When('The second saved card is selected', () => {
  cy.wait(1000);
  cy.get('label[class="css-1nrdqo0-Item ew4ydag1"]').eq(1).click();
});

When('Clicks the Pay button', () => {
  cy.wait(1000);
  cy.get('button[id="iyzi-proceed-to-quick-pwi"]').click();
});

When('The verification code is entered on the opened 3D screen', () => {
  cy.wait(1000);
  cy.get('input#iyz-input-verificationCode').type('123456');
});

When('The verification code is entered on the opened 3D screen for sandbox', () => {
  cy.origin('https://sandbox-ode.iyzico.com', () => {
    cy.wait(1000);
    cy.get('input[data-testid="verificationCode"]').type('123456');
  });
});

When('The user enters the SMS code and submits', () => {
  cy.origin('https://sandbox-api.iyzipay.com/', () => {
    cy.wait(1000); // ilk yükleme için ekstra bekleme bırakıldı
    cy.get('input[placeholder="Sms Code"]').type('283126');
    cy.wait(1000);
    cy.get('button').contains('Submit').click();
  });
});

When('If a second 3D verification screen appears, enters the SMS code and submits', () => {
  cy.origin('https://sandbox-api.iyzipay.com', () => {
    // 3 saniye boyunca input görünüyor mu diye bak, varsa işlemleri yap.
    cy.get('input[placeholder="Sms Code"]', { timeout: 3000 })
      .then(($input) => {
        if ($input && $input.is(':visible')) {
          cy.get('input[placeholder="Sms Code"]').type('283126');
          cy.wait(1000);
          cy.get('button').contains('Submit').click();
        } else {
          // Kod alanı çıkmadı, ekstra bir şey yapmaya gerek yok.
          cy.log('Ekstra SMS doğrulama ekranı açılmadı.');
        }
      });
  });
});


Then('The user should see the Sipariş Alındı confirmation', () => {
  cy.wait(1000);
  cy.get('h1.page-title').should('contain', 'Sipariş alındı');
});
