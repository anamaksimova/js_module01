'use strict'
const ourNumber = Math.round(Math.random() * 100);
console.log(ourNumber);
let nextTry =Number(prompt('Отгадайте число от 0 до 100'));

if (nextTry){        
console.log(nextTry);

    while (!(nextTry === ourNumber) ){ 
        if (nextTry < ourNumber){
            nextTry = Number(prompt('Больше!'));
            } 
        if  (nextTry > ourNumber){
            nextTry = Number(prompt('Меньше!'));
            }
    } 
    if (nextTry === ourNumber){
        alert('Правильно!');
    }
} else  {
    alert('Игра закончилась');
}

