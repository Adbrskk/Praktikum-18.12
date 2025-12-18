const orderForm = document.getElementById('orderForm');
const orderStatus = document.getElementById('orderStatus');
const notifications = document.getElementById('notifications');

class Notification {
  constructor(title, text, type) {
    this.title = title;
    this.text = text;
    this.type = type;
  }

  show() {
    const toast = document.createElement('div');
    toast.className = `toast ${this.type}`;

    toast.innerHTML = `
      <div class="icon">!</div>
      <div class="toast-content">
        <strong>${this.title}</strong><br>
        ${this.text}
      </div>
      <div class="toast-close">×</div>
    `;

    toast.querySelector('.toast-close').onclick = () => toast.remove();
    notifications.appendChild(toast);

    setTimeout(() => toast.remove(), 5000);
  }
}

class Order {
  create() {
    new Notification(
      'Заказ создан',
      'Ожидайте оплаты',
      'success'
    ).show();

    orderStatus.style.display = 'flex';
  }

  paid() {
    new Notification(
      'Заказ оплачен',
      'Готовим к отправке',
      'warning'
    ).show();
  }

  sent() {
    new Notification(
      'Заказ отправлен',
      'Курьер в пути',
      'warning'
    ).show();
  }

  received() {
    new Notification(
      'Заказ получен',
      'Спасибо за покупку!',
      'success'
    ).show();
  }
}

const order = new Order();

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  order.create();
});

orderStatus.addEventListener('click', (e) => {
  const action = e.target.dataset.action;
  if (!action) return;
  order[action]();
});