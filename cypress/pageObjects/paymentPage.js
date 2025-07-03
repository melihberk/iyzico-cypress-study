class PaymentPage {
  continueToPaymentButton() {
    return cy.get('button[data-testid="button"]').eq(0);
  }

  payWithCardOption() {
    return cy.contains('span', 'Kart ile Öde');
  }

  changeCardButton() {
    return cy.get('button[class="sc-jZOaZb ehJjSb"]');
  }

  payWithNewCardPopup() {
    return cy.get('div[class="sc-foxrOO cFRFwa"]');
  }

  fillCardInfo(cardholderName, cardNumber, expiry, cvc) {
    cy.get('input[placeholder="Kart Üzerindeki Ad Soyad"]').type(cardholderName);
    cy.get('input[placeholder="Kart Numarası"]').type(cardNumber);
    cy.get('input[placeholder="Ay / Yıl"]').type(expiry);
    cy.get('input[placeholder="CVC"]').type(cvc);
  }

  selectSavedCard(index = 1) {
    return cy.get('label[class="css-1nrdqo0-Item ew4ydag1"]').eq(index);
  }

  clickFinalPayButton() {
    return cy.get('button[id="iyzi-proceed-to-quick-pwi"]');
  }

  enter3DVerificationCode() {
    return cy.get('input#iyz-input-verificationCode').type('123456');
  }

  enter3DVerificationCodeSandbox() {
    return cy.get('input[data-testid="verificationCode"]').type('123456');
  }

  enterSmsCode() {
    cy.get('input[placeholder="Sms Code"]').type('283126');
    cy.wait(1000);
    cy.get('button').contains('Submit').click();
  }

  checkIfExtraSmsPopupExists() {
    cy.get('input[placeholder="Sms Code"]', { timeout: 3000 })
      .then(($input) => {
        if ($input && $input.is(':visible')) {
          this.enterSmsCode();
        } else {
          cy.log('Ekstra SMS doğrulama ekranı açılmadı.');
        }
      });
  }

  confirmOrderSuccess() {
  return cy.get('h1.page-title').should('contain', 'Sipariş alındı');
}

}

export default new PaymentPage();
