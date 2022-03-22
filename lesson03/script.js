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
    const quantity = prompt("Количество товара", "5")/1;
    const category = prompt("Категория товара", "category");
    const price = prompt("Цена товара", "5")/1;

    if ( isNaN(quantity) || isNaN(price) || price <= 0 || quantity < 0 ){
        console.log("Вы ввели некорректные данные");
    } else {
        console.log(`На складе ${quantity} единицы товара "${productName}" на сумму ${quantity * price} деревянных`);
    }
    
}