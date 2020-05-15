
let date_invalid = true, data_input='', dd=0, mm=0, yy=0;

do { 
  let data_input = prompt("Enter Date in format MM/DD/YYYY", ['05/30/2006']);
  data_split=data_input.split('/');
//  console.log(data_split.length);
//  console.log(data_split[0],data_split[1],data_split[2]);
//  console.log(Date.parse(data_input));
  if  (data_split.length !== 3) continue ;
  if  ((data_split[0] > 12) || (data_split[0] <1) ) continue ;
  if  ((data_split[1] > 31) || (data_split[1] <1) ) continue ;
// Можно наверно использовать Date.parse 
  if  (!(Date.parse(data_input) > 1)) continue ;

  date_invalid=false;
} while (date_invalid);

  console.log(`${data_split[1]}.${data_split[0]}.${data_split[2]}`);
  alert(`${data_split[1]}.${data_split[0]}.${data_split[2]}`);



