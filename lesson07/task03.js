'use strict'
const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const addPrefix = (arr, chars) => {
let arr1 = arr;
arr1 = chars + ' ' + arr.join(', ' + chars  + ' ');
return arr1;
}

console.log(addPrefix(names, 'Mr'));