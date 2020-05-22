"use strict";

//let num = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];
//let num = [-100, -50, 60, 0, 96, 40, 0, 18, -90, 75];
// let num = '';
/**
 * @param {Array} numbers 
 * @returns {Object} object { count: number, sum: number}
 */

function sumOfPositive(arr) {
 
  //Не понятно по ТЗ было ;(
  //Нужно проверять входные данные или нет ?
  //   if (! Array.isArray(arr)) { return 'Invalid data'};
  // в описании возращаемых вариантов не было строки или чего либо другого кроме обьекта { count, sum }

  let sum = arr.filter(id => +id > 0).reduce((sum, current) => sum + +current, 0);
  // Еще раз вычисление 
  let count = arr.filter(id => id > 0).length;
  //  Что лучше экономить ? Память или процесор ?
  //  Или  определяем новую перменную  ?
  //  let new_arr=arrs.filter(id => id  < 0);
  //  Так длинее  

  return { ...{ count, sum } };

}

let res_obj = sumOfPositive(num);

 console.log(res_obj);


 