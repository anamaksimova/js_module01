'use strict'
const generInRangePlus = (items, n, m, string) => {
    let array = Array(items). fill(0);
    if (string === 'even'){
        if (n > m){
            const newArr = array.map(item => {
                return item = Math.round(Math.random() * (n - m) + m);
                });
            return newArr.filter(item => !(item % 2));
            } 
        if (m > n){
            const newArr = array.map(item => {
                return item = Math.round(Math.random() * (m - n) + n);
                });
            return newArr.filter(item => !(item % 2));
        } 
    }

    if (string === 'odd'){
        if (n > m){
            const newArr = array.map(item => {
                return item = Math.round(Math.random() * (n - m) + m);
                });
            return newArr.filter(item => item % 2);
            } 
        if (m > n){
            const newArr = array.map(item => {
                return item = Math.round(Math.random() * (m - n) + n);
                });
            return newArr.filter(item => item % 2);
        } 
    }

}


console.log('generInRangePlus: ', generInRangePlus(5, 3, 15, 'even'));