//let str = prompt("input string", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed');
let str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed';

let parse_word = function(input_str){
  let arrs_str = input_str.split(/[\s+]/);

  let result_obj=[];
   for ( word of arrs_str) {

      let res = {};
      res.word = word;
      res.sum = word.split('').reduce((a, b) => a + b.charCodeAt(0),0);
//      console.log(res.word, res.sum);
      result_obj.push(res);
  } 
  return result_obj;
}



console.table (parse_word(str));

