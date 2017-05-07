// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function specialPT(num) {
  var a;
  var b;
  var c;

  // looping through b
  for (b = 1; b < num; b++) {
    // find a
    a = ((Math.pow(1000, 2) - 2000 * b) / (2000 - (2 * b)));

    // if a is an integer
    if (Math.floor(a) === a) {
      // find c
      c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      
      return a * b * c;
    }
  }
}

console.log(specialPT(1000));