'use strict'
const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов','Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr1, arr2) => {
const passedStudents = [];
    for (const key in arr1) {
        if (!arr2.includes(arr1[key])){
        passedStudents.push(arr1[key]);
        }  
    }   return passedStudents;
}

console.log('Стеденты сдали экзамен: ', filter(allStudents, failedStudents));