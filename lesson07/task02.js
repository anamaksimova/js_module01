'use strict'
const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = arr => {
let averageValue = 0;
    for (let index = 0; index < arr.length; index++) {
        averageValue += arr[index];
    }
return Math.floor( averageValue / arr.length);
}

console.log('getAverageValue: ', getAverageValue(allСashbox));