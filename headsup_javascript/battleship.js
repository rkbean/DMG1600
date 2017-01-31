/*jslint devel: true */
var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = randomLoc + 1;
var location3 = randomLoc + 2;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
	guess = prompt("Ready, Aim, FIRE!! (enter a number between 0 and 6):");
	if (guess < 0 || guess > 6 ) {
		alert("Your guess of " + guess + " is not a valid number between 0 and 6");
		continue;
	}
	guesses += 1;
	myMessage = testHit(guess);
	alert(myMessage);
		
}

alert("You sunk my battleship!!  It took you " + guesses + " trys");

function testHit(testGuess, numGuesses) {
	alert("num of guesses " + numGuesses);
	if (guess == location1 || guess == location2 || guess == location3) {
		hits += 1;
		if (hits == 3) {
			isSunk = true;
		}
		return "HIT!!"; // alert("HIT!!");
		
	} else {
		return "MISS"; // alert("MISS");
	}
}
	
	
