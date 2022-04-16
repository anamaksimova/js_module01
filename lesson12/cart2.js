'use strict';
const cart = {
  items: [],
  discount: 0,
  setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set totalPrice(total) {
    this.totalPrice = total;
  },
  count: 0,

  add(itemName, price, quantity = 1) {
    const newObj = {
      itemName,
      price,
      quantity,
    };
    console.log(newObj);
    this.items.push(newObj);
    this.increaseCount(quantity);
  },

  increaseCount(plusQuantity) {
    this.count += plusQuantity;
  },

  calculateItemPrice() {
    let totalPrice = 0;
    for (const item of cart.items) {
      const {itemName, price, quantity} = item;
      totalPrice += price * quantity * (100 - this.discount) / 100;
    }
    return totalPrice;
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    const itemsStr = JSON.stringify(this.items);
    console.log(itemsStr);
    console.log('total price: ' + this.totalPrice);
  },
};
console.log('Привет');
cart.setDiscount('NEWYEAR');
cart.discount = 50;
cart.add('milk', 20, 1);
cart.add('bread', 30, 3);
cart.add('tomato', 50);

// cart.clear();
cart.print();

console.log('cart.totalPrice(): ', cart.totalPrice);


