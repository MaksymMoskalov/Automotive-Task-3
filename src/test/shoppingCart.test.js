const ShoppingCart = require("../shoppingCart");
const NotificationService = require("../notificationService");

// Мокаємо модуль NotificationService
jest.mock("../notificationService");

describe("ShoppingCart", () => {
  let cart;
  let mockNotificationService;

  beforeEach(() => {
    // Очищуємо всі імплементації моків перед кожним тестом
    NotificationService.mockClear();

    // Створюємо новий мікс для NotificationService
    mockNotificationService = {
      sendAddNotification: jest.fn(),
      sendRemoveNotification: jest.fn(),
    };

    // Налаштовуємо мікс, щоб повернути наш мікс замість реального NotificationService
    NotificationService.mockImplementation(() => mockNotificationService);

    // Створюємо новий екземпляр ShoppingCart
    cart = new ShoppingCart();
  });

  test("Кошик повинен бути порожнім при створенні", () => {
    expect(cart.getItems()).toEqual([]);
  });

  test("Можна додавати товар до кошика", () => {
    const item = { id: 1, name: "Товар 1", price: 100 };
    cart.addItem(item);
    expect(cart.getItems()).toContain(item);
    expect(mockNotificationService.sendAddNotification).toHaveBeenCalledWith(
      item
    );
  });

  test("Можна видаляти товар з кошика за ID", () => {
    const item1 = { id: 1, name: "Товар 1", price: 100 };
    const item2 = { id: 2, name: "Товар 2", price: 200 };
    cart.addItem(item1);
    cart.addItem(item2);
    cart.removeItem(1);
    expect(cart.getItems()).toEqual([item2]);
    expect(mockNotificationService.sendRemoveNotification).toHaveBeenCalledWith(
      item1
    );
  });

  test("Можна обчислити загальну вартість товарів у кошику", () => {
    const item1 = { id: 1, name: "Товар 1", price: 100 };
    const item2 = { id: 2, name: "Товар 2", price: 200 };
    cart.addItem(item1);
    cart.addItem(item2);
    expect(cart.getTotal()).toBe(300);
  });
});
