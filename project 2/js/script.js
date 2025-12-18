class Order {
    
}
class Notification {
    constructor(title, content, date, icon = '', type = '', read = false) {
        this.title = title;
        this.content = content;
        this.date = date;
        this.icon = icon;
        this.type = type;
        this.read = read;
    }
}

const notification = {
    title: '',
    content: '',
    date: "",
    icon: '',
    type: '',
    read: false,
}