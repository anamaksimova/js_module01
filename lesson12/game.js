'use strict';
const num1 = Number(
  prompt('Определите диапазон чисел. Введите значение нижней границы диапазона'));
const num2 = Number(
  prompt('Определите диапазон чисел. Введите значение верхней границы диапазона'));
const ourNumber = Math.round(Math.random() * (num2 - num1) + num1);
console.log('nub ' + ourNumber);
let attempts = 0;
if (num1 === 50 && num2 === 100) {
  attempts = 15;
} else {
  attempts = Math.round(0.3 * (num2 - num1));
}

let attempt = 0;
const array = new Array();
let nextTry = Number(prompt(`Отгадайте число от ${num1} до ${num2}`));
attempt += 1;
array.push(nextTry);

const foo1 = () => {
  if (nextTry < ourNumber) {
    nextTry = Number(prompt('Больше!'));
    if (array.some(item => item === nextTry)) {
      alert('это число было!');
    } else {
      array.push(nextTry);
      console.log(array);
      attempt += 1;
    }
  }

  if (nextTry > ourNumber) {
    nextTry = Number(prompt('Меньше!'));
    if (array.some(item => item === nextTry)) {
      alert('это число было!');
    } else {
      array.push(nextTry);
      console.log(array);
      attempt += 1;
    }
  }

  if (!(nextTry === ourNumber)) {
    if (attempt === attempts) {
      alert('попытки закончились!');
      return;
    }
    foo1();
  }
};


if (nextTry) {
  foo1();

  if (nextTry === ourNumber) {
    alert('Правильно!');
    }
  } else {
    alert('Игра закончилась');
}
