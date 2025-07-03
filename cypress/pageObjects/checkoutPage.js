class CheckoutPage {
  selectCardOption() {
    return cy.get('input[id="payment_method_iyzico"]');
  }

  selectPayWithIyzicoOption() {
    return cy.get('input[id="payment_method_iyzico_pwi"]');
  }

  clickOrderConfirmButton() {
    return cy.get('button[data-value="Siparişi onayla"]');
  }
}

export default new CheckoutPage();
