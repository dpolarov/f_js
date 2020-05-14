var sum = 0;
var count = 0;
while (true) {
  var value = +prompt("input numer", '');
  if (!value) break; // (*)
  count++;
  sum += value;
  mean = sum / count;
  console.log('arithmetic mean: ' + mean + ' Count number: ' + count);
}

alert( 'arithmetic mean: ' + mean + ' Count number: ' + count);

