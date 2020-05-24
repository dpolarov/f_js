"use strict";

//let num = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];
//let num = [-100, -50, 60, 0, 96, 40, 0, 18, -90, 75];
// let num = '';
/**
 * @param {Array} numbers 
 * @returns {Object} object { count: number, sum: number}
 */

function sumOfPositive(arr) {
 
  if (! Array.isArray(arr)) throw new Error('Invalid data');;
  
  const newArr = arr.filter(id => +id > 0);

  let sum = newArr.reduce((sum, current) => sum + +current, 0);
  let count = newArr.length;

  return { count, sum } ;

}

//let res_obj = sumOfPositive(num);

// console.log(res_obj);


 