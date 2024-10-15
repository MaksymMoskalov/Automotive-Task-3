class NotificationService {
  sendAddNotification(item) {
    console.log(`Товар додано: ${item.name}`);
  }

  sendRemoveNotification(item) {
    console.log(`Товар видалено: ${item.name}`);
  }
}

module.exports = NotificationService;
