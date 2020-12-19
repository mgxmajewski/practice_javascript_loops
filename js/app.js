const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;
let triesCount = 0;
let message;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

for (let i = 0; i <=10; i++) {
 let guess = prompt("Guess a number");
  if ( parseInt(guess) === randomNumber ) {
    message = `Yes it was ${randomNumber}, it took you ${i} number of times!`;
    break;
  } else {
    message = `No it was ${randomNumber}`;
  }
}

main.innerHTML = `<h1>${message}</h1>`;






// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable - DONE
//  2) End the loop when the user's guess matches the random number
//  3) Display a message letting the user know they guessed the number