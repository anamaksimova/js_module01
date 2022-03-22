'use strict'
{
    const rain = Math.round(Math.random());
    console.log('rain: ', rain);
    if (rain === 1){
        console.log('Пошёл дождь. Возьмите зонт!');
    } else if (rain === 0){
        console.log('Дождя нет!');
    }
}

// {
//     const mathExam = prompt("Введите кол-во баллов по математике");
//     const rusExam = prompt("Введите кол-во баллов по русскому языку");
//     const infoExam = prompt("Введите кол-во баллов по информатике");
//     if(Number(mathExam) + Number(rusExam) + Number(infoExam) >= 265){
//         alert('Поздравляю, вы поступили на бюджет!');
//     } else {
//         alert('Не беспокойтесь, Вы все еще можете пройти на коммерцию!');
//     }
// }

{
    const money = prompt("Введите требуемую сумму");
    if (Number(money)%100 === 0 && Number(money) > 0){
        console.log("Операция возможна");
    } else {
        console.log("Банкомат не может выдать такую сумму");
    }
}
