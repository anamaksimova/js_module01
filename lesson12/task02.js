'use strict';
const foo = () => {
  let sum = 0;
  const array = new Array();
  const sums = arr => {
    const numb = Math.round(Math.random() * 10);
    console.log('numb: ', numb);
    arr.push(numb);
    sum = 0;
    for (const elem of arr) {
      sum += elem;
      console.log(sum);
    }
  };
  while (sum < 20) {
    sums(array);
  }
  return array;
};


console.log('foo(): ', foo());
