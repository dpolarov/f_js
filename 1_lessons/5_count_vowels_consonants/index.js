//Можно делать конечно через массив vowel_list = 'aeiouAEIOU' и нахождение вхождения в этот масив каждой буквы строки, 
// но это както неправильно , раньше писал на перле , поэтому регулярки 

var str = prompt("input string", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed');

str=str.replace(/[^a-z]+/ig, "")
var vowels = str.match(/[aeiou]/ig).length;
var consonants = str.match(/[^aeiou$]/ig).length;
//или так
var consonants = str.length - vowels; 

console.log('vowels: ' + vowels + ' consonants : ' + consonants);
alert('vowels: ' + vowels + ' consonants : ' + consonants);