var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var playerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var guessesArray = [];

var playerWins = 0;
var playerLosses = 0;
var guesses = 9;

// function (reset)

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();
    // var res = userGuess.toLowerCase();
    // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; so comp guess does not change each time moving to above onkey
    // var guessesArray = [];

    if (playerChoices.indexOf(userGuess) === -1) {
        return;
    }

    if (guessesArray.indexOf(userGuess) !== -1) {
        return;
    }


    if (userGuess === computerGuess) {
        playerWins++;
        console.log(playerWins);
        // showing wins in console
        console.log("user guess " + userGuess);
        console.log("computer guess " + computerGuess);
        guesses = 9;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
        guessesArray = [];
    }
    else {
        guesses--;
        guessesArray.push(userGuess);
        console.log(guesses);
        console.log("user guess " + userGuess);
        console.log("computer guess " + computerGuess);
    }

    if (guesses === 0) {
        playerLosses++;
        console.log(playerLosses);
        guesses = 9;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
        guessesArray = [];
    }

    var guessesStr = guessesArray.join(", ");

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
        "<p>Wins: " + playerWins + "</p>" +
        "<br>" +
        "<p>Losses " + playerLosses + "</p>" +
        "<br>" +
        "<p>Guesses Left: " + guesses + "</p>" +
        "<br>" +
        "<p>Your Guesses so far: " + guessesStr + "</p>"
    // "<span>," + userGuess + "</span>";


    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;

    // document.getElementById("wins").innerhtml = "Wins: " + playerWins;
    // document.getElementById("losses").innerhtml = "Losses: " + playerLosses;
    // document.getElementById("guesses").innerhtml = "Guesses left: " + guesses;
    // document.getElementById("chosen").innerhtml = "Your guesses so far: " + event.key;

    // runGame(userGuess, computerGuess);

    // console.log("User guess: " + userGuess);

    // console.log("Computer guess: " + computerGuess);
}



// // function runGame(ug, cg) {

// //     if (ug  )

// }
