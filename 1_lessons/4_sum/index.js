var sum = 0;
var count = 0;
while (true) {
  var value = +prompt("input numer", '');
  if (!value) break; // (*)
  count++;
  sum += value;
  mean = sum / count;
  console.log('Sum: ' + sum + 'Arithmetic mean: ' + mean + ' Count number: ' + count);
}

alert('Sum: ' + sum + 'Arithmetic mean: ' + mean + ' Count number: ' + count);

