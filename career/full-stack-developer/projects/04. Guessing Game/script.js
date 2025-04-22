let countChance = 0;
const randomNumber = Math.floor(Math.random() * 101);
const answerDisplay = document.getElementById("answerDisplay");

function checkNumber() {
  countChance ++;
  const numberInputStr = document.getElementById("inputNumber").value;
  const numberInputNum = Number(numberInputStr);

  if (countChance <= 10) {
    if (numberInputNum === randomNumber) {
      answerDisplay.innerHTML = "The number is " + randomNumber + ". You WIN!!. (Attempts: " + countChance + " of 10)";
    } else if (numberInputNum < randomNumber) {
      answerDisplay.innerHTML = "Secret number is higher than " + numberInputNum + ". (Attempts: " + countChance + " of 10)";

    } else if (numberInputNum > randomNumber) {
      answerDisplay.innerHTML = "Secret number is lower than " + numberInputNum + ". (Attempts: " + countChance + " of 10)";
    }

  } else {
    answerDisplay.innerHTML = "You have reached the limit of attempts. Restart the game!";
  }
}
