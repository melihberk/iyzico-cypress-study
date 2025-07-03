class CartPage {
  openCart() {
    return cy.get('a[class="button wc-forward"]').eq(1);
  }

  proceedToCheckout() {
    return cy.get('a[class="checkout-button button alt wc-forward"]');
  }
}

export default new CartPage();
