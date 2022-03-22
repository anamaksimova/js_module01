'use strict'
{
    const salary = prompt('Укажите сумму вашего месячного дохода');
    let tax = 0;

    if (salary <= 15000){
        tax = 0.13;
    }
    if ( 15001 <= salary  && salary <=50000 ){
        tax = 0.2;
    }
    if ( 50001 <= salary ){
        tax = 0.3;
    }
    console.log(`Оплатите ${tax * salary} рублей налога`);
}

{
    const salary = prompt('Укажите сумму вашего месячного дохода');
    let tax = 0;

    if (salary <= 15000){
        tax = 0.13;
        console.log(`Оплатите ${tax * salary} рублей налога`);
    }
    if ( 15001 <= salary  && salary <=50000 ){
        tax = 0.2;
        console.log(`Оплатите ${tax * (salary-15000)} рублей налога`);
    }
    if ( 50001 <= salary ){
        tax = 0.3;
        console.log(`Оплатите ${tax * (salary-50000)} рублей налога`);
    }
    
}