var sum = 0;
let count = 0;
while (true) {
  let value = +prompt("input numer", '');
  if (isNaN(value)) break;
  count++;
  sum += value;
  mean = sum / count;
  console.log('Sum: ' + sum + 'Arithmetic mean: ' + mean + ' Count number: ' + count);
}

alert('Sum: ' + sum + 'Arithmetic mean: ' + mean + ' Count number: ' + count);

