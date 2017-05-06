// QUESTION 0001 - Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we 
// get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function multiples(a, b, c) {
  // a = multiple no.1
  // b = multiple no.2
  // c = below 1000, or any other value
  
  // var to store sum 
  var sum = 0;

  for (var i = 0; i < c; i++) {
    // if i is a multiple of 3 or 5
    if (i % a === 0 || i % b === 0) {
      // add into sum
      sum += i; 
    }
  }

  return sum;
}

console.log(multiples(3, 5, 1000));