const ShoppingCart = require("../shoppingCart");

test("Кошик повинен бути порожнім при створенні", () => {
  const cart = new ShoppingCart();
  expect(cart.getItems()).toEqual([]);
});

test("Можна додавати товар до кошика", () => {
  const cart = new ShoppingCart();
  const item = { id: 1, name: "Товар 1", price: 100 };
  cart.addItem(item);
  expect(cart.getItems()).toContain(item);
});

test("Можна видаляти товар з кошика за ID", () => {
  const cart = new ShoppingCart();
  const item1 = { id: 1, name: "Товар 1", price: 100 };
  const item2 = { id: 2, name: "Товар 2", price: 200 };
  cart.addItem(item1);
  cart.addItem(item2);
  cart.removeItem(1);
  expect(cart.getItems()).toEqual([item2]);
});

test("Можна обчислити загальну вартість товарів у кошику", () => {
  const cart = new ShoppingCart();
  const item1 = { id: 1, name: "Товар 1", price: 100 };
  const item2 = { id: 2, name: "Товар 2", price: 200 };
  cart.addItem(item1);
  cart.addItem(item2);
  expect(cart.getTotal()).toBe(300);
});
