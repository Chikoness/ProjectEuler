// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first 
// ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one 
// hundred natural numbers and the square of the sum.

function findDifference(num) {
  // sum of the squares of the first ten natural numbers
  var squares = 0;

  // temp variable for square of the sum of the first ten natural numbers
  var sum = 0;
  // square of the sum of the first ten natural numbers
  var sumOfSquaresofSum = 0;

  for (var i = 1; i <= num; i++) {
    // finding the sum of the squares of the first ten natural numbers
    squares += Math.pow(i, 2);
    // finding the temp variable sum
    sum += i;
  }

  // finally getting square of the sum of the first ten natural numbers
  sumOfSquaresofSum = Math.pow(sum, 2);

  // return the difference
  return sumOfSquaresofSum - squares;
}

console.log(findDifference(100));
