'use strict'
const calculate = (total, quantity, promocode) =>{
    let finalTotal = total;
    if (quantity > 10){
        finalTotal = finalTotal - 0.03*finalTotal;
    }
    if (finalTotal > 30000){
        finalTotal = finalTotal - (finalTotal - 30000)*0.15;
    }
    if (promocode === "METHED"){
        finalTotal = finalTotal - 0.1*finalTotal;
    }
    if (promocode === "G3H2Z1" && finalTotal > 2000){
        finalTotal = finalTotal - 500;
    }

    return finalTotal;
}

console.log(calculate(1000, 20, "G3H2Z1"));