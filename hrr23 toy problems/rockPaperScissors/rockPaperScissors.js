/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/


var rockPaperScissors = function (rounds) {
  var result = [];
  var possibilities = ['rock', 'paper', 'scissors'];
  rounds = rounds || 3;

  function recurse (roundsLeft, currentRound) {
    if (roundsLeft === 0) {
      result.push(currentRound)
      return;
    }
    //we want this function to loop and push into result array
    for (var i = 0; i < possibilities.length; i++) {
      console.log(currentRound, 'currentRound')
      console.log(roundsLeft, 'roundsLeft')
      console.log(currentRound.concat(possibilities[i]), 'currentRoundconcat')
     recurse(roundsLeft - 1, currentRound.concat(possibilities[i]))
    }
  }
  recurse(rounds, [])
  return result
}

rockPaperScissors()

