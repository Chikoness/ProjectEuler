// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13. What is the 10 001st prime number?

// a function to find out if a number is a prime
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

function findPrimeNum(num) {
  var array = [];
  
  // for loop until array length reaches num
  for (var i = 0; array.length < num; i++) {
    // if it is a prime, push into array
    if (isPrime(i)) {
      array.push(i);
    }
  }

  // return last element of the array
  return array.pop();
}

console.log(findPrimeNum(10001));