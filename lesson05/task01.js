'use strict'
const converter = (moneyEur) =>{
    if (!Number.isNaN(parseFloat(moneyEur))){
    let totalMoneyRub = moneyEur * 1.2 * 73;
    return totalMoneyRub;
    } else {
    return console.log('not a number');
    }
}
console.log(converter(50));