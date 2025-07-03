class ProductPage {
  selectSecondProduct() {
    return cy.get('li[class*="product"]').eq(2);
  }

  addToCart() {
    return cy.get('button[name="add-to-cart"]');
  }
}

export default new ProductPage();
