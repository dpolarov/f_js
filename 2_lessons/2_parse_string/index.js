//let str = prompt("input string", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed');
let str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed';

function parse_word(input_str){
  // try?
  let arrs_str = input_str.split(/[\s+]/);

  let result_obj = arrs_str.map(function(itm, index, array) {
    const word = itm;
    const sum = itm.split('').reduce((a, current) => a + current.charCodeAt(0), 0);
    return {word, sum};
  });

  return result_obj;
}



console.table (parse_word(str));

