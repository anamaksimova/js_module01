'use strict'
const generInRange = (items, n, m) => {
    let array = Array(items). fill(0);
    if (n > m){
        const newArr = array.map(item => {
            return item = Math.round(Math.random() * (n - m) + m);
            });
        return newArr;
        } 
    if (m > n){
        const newArr = array.map(item => {
            return item = Math.round(Math.random() * (m - n) + n);
            });
        return newArr;
    } 

}


console.log('generInRange: ', generInRange(5, -3, -5));