'use strict'
const changeOrder = (string) =>{
    let length = string.length;
    let newString ='';

    for (let i = length; i >= 0 ; i--) { 
        newString =  newString + string.charAt(i-1);
    }
    return newString;
}
console.log(changeOrder('Привет мир'));