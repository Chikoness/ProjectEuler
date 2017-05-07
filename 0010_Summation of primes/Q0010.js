// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

function isPrime(n) {
  // another function to determine if a number is a prime
  var start = 2;
    while (start <= Math.sqrt(n)) {
        if (n % start++ < 1) {
          return false;
        }
    }
    return n > 1;
}

function sumPrimes(num) {
  var sum = 0;

  // loop through num and sum the prime numbers
  for (var i = 0; i < num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumPrimes(2000000))