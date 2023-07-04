"use strict";

const scoreEl = document.querySelector("#score");
const numberOfGuessEl = document.querySelector("#numberOfGuess");
const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector("#btn");
const tryMessage = document.getElementById("try-again");

const randomNumber = Math.floor(Math.random() * 50) + 1;
let numberOfGuesses = 0;
let score = 20;

scoreEl.textContent = score;

buttonEl.addEventListener("click", function () {
  numberOfGuesses++;

  console.log(randomNumber);

  if (+inputEl.value < 1 || +inputEl.value > 50) {
    score--;
    scoreEl.textContent = score;
    numberOfGuessEl.textContent = numberOfGuesses;
    alert("Please select a guess between 1 and 50");
  } else {
    if (+inputEl.value === randomNumber) {
      tryMessage.textContent = "You won";
      alert("Congratulations, you won!");
    } else if (+inputEl.value > randomNumber) {
      tryMessage.textContent = "Too high!";
      tryMessage.style.color = "green";
      score--;
    } else {
      tryMessage.textContent = "Too Low!";
      tryMessage.style.color = "red";
      score--;
    }

    scoreEl.textContent = score;
    numberOfGuessEl.textContent = numberOfGuesses;
  }
});
