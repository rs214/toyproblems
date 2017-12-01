// Work out what number day of the year it is.

// toDayOfYear([1, 1, 2000]) => 1
// Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

// The year can be evenly divided by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.



//input is an array with 3 integers date month year

function toDayOfYear(arr) {
  // return a number
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  var count = 0;
  for (var i = 0; i < arr[1] - 1; i++) {
    count += daysInMonth[i]
  }
  count = count + arr[0];
  if (arr[1] > 2) {
    if (arr[2] % 4 === 0) {
      arr[2] % 100 ? count++ : count
    }
  }
  return count;
}

toDayOfYear([1,5,2600])