'use strict'
const isPrime = (num) => {
if (num > 0 && Number.isInteger(num)){

    for (let i = 2; i < num; i++) {
        if(!Boolean(num % i)){
            console.log(!Boolean(num % i));
            return false;
            break;
        }  
    }
    return true;
}
return console.log('Число не подходит под условия');
}

console.log('isPrime: ', isPrime(11));