// A palindromic number reads the same both ways. The largest palindrome made 
// from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(pal) {
  // when pal is splitted into arrays, reversed, and joined back
  // and is still equal to the original pal, it is a palindrome
  return pal.toString() == pal.toString().split("").reverse().join("");
}

function findLargestPalindrome() {
  // var to store the max product
  var max = 1;

  // 2 for loops to find the 2 largest 3-digit palindromes
  for (var i = 100; i <= 999; i++) {
    for (var j = i; j <= 999; j++) {
      // temporarily store product of i * j
      var tempProd = i * j;

      // if it is a palindrome && the temp product is bigger than max
      if (isPalindrome(tempProd) && tempProd > max) {
        // store into max
        max = i * j;
      }
    }
  }

  return max;
}

console.log(findLargestPalindrome());