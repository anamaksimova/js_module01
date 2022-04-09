'use strict'
const cart = {
    items: [],
    get totalPrice(){
        return this.calculateItemPrice();
    },
    set totalPrice(total){
        this.totalPrice = total;
    },
    count: 0,

    add(itemName, price, quantity = 1) {
        let newObj = {
            itemName: itemName,
            price: price,
            quantity:quantity
        };
        console.log(newObj);
        cart.items.push(newObj);
        cart.increaseCount(quantity);

    },

    increaseCount(plusQuantity) {
        for (const item of cart.items){
            const {itemName, price, quantity} = item;
            }
        this.count += plusQuantity; 
        
    },

    calculateItemPrice(){
        let totalPrice = 0;
        for (const item of cart.items){
            const {itemName, price, quantity} = item;
            totalPrice += price * quantity;
            } 
        return totalPrice;
        
        },

    clear(){
        this.items = [];
        this.count = 0;
    },

    print(){
        const itemsStr = JSON.stringify(cart.items);
        console.log(itemsStr);
        console.log('total price: ' + this.totalPrice);
    },
}
console.log('Привет');

cart.add('milk', 20, 1);
cart.add('bread', 30, 3);
cart.add('tomato', 50);
// cart.clear();
cart.print();

console.log('cart.totalPrice(): ', cart.totalPrice);



