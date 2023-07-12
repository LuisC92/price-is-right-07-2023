const playerName = prompt("Insert you Nickname?");

const randomNumber = Math.floor(Math.random() * 100) + 1;

// const playerNumber = Number(prompt("What is your guess? (between 1 and 100)"))

// console.log(playerName)
// console.log(randomNumber)
// console.log(playerNumber)

// if(playerNumber > randomNumber){
//     console.log("Too high")
// } else if(playerNumber < randomNumber){
//     console.log("Too low")
// } else {
//     console.log(`${playerName} wins!`)
// }

let playerNumber = Number(prompt("What is your guess? (between 1 and 100)"));

console.log(randomNumber);

function game() {
  console.log(playerNumber);

  if (playerNumber > randomNumber) {
    alert("Too high");
    playerNumber = Number(prompt("What is your guess? (between 1 and 100)"));
    game();
  } else if (playerNumber < randomNumber) {
    alert("Too low");
    playerNumber = Number(prompt("What is your guess? (between 1 and 100)"));
    game();
  } else if(playerNumber === randomNumber) {
    alert(`${playerName} wins!`);
    location.reload();
  } else {
    alert(`Insert a valid number`)
  }
}

while (playerNumber !== randomNumber) {
  game();
}
