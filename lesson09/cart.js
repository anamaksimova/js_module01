'use strict'
const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice(){
        console.log('totalPrice: ', this.totalPrice);
        return this.totalPrice;
        
    },
    add(itemName, price, quantity = 1) {
        let newObj = {
            itemName: itemName,
            price: price,
            quantity:quantity
        };
        console.log(newObj);
        cart.items.push(newObj);
        cart.increaseCount(quantity);
        cart.calculateItemPrice();
    },

    increaseCount(plusQuantity) {
        for (const item of cart.items){
            const {itemName, price, quantity} = item;
            }
        this.count += plusQuantity; 
        
    },

    calculateItemPrice(){
        this.totalPrice = 0;
        for (const item of cart.items){
            const {itemName, price, quantity} = item;
            this.totalPrice += price * quantity;
            } 
        
        },

    clear(){
        this.items = [];
        this.totalPrice = 0; 
        this.count = 0;
    },

    print(){
        const itemsStr = JSON.stringify(cart.items);
        console.log(itemsStr);
        console.log('total price: ' + this.totalPrice);
    },
}

cart.add('milk', 20, 1);
cart.add('bread', 30, 3);
cart.add('tomato', 50);

cart.getTotalPrice();
cart.calculateItemPrice();
console.log('cart.calculateItemPrice(): ', cart.calculateItemPrice());
cart.print();