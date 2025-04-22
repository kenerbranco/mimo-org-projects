let countChance = 0;
let winGame = false;
const randomNumber = Math.floor(Math.random() * 101);
const answerDisplay = document.getElementById("answerDisplay");

function checkNumber() {
  countChance ++;
  const numberInputStr = document.getElementById("inputNumber").value;
  const numberInputNum = Number(numberInputStr);

  if (countChance <= 10 && winGame === false) {
    if (numberInputNum === randomNumber) {
      answerDisplay.innerHTML = "The number is " + randomNumber + ". You WIN!!. (Attempts: " + countChance + " of 10)";
      winGame = true;
    } else if (numberInputNum < randomNumber && winGame === false) {
      answerDisplay.innerHTML = "Secret number is higher than " + numberInputNum + ". (Attempts: " + countChance + " of 10)";

    } else if (numberInputNum > randomNumber && winGame === false) {
      answerDisplay.innerHTML = "Secret number is lower than " + numberInputNum + ". (Attempts: " + countChance + " of 10)";
    }

  } else if (winGame === true) {
    answerDisplay.innerHTML = "You WON. Restart the game to play again!";
  }
  
  else {
    answerDisplay.innerHTML = "You have reached the limit of attempts. Restart the game!";
  }
}
