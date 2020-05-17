let num = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];
let result_object={};

let function_sum = function(arrs){
  let count = 0;
  let sum = 0;
  for (let arr of arrs) {
   //    alert( arr ); 
    if (arr < 0 ){
      console.log(arr);
      count++;
      sum = sum + arr;
    } 

  } 
  let result_object={count,sum};
  return result_object;
}
let res_obj = function_sum(num);

console.log (res_obj)

