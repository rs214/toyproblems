/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var hash = {};
  for (var i = 0; i < arr.length; i++) {
    current = arr[i];
    hash[current] = (hash[current] ? hash[current] : 0) + 1
  }
  for (var x = 0; x < arr.length; x++) {
    if (hash[arr[x]] % 2 === 0) {
      return arr[x];
    }
  }
  return null;
}

evenOccurrence([1, 7, 12, 4, 5, 6, 8, 9, 6, 12, 4]); //=> 12
