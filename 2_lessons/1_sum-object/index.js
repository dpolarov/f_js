let num = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];

function function_sum(arrs){
   
  // незнаю как лучше  find /map ? 
  let new_arr=arrs.filter(id => id  < 0);
  let sum = new_arr.reduce((sum, current) => sum + current, 0);
  let count =  new_arr.length;

  let result_object={count,sum};
  return result_object;
}

let res_obj = function_sum(num);

console.log (res_obj)

