'use strict'
const maxDivider = (a, b) =>{
if (Number.isInteger(a) && Number.isInteger(b)){
    for (let i = Math.min(a,b); i >= 1; i--) { 
        if (a%i == 0 && b%i == 0){
        return i;
        }
    } 
}
return `Not integer`;
}

console.log('maxDivider: ', maxDivider(6.5,9));