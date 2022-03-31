'use strict'
const gener = (items) => {
    let array = Array(items). fill(0);

    const newArr = array.map(item => {
        return item = Math.round(Math.random() * 100) + 1;
        });

    return newArr;
} 

console.log('gener: ', gener(5));