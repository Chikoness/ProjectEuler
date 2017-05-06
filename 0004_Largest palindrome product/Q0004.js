// A palindromic number reads the same both ways. The largest palindrome made 
// from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(pal) {
  return pal.toString() == pal.toString().split("").reverse().join("");
}

function findLargestPalindrome() {
  var max = 1;

  for (var i = 100; i <= 999; i++) {
    for (var j = i; j <= 999; j++) {
      var tempProd = i * j;

      if (isPalindrome(tempProd) && tempProd > max) {
        max = i * j;
      }
    }
  }

  return max;
}

console.log(findLargestPalindrome());