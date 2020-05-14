
var str = prompt("input word", 'Loremipsum');
var new_str='';
//простой метод
str1=Array.from(str).reverse().join('');
console.log(str1);

//алгоитмический 
i=str.length - 1;
for (i; i >= 0 ; i--){
  console.log(i);
  new_str=new_str + str[i];
}


alert(new_str);
console.log(new_str);