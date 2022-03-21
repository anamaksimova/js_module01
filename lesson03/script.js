'use strict'
// {
//     const productName = 'milk';
//     const quantity = 2;
//     const category = 'milkProducts';
//     const price = 22;
//     console.log(productName);
//     console.log(`общая сумма товара: ${quantity * price}`);
// }
// {
//     const productName = 'bread';
//     const quantity = 5;
//     const category = 'bakery';
//     const price = 10;
//     console.log(productName);
//     console.log(`общая сумма товара: ${quantity * price}`);
// }
{
    const productName = prompt("Наименование товара", "milk");
    console.log('productName: ', productName);
    const quantity = +prompt("Количество товара", "5");
    console.log('quantity: ', quantity);
    const category = prompt("Категория товара", "category");
    console.log('category: ', category);
    const price = +prompt("Цена товара", "5");
    console.log('price: ', price);
    console.log(typeof quantity);
    console.log(typeof price);
    console.log(`На складе ${quantity} единицы товара "${productName}" на сумму ${quantity * price} деревянных`);

}