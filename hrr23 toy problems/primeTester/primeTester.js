/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (n === 1) {
    return false
  }
  else if (n === 2) {
    return true
  }
  else {
    for (var i = 2; i < n; i++) {
      if (n % x === 0) {
        return false
      }
    }
    return true;
  }
};


/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  //For all numbers a to sqrt of num
};


