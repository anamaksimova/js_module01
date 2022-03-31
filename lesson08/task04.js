'use strict'
const whatYear = (n, m) => {
    let array = Array(Math.abs(n - m));
    array[0] = Math.min(n , m);
    array.forEach((item, i, arr) => {
        array[i+1] = array[i]+1;
    });
    return array.filter(item => !(item % 4));
}

console.log('whatYear: ', whatYear(2001, 2020));