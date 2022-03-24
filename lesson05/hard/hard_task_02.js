'use strict'
const num1 = prompt("Введите первое число")/1;
const num2 = prompt("Введите первое число")/1;

const minNumber = () =>{
return (num1 + num2 - Math.abs(num1-num2)) / 2;    
}
console.log('Minimum: ' + minNumber());
