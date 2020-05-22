"use strict";
/**
 * @param {string} text 
 * @returns {Numbers}
 */

function strCharSum(str){
   
   return Array.from(str).reduce((a, current) => a + current.charCodeAt(0), 0);
    
};

/**
 * @param {string} text 
 * @returns {Array} array of object [ { word: 'слово', sum: сумма }, { word: 'слово', sum: сумма }]
 */

function wordStat(text){

  //Надо заменить  множесвенные пробелы и убрать пробелы в начале и в конце 

  const arrStr = text.replace(/\s+/g , " ").trim().split(' ');

  const result_obj = arrStr.map((itm, index, array )=> {
    const word = itm;
    const sum = strCharSum(itm);
    return {word, sum};
  });

  return result_obj;
}




