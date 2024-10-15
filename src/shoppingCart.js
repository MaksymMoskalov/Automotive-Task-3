const NotificationService = require("./notificationService");

class ShoppingCart {
  constructor() {
    this.items = [];
    this.notificationService = new NotificationService();
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
    this.notificationService.sendAddNotification(item);
  }

  removeItem(id) {
    const item = this.items.find((item) => item.id === id);
    this.items = this.items.filter((item) => item.id !== id);
    if (item) {
      this.notificationService.sendRemoveNotification(item);
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

module.exports = ShoppingCart;
