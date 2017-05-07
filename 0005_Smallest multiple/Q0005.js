// 2520 is the smallest number that can be divided by each of the
// numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by 
// all of the numbers from 1 to 20?

function findSMD (a, b) {
  // a = 1st num
  // b = 2nd num
  var num = 1;
  var isDivisible = true;

  // while isDivisible is true
  while (isDivisible) {
    // run a reversed for loop from b countdown to a
    for (var i = b; i >= a; i--) {
      // if num is not divisible by i, means it's not a common multiple
      if (num % i !== 0) {
        // continue being true, to keep looping the while loop
        isDivisible = true;
        // acts as a counter to num
        num += i + 1;
        // break, and rerun while loop
        break;
      } else {
        // if it is divisible, we finally found the common multiple!
        // break while loop by setting isDivisible to false
        isDivisible = false;
      }
    }
  }

  return num;

}

console.log(findSMD(1, 20));