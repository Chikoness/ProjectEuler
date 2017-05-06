// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?

function largestSumFactor(num) {
// Solution from http://www.thatjsdude.com/interview/js1.html

// "This is O(n). you can increase divisor by 2 form divisor = 3. 
// Because, if a number is divisible by any even number it would divisible by 2. 
// Hence, you dont need to divide by even numbers. Besides, you will not have a 
// factor bigger than half of its value."

  // start div variable with 2, it's the smallest prime number 
  var div = 2;
  // store prime factors in factor array
  var factor = [];

  // run while num > 2
  while (num > 2) {
    // prime factor formula
    if (num % div == 0) {
      // push div into factor array because it is a prime number
      // which is also a prime factor of num
      factor.push(div);
      // "you will not have a factor bigger than half of its value"
      num = num / div;
    } else {
      // move on div if it's not a prime factor
      div++;
    }
  }

  // return the last element of factor array because it's the biggest factor
  return factor.pop();
}

console.log(largestSumFactor(600851475143));