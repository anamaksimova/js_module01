'use strict';
const unicIPNumber = arr => {
  const listOfIp = [...new Set(arr)];
  return listOfIp.length;
};
console.log('Число уникальных IP-адресов: ' + unicIPNumber(listIPv4));
