class Notification {
    constructor(title, content, type = 'success') {
        this.title = title;
        this.content = content;
        this.type = type;
        this.date = new Date().toLocaleTimeString();
    }

    render() {
        const div = document.createElement('div');
        div.className = `notification ${this.type}`;
        div.innerHTML = `<strong>${this.title}</strong><br>${this.content}`;
        
        document.getElementById('notifications').append(div);

        setTimeout(() => div.remove(), 5000);
    }
}

class Order {
    create() {
        new Notification(
            'Заказ создан',
            'Ожидайте дальнейшей информации',
            'success'
        ).render();
    }

    paid() {
        new Notification(
            'Заказ оплачен',
            'Ожидайте отправки',
            'warning'
        ).render();
    }

    sent() {
        new Notification(
            'Заказ отправлен',
            'Ожидайте курьера',
            'warning'
        ).render();
    }

    received() {
        new Notification(
            'Заказ получен',
            'Ждём вас снова!',
            'success'
        ).render();
    }
}

const form = document.getElementById('orderForm');
const actions = document.getElementById('orderActions');
const order = new Order();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    order.create();
    actions.classList.remove('hidden');
});

actions.addEventListener('click', (e) => {
    if (e.target.dataset.status === 'paid') order.paid();
    if (e.target.dataset.status === 'sent') order.sent();
    if (e.target.dataset.status === 'received') order.received();
});
