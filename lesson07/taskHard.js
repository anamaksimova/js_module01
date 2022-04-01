'use strict'
const getAveragePriceGoods = arr =>{
    let totalSumm = 0;
    for (const [x, y] of arr){
        totalSumm += x * y;
    } 
    return totalSumm;
}
const allСashbox = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
];
console.log(getAveragePriceGoods(allСashbox));