var argv = process.argv.slice(2);

if (argv.length < 1) {
  console.log('Usage: node index.js <count>');
  return;
}

var count = parseInt(argv.shift(1), 10);

for (var i = 1; i <= count; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}