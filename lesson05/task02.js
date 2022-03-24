'use strict'
const modify = (string) =>{
    let newString =  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return newString;
   
}

console.log(modify('привет Мир'));
