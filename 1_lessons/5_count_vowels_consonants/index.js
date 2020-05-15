//Можно делать конечно через массив vowel_list = 'aeiouAEIOU' и нахождение вхождения в этот масив каждой буквы строки, 
// но это както неправильно , раньше писал на перле , поэтому регулярки 

let str = prompt("input string", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed');

str=str.toLowerCase().replace(/[^a-z]+/ig, "")
let vowels = str.match(/[aeiou]/ig).length;
let consonants = str.match(/[^aeiou$]/ig).length;
//или так
let consonants = str.length - vowels; 

console.log('vowels: ' + vowels + ' consonants : ' + consonants);
alert('vowels: ' + vowels + ' consonants : ' + consonants);