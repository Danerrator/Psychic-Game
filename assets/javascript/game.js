var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

document.onkeyup = function(event) {
    var userGuess = event.key;
}

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if(computerChoices.includes(userGuess)) {
        if (userGuess === computerGuess) {
            wins++;
            guessesSoFar.push(userGuess);
            guessesLeft--;
        }
        else if (userGuess !== computerGuess) {
            losses++;
            guessesSoFar.push(userGuess);
            guessesLeft--;
        }

        if(guessesLeft === 0) {
            location.reload();
        }
        else if (wins === 10)
    }



