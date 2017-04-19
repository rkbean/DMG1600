/*jslint devel: true */
alert("You are hiking on a mountain at 7 pm and it's raining");

var weapon = prompt("all of a sudden, a zombie shows up in your path.  Choose your weapon: rifle, a rock, gun.");

var randomNumber = Math.round(Math.random() * 3);

if (randomNumber === 0) {
    alert("you are dead. You loose");
  
} else if (randomNumber === 1) {
    alert("the zombie is looking for brains. You win!");
} else if (randomNumber === 2) {
    alert("you kill the zombie with" + " " + weapon + "you win!");
}