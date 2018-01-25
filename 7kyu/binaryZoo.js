// Oh no!
// The new zookeeper has lost track of how many animals are in the zoo because the last person to do the count thought it would be funny to do it in binary.

// Write a function that can help the zookeper convert the binary count.
// Input will be an object where key:value-pairs will represent an animal and a binary number.
// Output should be an integer that equals the sum of all the animals in the zoo.

// example:
// countTheAnimals({aardvark: '1101', tiger: '1100', donkey: '1100', emu: '1010'})
// should equal 47

function countTheAnimals(animals) {
  var count = 0;
    for (var key in animals) {
      count += parseInt(animals[key], 2)
      console.log(count)
    }
  return count;
}

countTheAnimals({aardvark: '1101', tiger: '1100', donkey: '1100', emu: '1010'}) //=> 47