class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

module.exports = ShoppingCart;
